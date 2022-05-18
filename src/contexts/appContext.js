import { createContext, useContext, useReducer, useState } from "react";
import { appInitialState, appReducer } from "../reducers/appReducer";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, appInitialState);
  const [error, setError] = useState("");

  return (
    <AppContext.Provider
      value={{
        error,
        state,
        dispatch,
        setError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const user = useContext(AppContext);
  return user;
};
