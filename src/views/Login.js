import React, { useCallback, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/fields/button";
import { Input } from "../components/fields/input";
import { WholePageLoader } from "../containers/WholePageLoader";
import { useUser } from "../contexts/userContext";
import { login } from "../utils/api";

export const LoginView = () => {
  const userContext = useUser();
  const navigate = useNavigate();
  const token = userContext.getToken();

  useEffect(() => {
    if (token) {
      navigate("/app/subjects");
    }
  }, [token, navigate]);

  return <>{!userContext.getToken() && <Login />}</>;
};

export const Login = () => {
  const { control, handleSubmit } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const userContext = useUser();
  const [isLoaded, setIsLoaded] = useState(true);
  const navigate = useNavigate();

  const loginHandler = useCallback(
    ({ token, ...data }) => {
      userContext.login(token, data.user);
      navigate("/app/subjects");
    },
    [navigate, userContext]
  );

  const errorHandler = useCallback((error) => {
    /**
     * Error -> when user is not logged at google at all
     */
    if (error?.error === "idpiframe_initialization_failed") {
      return;
    }
    setErrorMessage(String(error));
    setIsLoaded(true);
  }, []);

  const formHandler = useCallback(
    async ({ email, password }) => {
      try {
        setIsLoaded(false);
        const response = await login(email, password);
        loginHandler(response);
      } catch (error) {
        let message;
        try {
          message = JSON.parse(error.message).message;
        } catch (error) {
          message = error;
        }
        errorHandler(message);
        setIsLoaded(true);
      }
    },
    [loginHandler, errorHandler]
  );

  return (
    <>
      {!isLoaded && (
        <div style={{ position: "fixed", top: 0, left: 0, zIndex: 100 }}>
          <div style={{ position: "relative" }}>
            <WholePageLoader />
          </div>
        </div>
      )}
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
              onClick={() => setIsLoaded(false)}
              onResponse={loginHandler}
              onFailure={errorHandler}
            />
          </div>
        </div>
      </form>
    </>
  );
};
