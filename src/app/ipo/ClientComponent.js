'use client'
import React, { useState,useEffect,useRef } from 'react';
import styles from "../../assets/style.module.css";
import { useSession } from "next-auth/react";
import Loading from '../loading';
import Swal from 'sweetalert2'
import { signOut } from 'next-auth/react';

const ClientComponent = () => {
    const [isLoading,setIsLoading]              = useState(false)
    const {data}                                = useSession();
    const prevToken                             = useRef(null)

    const [orderedIpo,setOrderedIpo]            = useState([]);
    const [availableIpo,setAvailableIpo]        = useState([]);
    const [purchasePower, setPurchasePower]     = useState(0);
    const [ipo, setIpo]                         = useState();
    const [lotSize, setLotSize]                 = useState(0);
    const [faceValue, setFaceValue]             = useState(0);
    const [rate, setRate]                       = useState(0);
    const [quantity, setQuantity]               = useState();
    const [totalAmount, setTotalAmount]         = useState(0);

    const [quantityError, setQuantityError]               = useState();
    const [ipo_details_idError, setIpo_details_idError]               = useState();

    

    useEffect(() => {
        let token;
        if(data && data.user && data.user.name && data.user.name !== prevToken.current){
            token               = data.user.name;
            prevToken.current   = token;
            setIsLoading(true)
            fetchPurchasePower(token)
            fetchAvailableIpo(token);
            fetchOrderedIpo(token);
        }
    }, [data?.user?.name]);

    const fetchPurchasePower = async (token) => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/ipo-purchasepower';
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
                setPurchasePower(data.purchase_power)
            }else if(res.status==401){
                Swal.fire({
                    position: "top-end",
                    icon: "warning",
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1000,
                }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                        signOut();
                    }
                });
            }
        } catch (error) {
            if(error.name=='TypeError'){
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: 'The server is not responding. Please wait for a moment.',
                    showConfirmButton: false,
                    timer: 2000,
                  });
            }
        } finally {
            setIsLoading(false)
        }
    };

    const fetchAvailableIpo = async (token) => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/available-ipo-list';
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
            }else if(res.status==401){
                Swal.fire({
                    position: "top-end",
                    icon: "warning",
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1000,
                }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                        signOut();
                    }
                });
            }
        } catch (error) {
            if(error.name=='TypeError'){
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: 'The server is not responding. Please wait for a moment.',
                    showConfirmButton: false,
                    timer: 2000,
                  });
            }
        } finally {
            setIsLoading(false)
        }
    };

    const fetchOrderedIpo = async (token) => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/ordered-ipo-list';
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
            }else if(res.status==401){
                Swal.fire({
                    position: "top-end",
                    icon: "warning",
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1000,
                }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                        signOut();
                    }
                });
            }
        } catch (error) {
            if(error.name=='TypeError'){
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: 'The server is not responding. Please wait for a moment.',
                    showConfirmButton: false,
                    timer: 2000,
                  });
            }
        }
    };
    
    const handleInputChange = (e,setStateFunction) => {
        const value = e.target.value
        if(e.target.name=='ipo'){
            const faceValue      = e.target.selectedOptions[0].getAttribute('data-facevalue')
            const lotSize        = e.target.selectedOptions[0].getAttribute('data-lotsize')
            const rate           = e.target.selectedOptions[0].getAttribute('data-rate')
            setLotSize(lotSize)
            setFaceValue(faceValue)
            setRate(rate)

            if(quantity>0){
                const totalAmount    = (parseFloat(rate.replace(/,/g, ""))*parseInt(quantity)).toLocaleString()
                setTotalAmount(totalAmount)
            }
        }

        if(e.target.name=='quantity' && rate!=''){
            const totalAmount       = (parseFloat(rate.replace(/,/g, ""))*parseInt(e.target.value)).toLocaleString()
            setTotalAmount(totalAmount)
        }
        setStateFunction(value);
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new URLSearchParams();
        formData.append('ipo_details_id',ipo)
        formData.append('quantity',quantity)

        if(parseFloat(totalAmount.replace(/,/g,""))>parseFloat(purchasePower)){
            Swal.fire({
                position: "top-end",
                icon: "warning",
                title: 'Total amount can\'t exceed purchase power.',
                showConfirmButton: false,
                timer: 1000,
            })
            return
        }
        setIsLoading(true)
        const url = process.env.NEXT_PUBLIC_API_URL + '/submit-ipo';
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + String(prevToken.current)
                },
                body: formData
            });
            if(response.status==500){
                throw new Error('Internal server error');
            }
            const data = await response.json();
            if(response.status!=200){
                const setters = {
                    quantityError: setQuantityError,
                    ipo_details_idError: setIpo_details_idError
                  };
                Object.entries(data.errors).forEach(([key, value]) => {
                    const setterName = key + 'Error';
                    const setterFunction = setters[setterName];
                    if (setterFunction) {
                        setterFunction(value[0]);
                    }
                });
            }
    
            if(data.status=='success'){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: data.message,
                    showConfirmButton: false,
                    timer: 2000,
                });
                fetchOrderedIpo(prevToken.current);
            }
        } catch(error){
            if(error instanceof TypeError){
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: 'The server is not responding. Please wait for a moment.',
                    showConfirmButton: false,
                    timer: 2000,
                });
            }else{
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: error.message,
                    showConfirmButton: false,
                    timer: 2000,
                });
            }
        } finally{
            setIsLoading(false)
        }
        
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
                                availableIpo && Object.keys(availableIpo).length > 0?
                                (
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
                                ):
                                (
                                    <option disabled>Data not available</option>
                                )
                            
                        }
                        </select>
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        >Select Ipo</label>
                        {
                            ipo_details_idError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {ipo_details_idError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
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
                            defaultValue={quantity}
                            required
                            onChange={(e) => handleInputChange(e, setQuantity)}
                            name={`quantity`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        > Quantity</label>
                        {
                            quantityError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {quantityError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
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
                            <th className={`${styles.text_right}`}>SL</th>
                            <th className={`${styles.text_left}`}>Instrument Name</th>
                            <th className={`${styles.text_right}`}>Lot Size</th>
                            <th className={`${styles.text_right}`}>Face Value	</th>
                            <th className={`${styles.text_right}`}>Rate</th>
                            <th className={`${styles.text_right}`}>Quantity</th>
                            <th className={`${styles.text_right}`}>Total Amount</th>
                            <th className={`${styles.text_left}`}>Business Date</th>
                            <th className={`${styles.text_left}`}>Trade Date Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   orderedIpo && Object.keys(orderedIpo).length>0?
                            (
                                orderedIpo.map((data,key)=>{ 
                                        return <tr key={key}>
                                                    <td className={`${styles.text_right}`}>{++key}</td>
                                                    <td className={`${styles.text_left}`}>{data.instrument_name}</td>
                                                    <td className={`${styles.text_right}`}>{data.instrument_lot_size}</td>
                                                    <td className={`${styles.text_right}`}>{data.facevalue}</td>
                                                    <td className={`${styles.text_right}`}>{data.rate}</td>
                                                    <td className={`${styles.text_right}`}>{data.total_share_per_unit}</td>
                                                    <td className={`${styles.text_right}`}>{data.total_amount}</td>
                                                    <td className={`${styles.text_left}`}>{data.business_date}</td>
                                                    <td className={`${styles.text_left}`}>{data.record_date}</td>
                                                </tr>
                                })
                            ):
                            (
                                <tr>
                                    <td className={`${styles.text_center}`} colSpan={9}>Data not found</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ClientComponent;
