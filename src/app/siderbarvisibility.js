'use client'
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from "../layout/sidebar";
import styles from "../assets/style.module.css";

const SideBarVisibility = ({ children }) => {

    const pathname = usePathname();
    const [showSidebar, setShowSidebar] = useState(false);
    const [showChildren, setShowChildren] = useState(false);

    useEffect(() => {
        if (pathname == '/login' || pathname == '/aboutproduct' || pathname == '/termscondition' || pathname == '/register' || pathname == '/signup' || pathname == '/forgotpassword') {
            setShowSidebar(false);
            setShowChildren(true)
        } else {
            setShowSidebar(true);
            setShowChildren(true)
        }
    }, [pathname]);

    return (
        <>
            {showSidebar && <Sidebar/>}
            {showChildren &&
                <div className={styles.page_content}>
                    
                    {children}
                    <marquee className={`${styles.text_color}`}>Welcome to I-Sheba.</marquee>
                </div>
            }
        </>
    );
};

export default SideBarVisibility;
