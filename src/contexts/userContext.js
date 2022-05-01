import { createContext, useContext } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const getToken = () => {
    return localStorage.getItem("token");
  };

  const setToken = (token) => {
    return localStorage.setItem("token", token);
  };

  const clearToken = () => {
    localStorage.clear("token");
  };

  return (
    <UserContext.Provider
      value={{
        getUser,
        setUser,
        getToken,
        setToken,
        clearToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const user = useContext(UserContext);
  return user;
};

