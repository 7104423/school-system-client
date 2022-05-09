import { Add } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Table } from "../components/table";
import { subjectColumns } from "../config/columns/subjects";
import { Layout } from "../containers/Layout";
import { subjectMockup } from "../mockups/subjects.mockup";

export const Subjects = () => {
  return (
    <Layout active="subjects">
      <h2 className="view-heading">Subjects</h2>
      <Box mt={3}>
        <Link to="/app/subject/add">
          <Button variant="outlined" startIcon={<Add fontSize="small" />}>
            Add subject
          </Button>
        </Link>
      </Box>
      <Table columns={subjectColumns} rows={subjectMockup} />
    </Layout>
  );
};

