'use client'
import React, { useState } from 'react';
import styles from "../../assets/style.module.css";

const ClientComponent = () => {

    const [inputs, setInputs] = useState(['']);

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

    return (
        <>
           
        </>
    );
};

export default ClientComponent;
