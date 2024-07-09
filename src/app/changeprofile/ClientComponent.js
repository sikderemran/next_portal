'use client'
import React, { useState,useEffect,useRef } from 'react';
import styles from "../../assets/style.module.css";
import { useSession } from "next-auth/react";
import Loading from '../loading';
import Swal from 'sweetalert2'
import { signOut } from 'next-auth/react';

const ClientComponent = () => {

    const [investor,setInvestor]            = useState([])
    const [bankList, setBankList]           = useState([]);
    const [branchList, setBranchList]       = useState([]);
    const [isLoading,setIsLoading]          = useState(false)
    const {data}                            = useSession();
    const prevToken                         = useRef(null);

    const [investorName,setInvestorName]        = useState()
    const [mailingAddress,setMailingAddress]    = useState()
    const [email,setEmail]                      = useState()
    const [mobile,setMobile]                    = useState()
    const [accountNo,setAccountNo]              = useState()
    const [boAccountNo,setBoAccountNo]          = useState()
    const [depositSlip,setDepositSlip]          = useState()
    const [bank, setBank]                       = useState();
    const [branch, setBranch]                   = useState();


    const [investorNameError,setInvestorNameError]        = useState()
    const [mailingAddressError,setMailingAddressError]    = useState()
    const [emailError,setEmailError]                      = useState()
    const [mobileError,setMobileError]                    = useState()
    const [accountNoError,setAccountNoError]              = useState()
    const [boAccountNoError,setBoAccountNoError]          = useState()
    const [depositSlipError,setDepositSlipError]          = useState()
    const [bankError, setBankError]                       = useState();
    const [branchError, setBranchError]                   = useState();

    useEffect(() => {
        let token;
        if (data && data.user && data.user.name && data.user.name !== prevToken.current) {
            token             = data.user.name;
            prevToken.current = token
            setIsLoading(true);
            fetchData(token);
            fetchBankList(token)
        }
        
    }, [data?.user?.name]); 

    const fetchData = async (token) => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/personal-information';
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
                setInvestorName(data.investor.investor_name)
                setMailingAddress(data.investor.mailing_address)
                setEmail(data.investor.email)
                setMobile(data.investor.mobile)
                setAccountNo(data.investor.bank_account_no)
                setBoAccountNo(data.investor.bo_account_no)
                setBank(data.investor.bank_id)
                fetchBranchList(data.investor.bank_id,token)
                setBranch(data.investor.branch_id)
                setInvestor(data.investor)
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

    const fetchBranchList = async (bank_id,token) => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/branch-list?bank_id='+bank_id;
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
                setBranchList(data.branch_list)
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

        if(element.name=='bank'){
            fetchBranchList(value,prevToken.current)
        }

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
        formData.append('name',investorName)
        formData.append('mailing_address',mailingAddress)
        formData.append('email_address',email)
        formData.append('mobile_no',mobile)
        formData.append('bank_id',bank)
        formData.append('branch_id',branch)
        formData.append('bank_account_no',accountNo)
        formData.append('bo_account_no',boAccountNo)
        formData.append('bank_leaf',depositSlip)

        setIsLoading(true)
        const url = process.env.NEXT_PUBLIC_API_URL + '/update-personal-information';
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
                    name: setInvestorNameError,
                    mailing_address: setMailingAddressError,
                    email_address: setEmailError,
                    mobile_no: setMobileError,
                    bank_id: setBankError,
                    branch_id: setBranchError,
                    bank_account_no: setAccountNoError,
                    bo_account_no: setBoAccountNoError,
                    bank_leaf: setDepositSlipError
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
                        <input
                            className={styles.input}
                            type="text"
                            defaultValue={investor.investor_name}
                            required
                            onChange={(e) => handleInputChange(e, setInvestorName)}
                            name={`investorName`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        >Investor Name</label>
                        {
                            investorNameError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {investorNameError}
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
                            defaultValue={investor.mailing_address}
                            required
                            onChange={(e) => handleInputChange(e, setMailingAddress)}
                            name={`mailingAddress`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        > Mailing Address </label>
                        {
                            mailingAddressError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {mailingAddressError}
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
                            type="email"
                            defaultValue={investor.email}
                            required
                            onChange={(e) => handleInputChange(e, setEmail)}
                            name={`email`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        > Email</label>
                        {
                            emailError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {emailError}
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
                            defaultValue={investor.mobile}
                            required
                            onChange={(e) => handleInputChange(e, setMobile)}
                            name={`mobile`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        > Mobile</label>
                        {
                            mobileError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {mobileError}
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
                            defaultValue={investor.bank_account_no}
                            required
                            onChange={(e) => handleInputChange(e, setAccountNo)}
                            name={`accountNo`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        > Account No. </label>
                        {
                            accountNoError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {accountNoError}
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
                            defaultValue={investor.bo_account_no}
                            required
                            onChange={(e) => handleInputChange(e, setBoAccountNo)}
                            name={`boAccountNo`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        > BO Account No. </label>
                        {
                            boAccountNoError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {boAccountNoError}
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
                            defaultValue={bank}
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
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_19} ${styles.flex_direction_col}`}>
                        <select
                            className={styles.input}
                            defaultValue={branch}
                            required
                            onChange={(e) => handleInputChange(e, setBranch)}
                            name={`branch`}
                            onInvalid={e => ValidationHandle(e)}
                        >
                            <option disabled></option>
                        {
                                branchList && Object.keys(branchList).length > 0?
                                (
                                    branchList.map((data,key)=>{
                                        return <option 
                                                    value={data.branch_id} 
                                                    key={data.branch_id}
                                                >
                                                    {data.branch_name}
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
                        >Branch Name</label>
                        {
                            branchError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {branchError}
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
                        > Bank Statement/Cheque Leaf</label>
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
                </div>
                <div className={`${styles.formcontrol} ${styles.my_30} ${styles.d_flex} ${styles.flex_space_around} `}>
                    <button
                        className={styles.input_btn}
                    >Submit</button>
                </div>
            </form>

            <div className={`${styles.d_flex} ${styles.mx_20}`}>
              
            </div>
        </>
    );
};

export default ClientComponent;
