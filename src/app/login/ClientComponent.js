'use client'
import React, { useState } from 'react';
import styles from "../../assets/style.module.css";
import { useStep } from './context';

const ClientComponent = () => {

    const [inputs, setInputs] = useState(['']);
    const [applicantName, setApplicantName] = useState(['']);
    const [applicantFatherName, setApplicantFatherName] = useState(['']);
    const [applicantMotherName, setApplicantMotherName] = useState(['']);
    const { step, setStep } = useStep();

    const addMoreHandler = (e) => {
        e.preventDefault()
        setInputs(prevInputs => [...prevInputs, '']);
    };

    const handleInputChange = (index, e, setStateFunction) => {
        const value = e.target.value
        setStateFunction(prevState => {
            const newState = [...prevState];
            newState[index] = value;
            return newState;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStep((step < 4 ? step + 1 : step));
        const requestBody = JSON.stringify({ inputs });
        const response = await fetch('endpoint-url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: requestBody
        });
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
            <form onSubmit={handleSubmit}>
                {inputs.map((input, index) => (
                    <div 
                        className={`${styles.form_group} ${styles.flex_direction_col}`} 
                        key={index}
                    >
                        <div 
                            className={`${styles.formcontrol} ${styles.flex_direction_col}`}
                        >
                            <input
                                className={styles.input}
                                type="email"
                                defaultValue={applicantName[index]}
                                required
                                onChange={(e) => handleInputChange(index, e, setApplicantName)}
                                name={`applicantName-${index}`}
                                onInvalid={e => ValidationHandle(e)}
                            />
                            <label
                                className={styles.label}
                            >Email</label>
                            <span
                                className={`${styles.text_left} ${styles.invalid_message}`}
                            ></span>
                        </div>
                        <div className={`${styles.formcontrol} ${styles.flex_direction_col}`}>
                            <input
                                className={`${styles.input}`}
                                type="text"
                                defaultValue={applicantFatherName[index]}
                                required
                                onChange={(e) => handleInputChange(index, e, setApplicantFatherName)}
                                name={`applicantFatherName-${index}`}
                                onInvalid={e => ValidationHandle(e)}
                            />
                            <label 
                                className={styles.label}
                            >Password</label>
                            <span 
                                className={`${styles.text_left} ${styles.invalid_message}`}
                            ></span>
                        </div>
                    </div>
                ))}
                {/* <div className={styles.formcontrol}>
                    <button onClick={addMoreHandler} className={styles.input_btn} >Add</button>
                </div> */}
                <div 
                    className={`${styles.formcontrol} ${styles.my_30} ${styles.flex_space_around} `}
                >
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
