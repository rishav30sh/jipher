import React from "react";
import "./cutsom-button-style.scss";
import { CustomButtonContainer } from "./custom-button-style";
const CustomButton = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default CustomButton;
