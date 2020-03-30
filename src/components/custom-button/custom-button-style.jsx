import styled, { css } from "styled-components";

const InvertedButtonStyles = css`
  background-color: white;
  color: black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const GoogleStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const Buttonstyles = styled.button`
  background-color: white;
  color: black;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return GoogleStyles;
  }
  return props.inverted ? InvertedButtonStyles : Buttonstyles;
};

const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;

export { CustomButtonContainer };
