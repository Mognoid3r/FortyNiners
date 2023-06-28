import React from "react";
import "./Footer.css";
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="Footer-Container">
      <hr />
      <div className="footer">
       
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>

    </div>
  );
};

export default Footer;