import React from "react";
import { Table } from "../components/table";
import { studyProgrammeColumns } from "../config/columns/studyProgrammes";
import { Layout } from "../containers/Layout";
import { subjectMockup } from "../mockups/subjects.mockup";

export const StudyProgrammes = () => {
  return (
    <Layout active="study-programmes">
      <h2 className="view-heading">Study Programmes</h2>
      <Table columns={studyProgrammeColumns} rows={subjectMockup} />
    </Layout>
  );
};

