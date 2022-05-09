import React from "react";
import { Table } from "../components/table";
import { subjectColumns } from "../config/columns/subjects";
import { Layout } from "../containers/Layout";
import { subjectMockup } from "../mockups/subjects.mockup";

export const Subjects = () => {
  return (
    <Layout active="subjects">
      <h2 className="view-heading">Subjects</h2>
      <Table columns={subjectColumns} rows={subjectMockup} />
    </Layout>
  );
};

