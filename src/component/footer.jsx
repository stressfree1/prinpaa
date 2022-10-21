import React from "react"



function Footer(){
  const newYear= new Date().getFullYear(2022)
  return(
  <div className="footer">
    <footer>
    <p>Copyright princeawodu ⓒ {newYear}</p>
    </footer>
  </div>
  );
}
export default Footer;
