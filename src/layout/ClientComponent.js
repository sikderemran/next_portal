'use client'
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from '../assets/style.module.css';

const ClientComponent = () => {

    const [sideBar, setsideBar]         = useState(true);
    const [screenWidth, setScreenWidth] = useState();

    useEffect(() => {
        if(window.innerWidth<1000){
            sideBarHandler()
        }
        setScreenWidth(window.innerWidth);
    }, [(screenWidth>1000 || screenWidth<1000)]);

    const sideBarHandler = () => {
        setsideBar(prevState =>
            !prevState
        );
        const container = document.querySelector('.container')
        sideBar ? container.classList.add('nav-closed') : container.classList.remove('nav-closed');
    };

    return (
        <>
            <button onClick={sideBarHandler} className={styles.button_menu}>
                <FontAwesomeIcon viewBox="0 70 448 300" icon={faBars} />
            </button>
        </>
    );
};

export default ClientComponent;
