import React from "react";
import "./signIn_style.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button-comp";
import { signInWithGoogle } from "../../firebase/firebase.utils"; //function required to initiate google sign in prompt
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState = {
      email: "",
      password: ""
    };
  };

  handlechange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2> I already have a Account</h2>
        <span> Sign IN with username and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            handleChange={this.handlechange}
            type="email"
            value={this.state.email}
            required
            label="Email"
          />
          <FormInput
            name="password"
            handleChange={this.handlechange}
            type="password"
            value={this.state.password}
            required
            label="Password"
          />
          <div className="buttons">
            <CustomButton type="submit"> SUBMIT </CustomButton>

            <CustomButton
              type="submit"
              isGoogleSignIn
              onClick={signInWithGoogle}
            >
              {" "}
              Sign In with Google{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
