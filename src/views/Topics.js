import React, { useEffect } from "react";
import { Table } from "../components/table";
import { topicColumns } from "../config/columns/topics";
import { Layout } from "../containers/Layout";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Add } from "@mui/icons-material";
import { useContent } from "../hooks/useContent";
import { ViewTrap } from "../components/viewtrap";
import { WholePageLoader } from "../containers/WholePageLoader";

export const Topics = () => {
  const [isLoaded, data, fetch] = useContent("topics");

  useEffect(() => {
    if (isLoaded) return;
    fetch();
  }, []);

  return (
    <>
      <ViewTrap>{!isLoaded && <WholePageLoader />}</ViewTrap>
      <Layout active="topics">
        <h2 className="view-heading">Topics</h2>
        <Box mt={3}>
          <Link to="/app/topic/add">
            <Button variant="outlined" startIcon={<Add fontSize="small" />}>
              Add Topic
            </Button>
          </Link>
        </Box>
        <Table columns={topicColumns} rows={data} />
      </Layout>
    </>
  );
};
