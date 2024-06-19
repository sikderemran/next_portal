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
        if (pathname == '/login' || pathname == '/aboutproduct' || pathname == '/register' || pathname == '/signup') {
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
                </div>
            }
        </>
    );
};

export default SideBarVisibility;
