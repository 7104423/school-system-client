import React from "react";
import { Sidebar } from "../components/sidebar";
import { Table } from "../components/table";
import { digitalContentColumns } from "../config/columns/digitalContents";
import { subjectMockup } from "../mockups/subjects.mockup";

export const DigitalContents = () => {
  return (
    <div id="dashboard">
      <Sidebar active="digital-contents" />
      <div className="dash-view">
        <h2 className="view-heading">Digital Contents</h2>
        <Table columns={digitalContentColumns} rows={subjectMockup} />
      </div>
    </div>
  );
};

