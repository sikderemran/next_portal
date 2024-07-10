'use client'
import React, { useState } from 'react';
import styles from "../../assets/style.module.css";
import { useStep } from './context';

const StepName = ({total_step}) => {
    const { step }      = useStep();
    const step_name     = [
        'Contact Information',
        'OTP Verify',
        'Applicant Information',
        'Nominee Information',
        'Deposit Information',
        'Document Upload'
    ]
    return (
        <h1 className={`${styles.gradient_text_blue} `}>
            {step_name.map((val, key) => (
               (++key==step?val:'')
            ))}
        </h1>
        
    )
}

export default StepName