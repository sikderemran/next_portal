'use client'
import React, { useState } from 'react';
import styles from "../../assets/style.module.css";
import { useStep } from './context';

const ProgressBar = ({total_step}) => {
    const { step }      = useStep();
    const totalSteps    = total_step;

    return (
        <div className={styles.progress_bar} >
            <ul style={{ '--step': step, '--total-steps': totalSteps }}>
                {[...Array(totalSteps)].map((_, index) => (
                    <li key={index} className={index < step ? styles.active : ''}></li>
                ))}
            </ul>
        </div>
    )
}

export default ProgressBar