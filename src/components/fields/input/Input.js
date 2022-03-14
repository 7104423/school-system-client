import React from "react";
import { FluidInput } from "./FluidInput";

export class Input extends React.Component {
  static FluidInput = FluidInput;

  render() {
    return <input {...this.props} />;
  }
}
