import React from "react";
import { Table } from "../components/table";
import { digitalContentColumns } from "../config/columns/digitalContents";
import { Layout } from "../containers/Layout";
import { subjectMockup } from "../mockups/subjects.mockup";

export const DigitalContents = () => {
  return (
    <Layout active="digital-contents">
      <h2 className="view-heading">Digital Contents</h2>
      <Table columns={digitalContentColumns} rows={subjectMockup} />
    </Layout>
  );
};

