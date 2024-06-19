'use client'
import React, { createContext, useContext, useState } from 'react';

const StepContext   = createContext();

export const ContextProvider=({ children })=>{
    const [step, setStep]   = useState(1);
    
    return (
        <StepContext.Provider value={{ step, setStep }}>
            {children}
        </StepContext.Provider>
    );
};

export const useStep = () => useContext(StepContext);
