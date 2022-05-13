import React, { useEffect } from "react";
import { Table } from "../components/table";
import { digitalContentColumns } from "../config/columns/digitalContents";
import { Layout } from "../containers/Layout";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Add } from "@mui/icons-material";
import { useContent } from "../hooks/useContent";
import { ViewTrap } from "../components/viewtrap";
import { WholePageLoader } from "../containers/WholePageLoader";

export const DigitalContents = () => {
  const { isLoaded, data, fetch } = useContent("digitalContents");

  useEffect(() => {
    if (isLoaded) return;
    fetch();
  }, []);

  return (
    <>
      <ViewTrap>{!isLoaded && <WholePageLoader />}</ViewTrap>
      <Layout active="digital-contents">
        <h2 className="view-heading">Digital Contents</h2>
        <Box mt={3}>
          <Link to="/app/digital-content/add">
            <Button variant="outlined" startIcon={<Add fontSize="small" />}>
              Create Digital Content
            </Button>
          </Link>
        </Box>
        <Table columns={digitalContentColumns} rows={data} />
      </Layout>
    </>
  );
};
