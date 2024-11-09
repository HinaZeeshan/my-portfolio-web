
import React from 'react'
import  "../../style/Navbar.css"
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="main">
      <div className="logo">
        <h3>Portfolio.</h3>
      </div>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/About">About</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/creativity">Creativity</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
