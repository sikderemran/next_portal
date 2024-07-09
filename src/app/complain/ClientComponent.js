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

    const [complainList,setComplainList]                = useState([]);

    const [complainFeedback, setComplainFeedback]                 = useState();
    const [complainFeedbackError, setComplainFeedbackError]       = useState();

    

    useEffect(() => {
        let token;
        if(data && data.user && data.user.name && data.user.name !== prevToken.current){
            token               = data.user.name;
            prevToken.current   = token;
            setIsLoading(true)
            fetchComplainList(token);
        }
    }, [data?.user?.name]);

    const fetchComplainList = async (token) => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/complain-list';
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
                setComplainList(data.complain_list)
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
        formData.append('message',complainFeedback)

        setIsLoading(true)
        const url = process.env.NEXT_PUBLIC_API_URL + '/complain-submit';
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
                    message: setComplainFeedbackError,
                };
                Object.entries(data.errors).forEach(([key, value]) => {
                    const setterName = key;
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
                fetchComplainList(prevToken.current);
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
                     <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.d_flex_basis_50} ${styles.flex_direction_col}`}>
                        <input
                            className={styles.input}
                            type="text"
                            defaultValue={complainFeedback}
                            required
                            onChange={(e) => handleInputChange(e, setComplainFeedback)}
                            name={`complainFeedback`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        > Complain/Feedback</label>
                         {
                            complainFeedbackError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {complainFeedbackError}
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
                            <th className={`${styles.text_left}`}>Description</th>
                            <th className={`${styles.text_left}`}>Type</th>
                            <th className={`${styles.text_right}`}>status</th>
                            <th className={`${styles.text_right}`}>Business Date</th>
                            <th className={`${styles.text_right}`}>Request Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   complainList && Object.keys(complainList).length>0?
                            (
                                complainList.map((data,key)=>{ 
                                        return <tr key={key}>
                                                    <td className={`${styles.text_right}`}>{++key}</td>
                                                    <td className={`${styles.text_left}`}>{data.request_message}</td>
                                                    <td className={`${styles.text_left}`}>{data.request_type}</td>
                                                    <td className={`${styles.text_right}`}>{data.status=='P'?'Pending':'Resolved'}</td>
                                                    <td className={`${styles.text_right}`}>{data.business_date}</td>
                                                    <td className={`${styles.text_right}`}>{data.request_date}</td>
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
