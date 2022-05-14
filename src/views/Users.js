import React from "react";
import { Table } from "../components/table";
import { userColumns } from "../config/columns/users";
import { Layout } from "../containers/Layout";
import { subjectMockup } from "../mockups/subjects.mockup";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Add } from "@mui/icons-material";

export const Users = () => {
  return (
    <Layout active="users">
      <h2 className="view-heading">Users</h2>

      <Box mt={3}>
        <Link to="/app/user/add">
          <Button variant="outlined" startIcon={<Add fontSize="small" />}>
            Add user
          </Button>
        </Link>
      </Box>

      <Table columns={userColumns} rows={subjectMockup} />
    </Layout>
  );
};

