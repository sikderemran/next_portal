'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from "../../assets/style.module.css";

const ClientComponent = () => {

    const [inputs, setInputs] = useState(['']);
    const [applicantName, setApplicantName] = useState(['']);
    const [applicantFatherName, setApplicantFatherName] = useState(['']);
    const [applicantMotherName, setApplicantMotherName] = useState(['']);

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
        const requestBody = JSON.stringify({ inputs });
        const response = await fetch('endpoint-url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: requestBody
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                {inputs.map((input, index) => (
                    <div className={`${styles.form_group} ${styles.flex_direction_col}`} key={index}>
                        <div className={styles.formcontrol}>
                            <input
                                className={styles.input}
                                type="text"
                                defaultValue={applicantName[index]}
                                required
                                onChange={(e) => handleInputChange(index, e, setApplicantName)}
                                name={`applicantName-${index}`}
                            />
                            <label className={styles.label}>Enter Mobile Number</label>
                        </div>
                        <div className={styles.formcontrol}>
                            <input
                                className={styles.input}
                                type="text"
                                defaultValue={applicantFatherName[index]}
                                required
                                onChange={(e) => handleInputChange(index, e, setApplicantFatherName)}
                                name={`applicantFatherName-${index}`}
                            />
                            <label className={styles.label}>Enter Mobile Number</label>
                        </div>
                    </div>
                ))}
                {/* <div className={styles.formcontrol}>
                    <button onClick={addMoreHandler} className={styles.input_btn} >Add</button>
                </div> */}
                <div className={`${styles.formcontrol} ${styles.my_30} ${styles.flex_justify_center} `}>
                    <button className={styles.input_btn} >Submit</button>
                </div>
            </form>
        </>
    );
};

export default ClientComponent;
