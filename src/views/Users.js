import React from "react";
import { Table } from "../components/table";
import { userColumns } from "../config/columns/users";
import { Layout } from "../containers/Layout";
import { subjectMockup } from "../mockups/subjects.mockup";

export const Users = () => {
  return (
    <Layout active="users">
      <h2 className="view-heading">Users</h2>
      <Table columns={userColumns} rows={subjectMockup} />
    </Layout>
  );
};

