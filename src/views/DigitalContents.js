import React, { useEffect } from "react";
import { Table } from "../components/table";
import { digitalContentColumns } from "../config/columns/digitalContents";
import { Layout } from "../containers/Layout";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Add } from "@mui/icons-material";
import { useContent } from "../hooks/useContent";
import { useUser } from "../contexts/userContext";

export const DigitalContents = () => {
  const [data, fetch] = useContent("digitalContents");
  const user = useUser();
  const userRoles = user.getRoles();

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Layout active="digital-contents">
        <h2 className="view-heading">Digital Contents</h2>
        <Box mt={3}>
          {["ADMIN"].some((role) => userRoles.includes(role)) && (
            <Link to="/app/digital-content/add">
              <Button variant="outlined" startIcon={<Add fontSize="small" />}>
                Create Digital Content
              </Button>
            </Link>
          )}
        </Box>
        <Table columns={digitalContentColumns} rows={data} />
      </Layout>
    </>
  );
};
