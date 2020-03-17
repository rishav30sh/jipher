import React from "react";
import SignIn from '../../components/signIn/signIn_comp'
import SignUp from '../../components/signup/signup-component'
import "./signin_signup_style.scss";

const SignInSignUp = () => {
  return <div className="signin_signup">
    <SignIn/>
    <SignUp/>
  </div>;
};


export default SignInSignUp