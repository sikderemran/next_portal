'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from "./page.module.css";

const ClientComponent = () => {

    const [inputs, setInputs] = useState(['']);

    const sideBarHandler = (e) => {
        e.preventDefault()
        setInputs(prevInputs => [...prevInputs, '']); 
    };

    const handleInputChange = (index, value) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
    };

    const handleSubmit = async  (e) => {
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
                    <input
                        key={index}
                        className={styles.input}
                        type="text"
                        value={input}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        name={`input-${index}`}
                    />
                ))}
                <button onClick={sideBarHandler} className={styles.input} >Add</button>
                <button className={styles.input} >Submit</button>
            </form>
        </>
    );
};

export default ClientComponent;
