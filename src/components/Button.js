import React from "react";
import '../stylesheets/Button.css'

function Button(props){
    
    const isOperator = valor =>{
      return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    const clickValue = () =>{
      return props.driveClick(props.children);
    };
    
    return(
       <div
       className={`container-button ${isOperator(props.children)? 'operator' :''}`.trimEnd()}
       onClick={clickValue}>
        {props.children}
       </div>
    );
}

export default Button;