import React from "react";
import { Button } from "../components/fields/button";
import { Input } from "../components/fields/input";

export const LoginContainer = () => {
  return (
    <div className="login-container-wrapper">
      <div className="login-container">
        <div className="title">Login</div>
        <Input.FluidInput
          type="text"
          label="name"
          id="name"
          style={{
            margin: "15px 0",
          }}
        />
        <Input.FluidInput
          type="password"
          label="password"
          id="password"
          style={{
            margin: "15px 0",
          }}
        />
        <Button
          style={{
            margin: "15px 0",
          }}
          className="login-button"
        >
          log in
        </Button>
        <div
          style={{
            margin: "15px 0",
          }}
        >
          <Button.GoogleLogin />
        </div>
      </div>
    </div>
  );
};
