'use client'
import React, { useState,useEffect } from 'react';
import styles from "../../assets/style.module.css";
import { useSession } from "next-auth/react";
import Loading from '../loading';

const ClientComponent = () => {
    const [isLoading,setIsLoading]= useState(false)
    const {data} = useSession();

    const [availableIpo,setAvailableIpo]= useState(['']);
    const [purchasePower, setPurchasePower] = useState(0);
    const [ipo, setIpo] = useState();
    const [lotSize, setLotSize] = useState(0);
    const [faceValue, setFaceValue] = useState(0);
    const [rate, setRate] = useState(0);
    const [ipoApplication, setIpoApplication] = useState();
    const [totalAmount, setTotalAmount] = useState(0);

    const [orderedIpo,setOrderedIpo]= useState(['']);

    useEffect(() => {
        setIsLoading(true)
        let token;
        if(data){
            token = data.user.name;
            fetchAvailableIpo(token);
            fetchOrderedIpo(token);
        }
    }, [data]);

    const fetchAvailableIpo = async (token) => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/api/available-ipo-list';
            const res = await fetch(url, {
                method: "GET",
                headers: { 
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(token)
                }
            });
            const data = await res.json();
            if(data.status=='success'){
                setAvailableIpo(data.available_ipo)
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false)
        }
    };

    const fetchOrderedIpo = async (token) => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/api/ordered-ipo-list';
            const res = await fetch(url, {
                method: "GET",
                headers: { 
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(token)
                }
            });
            const data = await res.json();
            if(data.status=='success'){
                setOrderedIpo(data.ordered_ipo)
                console.log(data.ordered_ipo)
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    const handleInputChange = (e,setStateFunction) => {

        //const selectedOption = e.target.options[e.target.selectedIndex];
        //console.log(selectedOption.textContent)
        //e.target.selectedOptions[0].getAttribute('data-tag')
        const value = e.target.value
        if(e.target.name=='ipo'){
           const faceValue      =e.target.selectedOptions[0].getAttribute('data-facevalue')
           const lotSize        =e.target.selectedOptions[0].getAttribute('data-lotsize')
           const rate           =e.target.selectedOptions[0].getAttribute('data-rate')
           const totalAmount    =e.target.selectedOptions[0].getAttribute('data-totalamount')
        
           setLotSize(lotSize)
           setFaceValue(faceValue)
           setRate(rate)
           setTotalAmount(totalAmount)
        }
        setStateFunction(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const requestBody = JSON.stringify({ inputs });
        const response = await fetch('endpoint-url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: requestBody
        });
    };

    const ValidationHandle=(e)=>{
        e.preventDefault()
        let element=e.target
        element.classList.add(styles.invalid)
        let children = element.parentElement.children;
        children[children.length - 1].textContent=element.validationMessage
    }

    if (isLoading) {
        return (
            <Loading loading={isLoading} />
        )
    }

    return (
        <>
            <form className={`${styles.d_flex} ${styles.flex_direction_col}`} onSubmit={handleSubmit}>
                <div className={`${styles.d_flex} ${styles.flex_direction_col_md} ${styles.flex_justify_center} ${styles.flex_wrap} ${styles.flex_no_wrap}`}>
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_14} ${styles.flex_direction_col}`}>
                        <input
                            className={styles.input}
                            type="text"
                            value={purchasePower}
                            onChange={(e) => e.preventDefault()}
                            name={`purchasePower`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        >Purchase Power</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_10} ${styles.flex_direction_col}`}>
                    <select
                            className={styles.input}
                            defaultValue={''}
                            required
                            onChange={(e) => handleInputChange(e, setIpo)}
                            name="ipo"
                            onInvalid={e => ValidationHandle(e)}
                        >
                            <option disabled></option>
                        {
                            availableIpo.map((data,key)=>{
                                return <option 
                                            value={data.ipo_details_id} 
                                            key={key}
                                            data-facevalue={data.facevalue}
                                            data-lotsize={data.instrument_lot_size}
                                            data-rate={data.rate}
                                            data-totalamount={data.total_amount}
                                        >
                                            {data.instrument_name}
                                        </option>
                            })
                        }
                        </select>
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        >Select Ipo</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_10} ${styles.flex_direction_col}`}>
                        <input
                            className={styles.input}
                            type="text"
                            value={lotSize}
                            onChange={(e) => e.preventDefault()}
                            name={`lotSize`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        >Lot size</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_10} ${styles.flex_direction_col}`}>
                        <input
                            className={styles.input}
                            type="text"
                            value={faceValue}
                            onChange={(e) => e.preventDefault()}
                            name={`faceValue`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        >Face Value</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_10} ${styles.flex_direction_col}`}>
                        <input
                            className={styles.input}
                            type="text"
                            value={rate}
                            onChange={(e) => e.preventDefault()}
                            name={`rate`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        > Rate</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_10} ${styles.flex_direction_col}`}>
                        <input
                            className={styles.input}
                            type="text"
                            defaultValue={ipoApplication}
                            required
                            onChange={(e) => handleInputChange(e, setIpoApplication)}
                            name={`ipoApplication`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        > IPO Application</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_10} ${styles.flex_direction_col}`}>
                        <input
                            className={styles.input}
                            type="text"
                            value={totalAmount}
                            onChange={(e) => e.preventDefault()}
                            name={`totalAmount`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        > Total Amount</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                </div>
                <div className={`${styles.formcontrol} ${styles.my_30} ${styles.d_flex} ${styles.flex_space_around} `}>
                    <button
                        className={styles.input_btn}
                    >Submit</button>
                </div>
            </form>

            <div className={`${styles.d_flex} ${styles.mx_20}`}>
                <table className={`${styles.w_100}`}>
                    <thead>
                        <tr>
                            <th>Instrument Name</th>
                            <th>Lot Size</th>
                            <th>Face Value	</th>
                            <th>Rate</th>
                            <th>Quantity</th>
                            <th>Total Amount</th>
                            <th>Business Date</th>
                            <th>Trade Date Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           orderedIpo.map((data,key)=>{ 
                                return <tr key={key}>
                                            <td>{data.instrument_name}</td>
                                            <td>{data.instrument_lot_size}</td>
                                            <td>{data.facevalue}</td>
                                            <td>{data.rate}</td>
                                            <td>{data.total_share_per_unit}</td>
                                            <td>{data.total_amount}</td>
                                            <td>{data.business_date}</td>
                                            <td>{data.record_date}</td>
                                        </tr>
                           })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ClientComponent;
