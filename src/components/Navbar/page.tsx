"use client"
import React from 'react'
import  "../../style/Navbar.css"
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import Link from 'next/link';
import { useState } from 'react';


const Navbar: React.FC = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const hideSidebar = () => {
    setIsSidebarVisible(false);
  };

  const showSidebar = () => {
    setIsSidebarVisible(true);
  };

  return (
    <div className="main">
      <div className="logo">
        <h3>Portfolio.</h3>
      </div>

      {/* Sidebar */}
      <div>
        <ul className={`slidebar ${isSidebarVisible ? 'visible' : ''}`}>
          <li onClick={hideSidebar}>
            <Link href="#">
              <FaXmark className='h-6  text-4xl'/>
            </Link>
          </li>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/About">about</Link>
          </li>
          <li>
            <Link href="#
            /skills">skills</Link>
          </li>
          <li>
            <Link href="/creativity">creativity</Link>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      </div>

      {/* Main Navigation */}
      <div>
        <ul>
          <li className="hideonmobile">
            <Link href="/">home</Link>
          </li>
          <li className="hideonmobile">
            <Link href="/About">about</Link>
          </li>
          <li className="hideonmobile">
            <Link href="/skills">skills</Link>
          </li>
          <li className="hideonmobile">
            <Link href="/creativity">creativity</Link>
          </li>
          <li className="hideonmobile">
            <Link href="/contact">contact</Link>
          </li>
          <li className="menu-button" onClick={showSidebar}>
            <Link href="#">
              <FaBars className='h-6  text-4xl' />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;


