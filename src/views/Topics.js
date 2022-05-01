import React from "react";
import { Sidebar } from "../components/sidebar";

export const Topics = () => {
  return (
    <div id="dashboard">
      <Sidebar active="topics" />
      <div className="dash-view">
        <h2 className="view-heading">Here's your breakdown.</h2>
      </div>
    </div>
  );
};

