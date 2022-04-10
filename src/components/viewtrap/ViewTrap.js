import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ViewTrapContext = new createContext({});

const useViewTrapContext = () => {
  return useContext(ViewTrapContext);
};

export const ViewTrapProvider = ({ children }) => {
  const [values, setValues] = useState({});

  const addValue = useCallback(
    (value) => {
      setValues({ ...values, ...value });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const value = useMemo(
    () => ({
      values,
      addValue,
    }),
    [values, addValue]
  );

  return (
    <ViewTrapContext.Provider value={value}>
      {children}
    </ViewTrapContext.Provider>
  );
};

export const ViewTrapRender = () => {
  const { values } = useViewTrapContext();
  return (
    <div style={{ position: "fixed", top: 0, left: 0 }}>
      <div style={{ position: "relative" }}>
        {Object.entries(values).map(([key, value]) => (
          <div key={key}>{value}</div>
        ))}
      </div>
    </div>
  );
};

export const ViewTrap = ({ children }) => {
  const { addValue } = useViewTrapContext();
  useEffect(() => {
    addValue({ [children.type]: children });
  }, [children, addValue]);

  return null;
};

