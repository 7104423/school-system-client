import React from "react";
import { Sidebar } from "../components/sidebar";

export const StudyProgrammes = () => {
  return (
    <div id="dashboard">
      <Sidebar active="study-programmes" />
      <div className="dash-view">
        <h2 className="view-heading">Here's your breakdown.</h2>
      </div>
    </div>
  );
};

