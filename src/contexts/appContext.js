import { createContext, useContext, useReducer } from "react";
import { appInitialState, appReducer } from "../reducers/appReducer";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, appInitialState);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
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

