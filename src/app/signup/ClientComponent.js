'use client'
import React, { useState } from 'react';
import styles from "../../assets/style.module.css";
import { useStep } from './context';
import Loading from '../loading';
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation';

const ClientComponent = () => {

    const [isLoading,setIsLoading]              = useState(false)
    const router                                = useRouter();
    const { step, setStep }                     = useStep();

    const [email, setEmail]                                   = useState();
    const [contactNumber, setContactNumber]                   = useState();
    const [portfolioCode, setPortfolioCode]                   = useState();
    const [otpCode, setOtpCode]                               = useState();
    const [password, setPassword]                             = useState();
    const [passwordConfirmation, setPasswordConfirmation]     = useState();

    const [emailError, setEmailError]                                   = useState();
    const [contactNumberError, setContactNumberError]                   = useState();
    const [portfolioCodeError, setPortfolioCodeError]                   = useState();
    const [otpCodeError, setOtpCodeError]                               = useState();
    const [passwordError, setPasswordError]                             = useState();
    const [passwordConfirmationError, setPasswordConfirmationError]     = useState();
    

    
    const handleInputChange = (e, setStateFunction) => {
        let element = e.target
        element.classList.add(styles.invalid)
        let children = element.parentElement.children;
        children[children.length - 1].textContent = element.validationMessage

        setStateFunction(element.value)
        
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const formData = new FormData();
        if(step==1){
            formData.append('email',email)
            formData.append('contact_number',contactNumber)
            formData.append('portfolio_code',portfolioCode)
        }else if(step==2){
            formData.append('otp_code',otpCode)
        }else if(step==3){
            formData.append('email',email)
            formData.append('contact_number',contactNumber)
            formData.append('portfolio_code',portfolioCode)
            formData.append('password',password)
            formData.append('password_confirmation',passwordConfirmation)
        }
        const url = process.env.NEXT_PUBLIC_API_URL + '/sign-up/'+step;
       
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: formData
            });

            const data = await response.json();
            
            if(data.status=='success'){
                setStep((step < 3 ? step + 1 : step));

                if(step==3){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: data.message,
                        showConfirmButton: false,
                        timer: 2000,
                    }).then((result) => {
                        if (result.dismiss === Swal.DismissReason.timer) {
                            router.push('/login');
                            router.refresh();
                        }
                    });
                }else{
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: data.message,
                        showConfirmButton: false,
                        timer: 2000,
                    });
                }
                
            }else if(data.errors != undefined){
                if(step==1){
                    var setters = {
                        email: setEmailError,
                        contact_number: setContactNumberError,
                    };
                }else if(step==2){
                    var setters = {
                        otp_code: setOtpCodeError
                    };
                }else if(step==3){
                    var setters = {
                        email: setEmailError,
                        contact_number: setContactNumberError,
                        password: setPasswordError,
                        password_confirmation: setPasswordConfirmationError,
                    };
                }

                Object.entries(data.errors).forEach(([key, value]) => {
                    const setterName = key;
                    const setterFunction = setters[setterName];
                    if (setterFunction) {
                        setterFunction(value[0]);
                    }
                });
            }else if(data.status=='error'){
                throw new Error(data.message);
            }else {
                throw new Error(data.message);
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

    const StepBackHandler = (e) => {
        e.preventDefault()
        setStep((step > 1 ? step - 1 : step));
    }
    const ValidationHandle=(e)=>{
        e.preventDefault()
        let element=e.target
        element.classList.add(styles.invalid)
        let children = element.parentElement.children;
        children[children.length - 1].textContent=element.validationMessage
    }

    return (
        <>
            <form className={`${styles.d_flex} ${styles.flex_direction_col} ${styles.flex_100}`} onSubmit={handleSubmit}>
                {
                step==1&&
                <div className={`${styles.d_flex} ${styles.flex_100} ${styles.flex_direction_col_md} ${styles.flex_justify_center} ${styles.flex_wrap} ${styles.flex_no_wrap}`}>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="email"
                            defaultValue={email}
                            required
                            onChange={(e) => handleInputChange(e, setEmail)}
                            name="email"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        > Email Address</label>
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
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="text"
                            defaultValue={contactNumber}
                            required
                            onChange={(e) => handleInputChange(e, setContactNumber)}
                            name="contactNumber"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        > Phone Number</label>
                        {
                            contactNumberError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {contactNumberError}
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
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="text"
                            defaultValue={portfolioCode}
                            required
                            onChange={(e) => handleInputChange(e, setPortfolioCode)}
                            name="portfolioCode"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        > Investor Code</label>
                        {
                            portfolioCodeError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {portfolioCodeError}
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
                }


                {
                step==2&&
                <div className={`${styles.d_flex} ${styles.flex_100} ${styles.flex_direction_col_md} ${styles.flex_justify_center} ${styles.flex_wrap} ${styles.flex_no_wrap}`}>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="text"
                            defaultValue={otpCode}
                            required
                            onChange={(e) => handleInputChange(e, setOtpCode)}
                            name="otpCode"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        > Verify OTP</label>
                        {
                            otpCodeError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {otpCodeError}
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
                }

                {
                step==3&&
                <div className={`${styles.d_flex} ${styles.flex_100} ${styles.flex_direction_col_md} ${styles.flex_justify_center} ${styles.flex_wrap} ${styles.flex_no_wrap}`}>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="password"
                            defaultValue={password}
                            required
                            onChange={(e) => handleInputChange(e, setPassword)}
                            name="password"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        > Password</label>
                        {
                            passwordError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {passwordError}
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
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="password"
                            defaultValue={passwordConfirmation}
                            required
                            onChange={(e) => handleInputChange(e, setPasswordConfirmation)}
                            name="passwordConfirmation"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        >Confirm Password</label>
                        {
                            passwordConfirmationError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {passwordConfirmationError}
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
                }


                <div className={`${styles.formcontrol} ${styles.my_30} ${styles.d_flex} ${styles.flex_space_around} `}>
                    <button
                        onClick={StepBackHandler} className={styles.input_btn}
                    >Back</button>
                    <button
                        className={styles.input_btn}
                    >Next</button>
                </div>
            </form>
        </>
    );
};

export default ClientComponent;
