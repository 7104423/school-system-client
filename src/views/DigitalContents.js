import React from "react";
import { Sidebar } from "../components/sidebar";

export const DigitalContents = () => {
  return (
    <div id="dashboard">
      <Sidebar active="digital-contents" />
      <div className="dash-view">
        <h2 className="view-heading">Here's your breakdown.</h2>
      </div>
    </div>
  );
};

