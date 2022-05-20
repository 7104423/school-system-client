import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useState,
} from "react";
import { appInitialState, appReducer } from "../reducers/appReducer";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, appInitialState);
  const [error, setError] = useState("");
  const [warning, setWarning] = useState("");

  const isLoading = useMemo(
    () =>
      Object.values(state)
        .flat()
        .some(({ isLoading }) => isLoading),
    [state]
  );

  return (
    <AppContext.Provider
      value={{
        error,
        warning,
        state,
        dispatch,
        setError,
        setWarning,
        isLoading,
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
