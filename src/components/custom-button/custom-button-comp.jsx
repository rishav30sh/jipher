import React from "react";
import './cutsom-button-style.scss';

const CustomButton = ({ children,isGoogleSignIn, ...otherProps }) => {
  return (
    <button className={` ${isGoogleSignIn ? "googleSignIn" : ''} custom-button `} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton
