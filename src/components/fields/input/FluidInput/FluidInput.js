import React from "react";
import styled from "styled-components";

const StyledFluidInput = styled.div`
  margin-top: 30px;
  width: 80%;
  height: 50px;
  max-width: 450px;
  position: relative;

  .fluid-input-bg {
    width: calc(100% - 10%);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    position: absolute;
    left: 5%;
    top: 0;
    color: #007aff;
    font-weight: 400;
    font-size: 0.9em;
    transition: 0.3s ease-in-out;
    text-transform: capitalize;
  }
  .fluid-input-holder {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    will-change: transform, box-shadow;
    transition: 0.2s ease-in-out;
    background-color: #f1f3f4;
  }
  .fluid-input-input {
    width: inherit;
    height: inherit;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #f1f3f4;
    font-size: 1.05em;
    padding: 0 5%;
  }
  .fluid-input-input:focus {
    outline: None;
  }
  .fluid-input-label {
    width: calc(100% - 10%);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: row;
    position: absolute;
    font-size: 1em;
    left: 5%;
    top: 0;
    color: #007aff;
    font-weight: 400;
    text-transform: capitalize;
    pointer-events: none;
    transition: transform 0.2s ease-in-out, font-size 0.2s 0.15s ease-in-out;
    will-change: transform, font-size;
  }
  .fluid-input-input:not([value=""]) + .fluid-input-label,
  .fluid-input-input:focus + .fluid-input-label {
    transform: translateY(-40px);
  }
`;

export const FluidInput = ({ type, label, style, id, ...rest }) => (
  <StyledFluidInput style={style}>
    <div className="fluid-input-holder">
      <input
        className="fluid-input-input"
        type={type || "text"}
        id={id}
        {...rest}
      />
      <label className="fluid-input-label" htmlFor={id}>
        {label}
      </label>
    </div>
  </StyledFluidInput>
);

