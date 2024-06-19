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

    const [withdrawList,setWithdrawList]                = useState([]);
    
    const [availableBalance, setAvailableBalance]       = useState(0);
    const [totalAmount, setTotalAmount]                 = useState(0);
    const [totalAmountError, setTotalAmountError]       = useState();

    

    useEffect(() => {
        let token;
        if(data && data.user && data.user.name && data.user.name !== prevToken.current){
            token               = data.user.name;
            prevToken.current   = token;
            setIsLoading(true)
            fetchAvailableBalance(token)
            fetchWithdrawList(token);
        }
    }, [data?.user?.name]);

    const fetchAvailableBalance = async (token) => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/available-balance';
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
                setAvailableBalance(data.available_balance)
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

    const fetchWithdrawList = async (token) => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/withdraw-list';
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
                setWithdrawList(data.withdraw_list)
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
        let element = e.target
        element.classList.add(styles.invalid)
        let children = element.parentElement.children;
        children[children.length - 1].textContent = element.validationMessage

        setStateFunction(element.value);
        if((parseFloat(element.value)+1000)>=parseFloat(availableBalance.replace(/,/g,""))){
            element.setCustomValidity(`Maximum withdraw amount ${availableBalance} after maintaining minimum balance 1000 tk.`)
            children[children.length - 1].textContent = `Maximum withdraw amount ${availableBalance} after maintaining minimum balance 1000 tk.`
        }else{
            element.setCustomValidity('');
        }
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

        const formData = new URLSearchParams();
        formData.append('withdraw_amount',totalAmount)
        if(totalAmount>parseFloat(availableBalance.replace(/,/g,""))){
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
        const url = process.env.NEXT_PUBLIC_API_URL + '/withdraw-submit';
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
                    totalAmountError: setTotalAmountError,
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
                fetchWithdrawList(prevToken.current);
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
                <div className={`${styles.d_flex} ${styles.flex_direction_col_md} ${styles.flex_justify_center} ${styles.flex_wrap} ${styles.flex_no_wrap}`}>
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_14} ${styles.flex_direction_col}`}>
                        <input
                            className={`${styles.input}`}
                            type="text"
                            value={availableBalance}
                            onChange={(e) => e.preventDefault()}
                            name={`availableBalance`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13} ${styles.blink}`}
                        >Available Balance</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_19} ${styles.flex_direction_col}`}>
                        <input
                            className={styles.input}
                            type="text"
                            defaultValue={totalAmount}
                            required
                            onChange={(e) => handleInputChange(e, setTotalAmount)}
                            name={`totalAmount`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        > Withdraw Amount</label>
                         {
                            totalAmountError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {totalAmountError}
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
                            <th className={`${styles.text_left}`}>Bank Name</th>
                            <th className={`${styles.text_right}`}>Payment Type</th>
                            <th className={`${styles.text_right}`}>Cheque No</th>
                            <th className={`${styles.text_right}`}>Cheque Date</th>
                            <th className={`${styles.text_right}`}>Amount</th>
                            <th className={`${styles.text_right}`}>Business Date</th>
                            <th className={`${styles.text_right}`}>Trade Date Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   withdrawList && Object.keys(withdrawList).length>0?
                            (
                                withdrawList.map((data,key)=>{ 
                                        return <tr key={key}>
                                                    <td className={`${styles.text_right}`}>{++key}</td>
                                                    <td className={`${styles.text_left}`}>{data.org_name}</td>
                                                    <td className={`${styles.text_right}`}>{data.payment_type}</td>
                                                    <td className={`${styles.text_right}`}>{data.chq_no}</td>
                                                    <td className={`${styles.text_right}`}>{data.chq_date}</td>
                                                    <td className={`${styles.text_right}`}>{data.amount}</td>
                                                    <td className={`${styles.text_right}`}>{data.business_date}</td>
                                                    <td className={`${styles.text_right}`}>{data.record_date}</td>
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
