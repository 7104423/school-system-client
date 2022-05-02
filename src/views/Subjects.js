import React from "react";
import { Sidebar } from "../components/sidebar";
import { Table } from "../components/table";
import { subjectColumns } from "../config/columns/subjects";
import { subjectMockup } from "../mockups/subjects.mockup";

export const Subjects = () => {
  return (
    <div id="dashboard">
      <Sidebar active="subjects" />
      <div className="dash-view">
        <h2 className="view-heading">Subjects</h2>
        <Table columns={subjectColumns} rows={subjectMockup} />
      </div>
    </div>
  );
};

