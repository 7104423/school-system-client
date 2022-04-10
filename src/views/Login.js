import React, { useCallback, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../components/fields/button";
import { Input } from "../components/fields/input";
import { ViewTrap } from "../components/viewtrap";
import { login } from "../utils/api";

export const LoginView = () => {
  const { control, handleSubmit } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const loginHandler = useCallback(({ token }) => {
    localStorage.setItem("token", token);
    window.location.href = "/app";
  }, []);

  const errorHandler = useCallback((error) => {
    setErrorMessage(String(error));
  }, []);

  const formHandler = useCallback(
    async ({ email, password }) => {
      try {
        const response = await login(email, password);
        loginHandler(response);
      } catch (error) {
        errorHandler(error);
      }
    },
    [loginHandler, errorHandler]
  );

  return (
    <>
      <ViewTrap>
        <span>View trap content</span>
      </ViewTrap>
      <form
        className="login-container-wrapper"
        onSubmit={handleSubmit(formHandler)}
      >
        <div className="login-container">
          <div className="title">EduGuide</div>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input.FluidInput
                type="email"
                label="email"
                id="email"
                value={value}
                onChange={(event) => {
                  onChange(event?.target?.value);
                }}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input.FluidInput
                type="password"
                label="password"
                id="password"
                value={value}
                onChange={(event) => {
                  onChange(event?.target?.value);
                }}
              />
            )}
          />
          <div>
            {errorMessage && (
              <div style={{ marginTop: "15px" }}>
                <span className="text-danger">{errorMessage}</span>
              </div>
            )}
          </div>
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
            <Button.GoogleLogin
              onResponse={loginHandler}
              onFailure={errorHandler}
            />
          </div>
        </div>
      </form>
    </>
  );
};

