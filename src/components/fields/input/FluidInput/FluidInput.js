import React, { useCallback, useState } from "react";

export const FluidInput = (props) => {
  const { type, label, style, id } = props;
  const [state, setState] = useState({
    focused: false,
    value: "",
  });

  const focusField = useCallback(() => {
    const { focused } = state;
    setState({
      ...state,
      focused: !focused,
    });
  }, [state]);

  const handleChange = useCallback(
    (event) => {
      const { target } = event;
      const { value } = target;
      setState({
        ...state,
        value: value,
      });
    },
    [state]
  );

  const { focused, value } = state;

  let inputClass = "fluid-input";
  if (focused) {
    inputClass += " fluid-input--focus";
  } else if (value !== "") {
    inputClass += " fluid-input--open";
  }

  return (
    <div className={inputClass} style={style}>
      <div className="fluid-input-holder">
        <input
          className="fluid-input-input"
          type={type}
          id={id}
          onFocus={focusField}
          onBlur={focusField}
          onChange={handleChange}
          autoComplete="none"
        />
        <label className="fluid-input-label" htmlFor={id}>
          {label}
        </label>
      </div>
    </div>
  );
};
