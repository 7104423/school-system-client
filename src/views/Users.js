import React from "react";
import { Sidebar } from "../components/sidebar";
import { Table } from "../components/table";
import { subjectColumns } from "../config/columns/subjects";
import { subjectMockup } from "../mockups/subjects.mockup";

export const Users = () => {
  return (
    <div id="dashboard">
      <Sidebar active="users" />
      <div className="dash-view">
        <h2 className="view-heading">Users</h2>
        <Table columns={subjectColumns} rows={subjectMockup} />
      </div>
    </div>
  );
};

