import React from "react";
import "../../style/Footer.css"
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";


const Footer = () => {
  return (
    <div className="container-Footer">
      <div className="footer">
       <p>© 2024 HinaZeeshan </p>
       <div className="Icon">
       <FaFacebook className="text-white text-4xl" href="https://www.facebook.com/profile.php?id=100005291949671" target="_blank" />
       <FaLinkedin className="text-white text-4xl" href="https://www.linkedin.com/in/hina-zeeshan-0a92672ba/"  target="_blank"/> 
       <IoLogoWhatsapp className="text-white text-4xl"/>
       </div>
       </div>
    </div>
  );
};

export default Footer;
