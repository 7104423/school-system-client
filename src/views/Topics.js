import React from "react";
import { Table } from "../components/table";
import { topicColumns } from "../config/columns/topics";
import { Layout } from "../containers/Layout";
import { subjectMockup } from "../mockups/subjects.mockup";

export const Topics = () => {
  return (
    <Layout active="topics">
      <h2 className="view-heading">Topics</h2>
      <Table columns={topicColumns} rows={subjectMockup} />
    </Layout>
  );
};

