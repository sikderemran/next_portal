'use client'
import React, { useState,useEffect,useRef } from 'react';
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
    const [depositList, setDepositList]         = useState([]);
    const [accountList, setAccountList]         = useState([]);
    const [bankList, setBankList]               = useState([]);
    const [paymentTypeList, setPaymentTypeList] = useState([]);

    
    const [account, setAccount]                 = useState();
    const [bank, setBank]                       = useState();
    const [instrumentDate, setInstrumentDate]   = useState();
    const [instrumentNo, setInstrumentNo]       = useState();
    const [paymentType, setPaymentType]         = useState();
    const [depositSlip, setDepositSlip]         = useState();
    const [depositAmount, setDepositAmount]     = useState();

    
    const [accountError, setAccountError]                   = useState();
    const [bankError, setBankError]                         = useState();
    const [instrumentDateError, setInstrumentDateError]     = useState();
    const [instrumentNoError, setInstrumentNoError]         = useState();
    const [paymentTypeError, setPaymentTypeError]           = useState();
    const [depositSlipError, setDepositSlipError]           = useState();
    const [depositAmountError, setDepositAmountError]       = useState();
    

    useEffect(() => {
        let token;
        if(data && data.user && data.user.name && data.user.name !== prevToken.current){
            token               = data.user.name;
            prevToken.current   = token;
            // setIsLoading(true)
            fetchAccountList(token)
            fetchBankList(token)
            fetchDepositList(token)
            fetchPaymentType(token)
        }
    }, [data?.user?.name]);

    const fetchAccountList = async (token) => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/deposit-account-list';
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
                setAccountList(data.account_list)
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

    const fetchBankList = async (token) => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/bank-list';
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
                setBankList(data.bank_list)
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

    const fetchDepositList = async (token) => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/depost-list';
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
                setDepositList(data.deposit_list)
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

    const fetchPaymentType = async (token) => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/payment-type-list';
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
                setPaymentTypeList(data.payment_list)
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


    const handleInputChange = (e,setStateFunction,index) => {
        let element = e.target
        element.classList.add(styles.invalid)
        let children = element.parentElement.children;
        children[children.length - 1].textContent = element.validationMessage

        const value = element.value

        if(element.name=='depositSlip'){
            setStateFunction(e.target.files[0])
        }else{
            setStateFunction(value)
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

        const formData = new FormData();
        formData.append('deposit_account_id',account)
        formData.append('bank_id',bank)
        formData.append('deposit_date',instrumentDate)
        formData.append('deposit_instrument_no',instrumentNo)
        formData.append('payment_type',paymentType)
        formData.append('deposit_amount',depositAmount)
        formData.append('deposit_slip',depositSlip)

        setIsLoading(true)
        const url = process.env.NEXT_PUBLIC_API_URL + '/deposit-submit';
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
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
                    deposit_account_id: setAccountError,
                    bank_id: setBankError,
                    deposit_date: setInstrumentDateError,
                    deposit_instrument_no: setInstrumentNoError,
                    payment_type: setPaymentTypeError,
                    deposit_slip: setDepositSlip,
                    deposit_amount: setDepositAmountError
                };
                if(data.errors == undefined){
                    const message=data.message
                    throw new Error(message);
                }else{
                    Object.entries(data.errors).forEach(([key, value]) => {
                        const setterName = key;
                        const setterFunction = setters[setterName];
                        if (setterFunction) {
                            setterFunction(value[0]);
                        }
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
                fetchDepositList(prevToken.current);
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
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_19} ${styles.flex_direction_col}`}>
                        <select
                            className={styles.input}
                            defaultValue=""
                            required
                            onChange={(e) => handleInputChange(e, setAccount)}
                            name={`account`}
                            onInvalid={e => ValidationHandle(e)}
                        >
                            <option disabled></option>
                        {
                                accountList && Object.keys(accountList).length > 0?
                                (
                                    accountList.map((data,key)=>{
                                        return <option 
                                                    value={data.account_details_id} 
                                                    key={key}
                                                >
                                                    {data.account_name}
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
                        >Deposit Account Name</label>
                        {
                            accountError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {accountError}
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
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_19} ${styles.flex_direction_col}`}>
                        <select
                            className={styles.input}
                            defaultValue=""
                            required
                            onChange={(e) => handleInputChange(e, setPaymentType)}
                            name={`paymentType`}
                            onInvalid={e => ValidationHandle(e)}
                        >
                            <option disabled></option>
                        {
                                paymentTypeList?
                                (
                                    Object.entries(paymentTypeList).map(([key, value]) => {
                                        return <option 
                                            value={key} 
                                            key={key}
                                        >
                                            {value}
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
                        >Payment Type</label>
                         {
                            paymentTypeError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {paymentTypeError}
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
                    {
                        (paymentType!='bkash' && paymentType!='cd')&&
                        <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_19} ${styles.flex_direction_col}`}>
                            <select
                                className={styles.input}
                                defaultValue=""
                                required
                                onChange={(e) => handleInputChange(e, setBank)}
                                name={`bank`}
                                onInvalid={e => ValidationHandle(e)}
                            >
                                <option disabled></option>
                            {
                                    bankList && Object.keys(bankList).length > 0?
                                    (
                                        bankList.map((data,key)=>{
                                            return <option 
                                                        value={data.org_id} 
                                                        key={data.org_id}
                                                    >
                                                        {data.org_name}
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
                            >Bank Name</label>
                            {
                                bankError?
                                (
                                    <span
                                        className={`${styles.text_left} ${styles.back_invalid}`}
                                    >
                                        {bankError}
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
                    }
                    
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_19} ${styles.flex_direction_col}`}>
                        <input
                            className={styles.input}
                            type="date"
                            defaultValue={instrumentDate}
                            required
                            onChange={(e) => handleInputChange(e, setInstrumentDate)}
                            name={`instrumentDate`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        >Instrument Date</label>
                        {
                            instrumentDateError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {instrumentDateError}
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
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_19} ${styles.flex_direction_col}`}>
                        <input
                            className={styles.input}
                            type="text"
                            defaultValue={instrumentNo}
                            required
                            onChange={(e) => handleInputChange(e, setInstrumentNo)}
                            name={`instrumentNo`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        > Instrument No.</label>
                        {
                            instrumentNoError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {instrumentNoError}
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
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_19} ${styles.flex_direction_col}`}>
                        <input
                            className={styles.input}
                            type="file"
                            required
                            onChange={(e) => handleInputChange(e, setDepositSlip)}
                            name="depositSlip"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        > Deposit Slip</label>
                        {
                            depositSlipError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {depositSlipError}
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
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_19} ${styles.flex_direction_col}`}>
                        <input
                            className={styles.input}
                            type="text"
                            defaultValue={depositAmount}
                            required
                            onChange={(e) => handleInputChange(e, setDepositAmount)}
                            name={`depositAmount`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        > Deposit Amount </label>
                        {
                            depositAmountError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {depositAmountError}
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
                            <th className={`${styles.text_left}`}>Payment Type</th>
                            <th className={`${styles.text_right}`}>Cheque No</th>
                            <th className={`${styles.text_right}`}>Cheque Date</th>
                            <th className={`${styles.text_right}`}>Amount</th>
                            <th className={`${styles.text_right}`}>Business Date</th>
                            <th className={`${styles.text_right}`}>Trade Date Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   depositList && Object.keys(depositList).length>0?
                            (
                                depositList.map((data,key)=>{ 
                                        return <tr key={key}>
                                                    <td className={`${styles.text_right}`}>{++key}</td>
                                                    <td className={`${styles.text_left}`}>{data.org_name}</td>
                                                    <td className={`${styles.text_left}`}>{data.payment_type}</td>
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
