import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../components/fields/button";
import { Input } from "../components/fields/input";
import { login } from "../utils/api";

export const LoginContainer = () => {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const formHandler = useCallback(
    async ({ email, password }) => {
      const { token } = await login(email, password);
      localStorage.setItem("token", token);
      navigate("/app");
    },
    [navigate]
  );

  return (
    <form
      className="login-container-wrapper"
      onSubmit={handleSubmit(formHandler)}
    >
      <div className="login-container">
        <div className="title">EduGuide</div>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange } }) => (
            <Input.FluidInput
              type="text"
              label="email"
              id="email"
              onChange={onChange}
              style={{
                margin: "15px 0",
              }}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange } }) => (
            <Input.FluidInput
              type="password"
              label="password"
              id="password"
              onChange={onChange}
              style={{
                margin: "15px 0",
              }}
            />
          )}
        />
        <Button
          style={{
            margin: "15px 0",
          }}
          className="login-button"
          type="submit"
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
    </form>
  );
};
