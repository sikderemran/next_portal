'use client'
import React, { useState,useEffect,useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import styles from "../../assets/style.module.css";
import { useSession } from "next-auth/react";
import Loading from '../loading';
import Swal from 'sweetalert2'
import { signOut } from 'next-auth/react';

const ClientComponent = () => {

    const [isLoading,setIsLoading]              = useState(false)
    const [inputs, setInputs]                   = useState(['']);
    const {data}                                = useSession();
    const prevToken                             = useRef(null)
    const [purchasePower, setPurchasePower]     = useState(0);
    const [instrumentList, setInstrumentList]   = useState([]);
    const [orderInstrumentList, setOrderInstrumentList]   = useState([]);
    const [pricePercentage, setPricePercentage]     = useState(0);

    const [instrument, setInstrument]           = useState([]);
    const [closePrice, setClosePrice]           = useState([]);
    const [priceFrom, setPriceFrom]             = useState([]);
    const [priceTo, setPriceTo]                 = useState([]);
    const [quantity, setQuantity]               = useState([]);
    const [totalFrom, setTotalFrom]             = useState([]);
    const [totalTo, setTotalTo]                 = useState([]);
    const [days, setDays]                       = useState([]);

    const [instrumentError, setInstrumentError]           = useState([]);
    const [closePriceError, setClosePriceError]           = useState([]);
    const [priceFromError, setPriceFromError]             = useState([]);
    const [priceToError, setPriceToError]                 = useState([]);
    const [quantityError, setQuantityError]               = useState([]);
    const [totalFromError, setTotalFromError]             = useState([]);
    const [totalToError, setTotalToError]                 = useState([]);
    const [daysError, setDaysError]                       = useState([]);
    

    useEffect(() => {
        let token;
        if(data && data.user && data.user.name && data.user.name !== prevToken.current){
            token               = data.user.name;
            prevToken.current   = token;
            setIsLoading(true)
            fetchPurchasePower(token)
            fetchInstrumentList(token)
            fetchOrderInstrument(token)
            fetchPricePercentage(token)
        }
    }, [data?.user?.name]);

    const fetchPurchasePower = async (token) => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/purchasepower';
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

    const fetchInstrumentList = async (token) => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/buy-instrument-list';
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
                setInstrumentList(data.instrument_list)
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


    const fetchOrderInstrument = async (token) => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/buy-ordered-list';
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
                setOrderInstrumentList(data.ordered_list)
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

    const fetchPricePercentage = async (token) => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/buy-price-percentage';
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
                setPricePercentage(data.percentage_value)
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

    const addMoreHandler = (e) => {
        e.preventDefault()
        setInputs(prevInputs => [...prevInputs, '']);
    };

    const removeMoreHandler = (e) => {
        e.preventDefault()
        setInputs(prevInputs => {
            if (prevInputs.length > 1) {
                return prevInputs.slice(0, -1);
            } else {
                return prevInputs;
            }
        });
    };

    const handleInputChange = (e,setStateFunction,index) => {
        let element = e.target
        element.classList.add(styles.invalid)
        let children = element.parentElement.children;
        children[children.length - 1].textContent = element.validationMessage

        const value = element.value

        if(element.name==`instrument-${index}`){
            const closePrice      = element.selectedOptions[0].getAttribute('data-closeprice')
            setClosePrice(prevState => {
                const newState = [...prevState];
                newState[index] = closePrice;
                return newState;
            });
            setPriceFrom(prevState => {
                const newState = [...prevState];
                newState[index] = closePrice;
                return newState;
            });
            setPriceTo(prevState => {
                const newState = [...prevState];
                newState[index] = closePrice;
                return newState;
            });
        }else if(element.name==`quantity-${index}`){
            setTotalFrom(prevState => {
                const newState = [...prevState];
                newState[index] = parseFloat(value*priceFrom[index]).toFixed(2);
                return newState;
            });

            setTotalTo(prevState => {
                const newState = [...prevState];
                newState[index] = parseFloat(value*priceTo[index]).toFixed(2);
                return newState;
            });
        }else if(element.name==`priceFrom-${index}` ||  element.name==`priceTo-${index}`){
            const price     = parseFloat(closePrice[index])*(pricePercentage/100)
            const max_price = price+parseFloat(closePrice[index])
            const min_price = parseFloat(closePrice[index])-price
            if(parseFloat(value)>max_price || parseFloat(value)<min_price){
                element.setCustomValidity(`Price should be between ${min_price.toLocaleString()} and ${max_price.toLocaleString()}`)
                children[children.length - 1].textContent = `Price should be between ${min_price.toLocaleString()} and ${max_price.toLocaleString()}`
            }else{
                element.setCustomValidity('');
            }
        }

        setStateFunction(prevState => {
            const newState = [...prevState];
            newState[index] = value;
            return newState;
        });

    };

    const ValidationHandle=(e)=>{
        e.preventDefault()
        let element=e.target
        element.classList.add(styles.invalid)
        let children = element.parentElement.children;
        children[children.length - 1].textContent=element.validationMessage
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        let total_amount=0
        for (let i = 0; i < instrument.length; i++) {
            formData.append('instrument_id[]',(instrument[i]?instrument[i]:''))
            formData.append('price_from[]',(priceFrom[i]?priceFrom[i]:''))
            formData.append('price_to[]',(priceTo[i]?priceTo[i]:''))
            formData.append('quantity[]',(quantity[i]?quantity[i]:''))
            formData.append('days[]',(days[i]?days[i]:''))
            total_amount+=(totalTo[i]?parseFloat(totalTo[i]):0)
        }

        if(total_amount>parseFloat(purchasePower.replace(/,/g, ""))){
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
        const url = process.env.NEXT_PUBLIC_API_URL + '/buy-submit-order';
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
                    instrument_id: setInstrumentError,
                    price_from: setPriceFromError,
                    price_to: setPriceToError,
                    quantity: setQuantityError,
                    days: setDaysError
                };
                if(data.errors == undefined){
                    const message=data.message
                    throw new Error(message);
                }else{
                    Object.entries(data.errors).forEach(([key, value]) => {
                        const index=key
                        Object.entries(value).forEach(([key, data]) => {
                            const setterName = key;
                            const setterFunction = setters[setterName];
                            if (setterFunction) {
                                setterFunction(prevState => {
                                    const newState = [...prevState];
                                    newState[index] = data;
                                    return newState;
                                });
                            }
                        });
                    });
                }
            }
    
            if(data.status=='success'){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: data.message,
                    showConfirmButton: false,
                    timer: 2000,
                });
                fetchOrderInstrument(prevToken.current);
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

    if (isLoading) {
        return (
            <Loading loading={isLoading} />
        )
    }

    return (
        <>
            <form className={`${styles.d_flex} ${styles.flex_direction_col}`} onSubmit={handleSubmit}>
                <div className={`${styles.formcontrol} ${styles.d_flex} ${styles.flex_space_end} ${styles.gap_10} ${styles.align_item_center}`}>
                    <p><span className={`${styles.blink}`} >Purchase Power:</span> {purchasePower} BDT</p>
                    <button onClick={addMoreHandler} className={styles.input_btn} >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <button onClick={removeMoreHandler} className={styles.input_btn} >
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                </div>
                {inputs.map((input, index) => (
                <div key={index} className={`${styles.d_flex} ${styles.flex_direction_col_md} ${styles.flex_justify_center} ${styles.flex_wrap} ${styles.flex_no_wrap}`}>
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_14} ${styles.flex_direction_col}`}>
                        <select
                            className={styles.input}
                            defaultValue=""
                            required
                            onChange={(e) => handleInputChange(e, setInstrument,index)}
                            name={`instrument-${index}`}
                            onInvalid={e => ValidationHandle(e)}
                        >
                            <option disabled></option>
                        {
                                instrumentList && Object.keys(instrumentList).length > 0?
                                (
                                    instrumentList.map((data,key)=>{
                                        return <option 
                                                    value={data.instrument_details_id} 
                                                    key={key}
                                                    data-closeprice={data.close_price}
                                                >
                                                    {data.symbol}
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
                        >Select Instrument</label>
                        {
                            instrumentError[index]?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {instrumentError[index]}
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
                            value={closePrice[index] || 0}
                            name={`closePrice-${index}`}
                            onInvalid={e => ValidationHandle(e)}
                            onChange={(e) => e.preventDefault()}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        >Closing price</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_10} ${styles.flex_direction_col}`}>
                        <input
                            className={styles.input}
                            type="text"
                            defaultValue={priceFrom[index]}
                            required
                            onChange={(e) => handleInputChange(e, setPriceFrom,index)}
                            name={`priceFrom-${index}`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        >Price From</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_10} ${styles.flex_direction_col}`}>
                        <input
                            className={styles.input}
                            type="text"
                            defaultValue={priceTo[index]}
                            required
                            onChange={(e) => handleInputChange(e, setPriceTo,index)}
                            name={`priceTo-${index}`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        >Price To</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_10} ${styles.flex_direction_col}`}>
                        <input
                            className={styles.input}
                            type="text"
                            defaultValue={quantity[index]}
                            required
                            onChange={(e) => handleInputChange(e, setQuantity,index)}
                            name={`quantity-${index}`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        > Quantity</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_10} ${styles.flex_direction_col}`}>
                        <input
                            className={styles.input}
                            type="text"
                            value={totalFrom[index] || 0}
                            name={`totalFrom-${index}`}
                            onInvalid={e => ValidationHandle(e)}
                            onChange={(e) => e.preventDefault()}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        > Total From</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_10} ${styles.flex_direction_col}`}>
                        <input
                            className={styles.input}
                            type="text"
                            value={totalTo[index] || 0}
                            name={`totalTo-${index}`}
                            onInvalid={e => ValidationHandle(e)}
                            onChange={(e) => e.preventDefault()}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        > Total to</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_10} ${styles.flex_direction_col}`}>
                        <input
                            className={styles.input}
                            type="text"
                            defaultValue={days[index]}
                            
                            onChange={(e) => handleInputChange(e, setDays,index)}
                            name={`days-${index}`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        > Days </label>
                        {
                            daysError[index]?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {daysError[index]}
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
                </div>
                ))}
                <div className={`${styles.formcontrol} ${styles.my_30} ${styles.d_flex} ${styles.flex_space_around} `}>
                    <button
                        className={styles.input_btn}
                    >Submit</button>
                </div>
            </form>

            <div className={`${styles.d_flex} ${styles.mx_20}`}>
                <table className={`${styles.w_100} ${styles.mb_20}`}>
                    <thead>
                        <tr>
                            <th className={`${styles.text_right}`}>SL</th>
                            <th className={`${styles.text_left}`}>Instrument Name</th>
                            <th className={`${styles.text_right}`}>Total Quantity</th>
                            <th className={`${styles.text_right}`}>Min. Price</th>
                            <th className={`${styles.text_right}`}>Max. Price</th>
                            <th className={`${styles.text_right}`}>Min. Total</th>
                            <th className={`${styles.text_right}`}>Max. Total</th>
                            <th className={`${styles.text_right}`}>Business Date</th>
                            <th className={`${styles.text_right}`}>Trade Date Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   orderInstrumentList && Object.keys(orderInstrumentList).length>0?
                            (
                                orderInstrumentList.map((data,key)=>{ 
                                        return <tr key={key}>
                                                    <td className={`${styles.text_right}`}>{++key}</td>
                                                    <td className={`${styles.text_left}`}>{data.instrument_name}</td>
                                                    <td className={`${styles.text_right}`}>{data.total_shares}</td>
                                                    <td className={`${styles.text_right}`}>{data.min_price}</td>
                                                    <td className={`${styles.text_right}`}>{data.max_price}</td>
                                                    <td className={`${styles.text_right}`}>{data.min_total_amount}</td>
                                                    <td className={`${styles.text_right}`}>{data.max_total_amount}</td>
                                                    <td className={`${styles.text_right}`}>{data.business_date}</td>
                                                    <td className={`${styles.text_right}`}>{data.trade_time}</td>
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
