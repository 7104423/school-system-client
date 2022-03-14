import React from "react";
import { GoogleLoginButton } from "./GoogleLoginButton";

export class Button extends React.Component {
  static GoogleLogin = GoogleLoginButton;

  render() {
    return (
      <div
        className={`button ${this.props.className}`}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </div>
    );
  }
}
