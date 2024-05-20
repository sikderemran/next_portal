'use client'
import React, { useState } from 'react';
import styles from "../../assets/style.module.css";

const ClientComponent = () => {

    const [inputs, setInputs] = useState(['']);

    const [applicantName, setApplicantName] = useState(['']);

    const addMoreHandler = (e) => {
        e.preventDefault()
        setInputs(prevInputs => [...prevInputs, '']);
    };

    const handleInputChange = (index, value) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
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

    const ValidationHandle=(e)=>{
        e.preventDefault()
        let element=e.target
        element.classList.add(styles.invalid)
        let children = element.parentElement.children;
        children[children.length - 1].textContent=element.validationMessage
    }

    return (
        <>
            <form className={`${styles.d_flex} ${styles.flex_direction_col}`} onSubmit={handleSubmit}>
                <div className={`${styles.d_flex} ${styles.flex_direction_col_md} ${styles.flex_justify_center} ${styles.flex_wrap} ${styles.flex_no_wrap}`}>
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_14} ${styles.flex_direction_col}`}>
                        <input
                            className={styles.input}
                            type="email"
                            defaultValue={applicantName}
                            required
                            onChange={(e) => handleInputChange(e, setApplicantName)}
                            name={`applicantName`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        >Deposit Account Name</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_10} ${styles.flex_direction_col}`}>
                        <input
                            className={styles.input}
                            type="email"
                            defaultValue={applicantName}
                            required
                            onChange={(e) => handleInputChange(e, setApplicantName)}
                            name={`applicantName`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        >Bank Name</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_10} ${styles.flex_direction_col}`}>
                        <input
                            className={styles.input}
                            type="email"
                            defaultValue={applicantName}
                            required
                            onChange={(e) => handleInputChange(e, setApplicantName)}
                            name={`applicantName`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        >Branch Name</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_10} ${styles.flex_direction_col}`}>
                        <input
                            className={styles.input}
                            type="email"
                            defaultValue={applicantName}
                            required
                            onChange={(e) => handleInputChange(e, setApplicantName)}
                            name={`applicantName`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        >Instrument Date</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_10} ${styles.flex_direction_col}`}>
                        <input
                            className={styles.input}
                            type="email"
                            defaultValue={applicantName}
                            required
                            onChange={(e) => handleInputChange(e, setApplicantName)}
                            name={`applicantName`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        > Instrument No.</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_10} ${styles.flex_direction_col}`}>
                        <input
                            className={styles.input}
                            type="email"
                            defaultValue={applicantName}
                            required
                            onChange={(e) => handleInputChange(e, setApplicantName)}
                            name={`applicantName`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        > Payment Type</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_10} ${styles.flex_direction_col}`}>
                        <input
                            className={styles.input}
                            type="email"
                            defaultValue={applicantName}
                            required
                            onChange={(e) => handleInputChange(e, setApplicantName)}
                            name={`applicantName`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        > Deposit Slip</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.mx_10} ${styles.flex_10} ${styles.flex_direction_col}`}>
                        <input
                            className={styles.input}
                            type="email"
                            defaultValue={applicantName}
                            required
                            onChange={(e) => handleInputChange(e, setApplicantName)}
                            name={`applicantName`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        > Deposit Amount </label>
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
        </>
    );
};

export default ClientComponent;
