import React from "react";
import { Sidebar } from "../components/sidebar";

export const Users = () => {
  return (
    <div id="dashboard">
      <Sidebar active="users" />
      <div className="dash-view">
        <h2 className="view-heading">Here's your breakdown.</h2>
      </div>
    </div>
  );
};

