import React from "react";
import { GoogleLoginButton } from "./GoogleLoginButton";

export class Button extends React.Component {
  static GoogleLogin = GoogleLoginButton;

  render() {
    return (
      <button {...this.props} className={`button ${this.props.className}`}>
        {this.props.children}
      </button>
    );
  }
}
