import React from "react";

function Footer(){
  const CRYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p>Copyright &copy; {CRYear} | Prasetya Ikra Priyadi</p>
    </div>
  )
}

export default Footer;