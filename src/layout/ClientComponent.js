'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const ClientComponent = () => {

  const [sideBar, setsideBar] = useState(true);
  const sideBarHandler = () => {
    setsideBar(prevState => 
      !prevState
    );
    const container=document.querySelector('.container')
    sideBar ? container.classList.add('nav-closed') : container.classList.remove('nav-closed');
  };

  return (
    <>
      <button onClick={sideBarHandler} className="button-menu">
        <FontAwesomeIcon viewBox="0 70 448 300" icon={faBars} />
      </button>
    </>
  );
};

export default ClientComponent;
