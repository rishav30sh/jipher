import React from "react";
import "./cutsom-button-style.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={` ${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "googleSignIn" : ""
      } custom-button `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
