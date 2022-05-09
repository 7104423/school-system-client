import React from "react";
import { Table } from "../components/table";
import { digitalContentColumns } from "../config/columns/digitalContents";
import { Layout } from "../containers/Layout";
import { subjectMockup } from "../mockups/subjects.mockup";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Add } from "@mui/icons-material";

export const DigitalContents = () => {
  return (
    <Layout active="digital-contents">
      <h2 className="view-heading">Digital Contents</h2>
      <Box mt={3}>
        <Link to="/app/subject/add">
          <Button variant="outlined" startIcon={<Add fontSize="small" />}>
            Add subject
          </Button>
        </Link>
      </Box>
      <Table columns={digitalContentColumns} rows={subjectMockup} />
    </Layout>
  );
};

