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
    
    const [fromDate, setFromDate]                       = useState();
    const [fromDateError, setFromDateError]             = useState();

    const [fiscalYearId, setFiscalYearId]           = useState();
    const [fiscalYearError, setFiscalYearError]     = useState();
    const [docUrl,setDocUrl]                        = useState();
    const [fiscalYear,setFiscalYear]                = useState([]);

    

    useEffect(() => {
        let token;
        if(data && data.user && data.user.name && data.user.name !== prevToken.current){
            token               = data.user.name;
            prevToken.current   = token;
            setIsLoading(true)
            fetchFiscalYear(token);
        }
    }, [data?.user?.name]);

  
    const fetchFiscalYear = async (token) => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/report/fiscal-year';
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
                setFiscalYear(data.fiscal_year) 
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
        }finally {
            setIsLoading(false)
        }
    };
    
    const handleInputChange = (e,setStateFunction) => {
        let element = e.target
        element.classList.add(styles.invalid)
        let children = element.parentElement.children;
        children[children.length - 1].textContent = element.validationMessage

        setStateFunction(element.value);
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
        formData.append('fiscal_year_id',fiscalYearId)

        setIsLoading(true)

        const url = process.env.NEXT_PUBLIC_API_URL + '/report/tax-certificate-download';
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

        
            if(response.status!=200){
                const setters = {
                    fiscal_year: setFiscalYearError,
                  };
                Object.entries(data.errors).forEach(([key, value]) => {
                    const setterName = key;
                    const setterFunction = setters[setterName];
                    if (setterFunction) {
                        setterFunction(value[0]);
                    }
                });
            }
    
            if(response.status==200){
                const blob = await response.blob();
                const docUrl = window.URL.createObjectURL(blob);
                setDocUrl(docUrl)
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
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_21} ${styles.flex_direction_col}`}>
                        <select
                            className={styles.input}
                            defaultValue=""
                            required
                            onChange={(e) => handleInputChange(e, setFiscalYearId)}
                            name={`fiscalYearId`}
                            onInvalid={e => ValidationHandle(e)}
                        >
                            <option disabled></option>
                        {
                            
                            fiscalYear && Object.keys(fiscalYear).length > 0?
                            (
                                fiscalYear.map((data,key)=>{
                                    return <option 
                                                value={data.fiscal_year_id} 
                                                key={data.fiscal_year_id}
                                            >
                                                {data.fiscal_year}
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
                        >Fiscal Year</label>
                        {
                            fiscalYearError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {fiscalYearError}
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
                {
                    docUrl&&<embed src={`${docUrl}`} type='application/pdf' width='100%' height='1000px'></embed>
                }
            </div>
        </>
    );
};

export default ClientComponent;
