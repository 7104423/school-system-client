import React from "react";
import { Sidebar } from "../components/sidebar";

export const Subjects = () => {
  return (
    <div id="dashboard">
      <Sidebar active="subjects" />
      <div className="dash-view">
        <h2 className="view-heading">Here's your breakdown.</h2>
      </div>
    </div>
  );
};

