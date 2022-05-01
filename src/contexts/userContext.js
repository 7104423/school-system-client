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

  const login = (token, user) => {
    setToken(token);
    setUser(user);
  };

  const logout = () => {
    localStorage.clear("token");
    localStorage.clear("user");
  };

  return (
    <UserContext.Provider
      value={{
        getUser,
        setUser,
        getToken,
        setToken,
        login,
        logout,
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

