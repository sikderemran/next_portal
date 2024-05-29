'use client'
import React, { useState,useEffect,useRef } from 'react';
import styles from "../../assets/style.module.css";
import { useSession } from "next-auth/react";
import Loading from '../loading';
import Swal from 'sweetalert2'
import { signOut } from 'next-auth/react';

const ClientComponent = () => {
    const [investor,setInvestor]    = useState([])
    const [isLoading,setIsLoading]  = useState(false)
    const {data}                    = useSession();
    const prevToken                 = useRef(null);

    useEffect(() => {
        let token;
        if (data && data.user && data.user.name && data.user.name !== prevToken.current) {
            token             = data.user.name;
            prevToken.current = token
            setIsLoading(true);
            fetchData(token);
        }
        
    }, [data?.user?.name]); 

    const fetchData = async (token) => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/personal-information';
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
            }else if(res.status==401){
                Swal.fire({
                    position: "top-end",
                    icon: "warning",
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1000,
                }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                        signOut();
                    }
                });
            }
        } catch (error) {
            if(error.name=='TypeError'){
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: 'The server is not responding. Please wait for a moment.',
                    showConfirmButton: false,
                    timer: 2000,
                  });
            }
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
             {investor && Object.keys(investor).length > 0 &&(<table>
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
            )}
        </div>
    );
};

export default ClientComponent;
