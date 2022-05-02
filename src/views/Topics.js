import React from "react";
import { Sidebar } from "../components/sidebar";
import { Table } from "../components/table";
import { topicColumns } from "../config/columns/topics";
import { subjectMockup } from "../mockups/subjects.mockup";

export const Topics = () => {
  return (
    <div id="dashboard">
      <Sidebar active="topics" />
      <div className="dash-view">
        <h2 className="view-heading">Topics</h2>
        <Table columns={topicColumns} rows={subjectMockup} />
      </div>
    </div>
  );
};

