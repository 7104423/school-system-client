import React from "react";
import { Sidebar } from "../components/sidebar";
import { Table } from "../components/table";
import { studyProgrammeColumns } from "../config/columns/studyProgrammes";
import { subjectMockup } from "../mockups/subjects.mockup";

export const StudyProgrammes = () => {
  return (
    <div id="dashboard">
      <Sidebar active="study-programmes" />
      <div className="dash-view">
        <h2 className="view-heading">Study Programmes</h2>
        <Table columns={studyProgrammeColumns} rows={subjectMockup} />
      </div>
    </div>
  );
};

