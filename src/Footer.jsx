import React from "react";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-c">
      <h3>© {year} All Rights Reserved.</h3>
    </footer>
  );
};

export default Footer;