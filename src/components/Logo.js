import React from "react";
import logoFanny from '../images/fanny-logo-white.png';

function Logo(){
  return(
    <div
    className='logo-container'>
      <img
      className='logo-fanny'
      src={logoFanny}
      alt='Logo' />
    </div>
  );
}

export default Logo;