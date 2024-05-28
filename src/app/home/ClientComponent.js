'use client'
import React, { useState,useEffect } from 'react';
import styles from "../../assets/style.module.css";
import { useSession } from "next-auth/react";
import Loading from '../loading';
const ClientComponent = () => {
    const [investor,setInvestor]=useState([''])
    const [isLoading,setIsLoading]= useState(false)
    const {data} = useSession();
    
    useEffect(() => {
        setIsLoading(true)
        let token;
        if(data){
            token = data.user.name;
            fetchData(token);
        }
    }, [data]); 

    const fetchData = async (token) => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/api/personal-information';
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
                setInvestor(data.investor)
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false)
        }
    };

    if (isLoading) {
        return (
            <Loading loading={isLoading} />
        )
    }

    return (
        <div className={`${styles.d_flex} ${styles.mx_20}`}>
             <table>
                <tbody>
                    <tr>
                        <td>
                            Investor's Name:
                        </td>
                        <td>
                            {investor.investor_name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Father Name:
                        </td>
                        <td>
                            {investor.father_name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Mother Name:
                        </td>
                        <td>
                            {investor.mother_name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Residency:
                        </td>
                        <td>
                            {investor.residency}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Date of Birth:
                        </td>
                        <td>
                            {investor.dob}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Investor Code:
                        </td>
                        <td>
                            {investor.portfolio_code}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            National ID:
                        </td>
                        <td>
                            {investor.nid}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Contact Address:
                        </td>
                        <td>
                            {investor.mailing_address}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Mobile:
                        </td>
                        <td>
                            {investor.mobile}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            E-Mail:
                        </td>
                        <td>
                            {investor.email}
                        </td>
                    </tr>
                </tbody>
             </table>
        </div>
    );
};

export default ClientComponent;
