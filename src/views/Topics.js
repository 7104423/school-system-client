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
import { useUser } from "../contexts/userContext";
import { ADMIN } from "../config/roles";

export const Topics = () => {
  const [data, fetch] = useContent("topics");
  const user = useUser();
  const userRoles = user.getRoles();

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Layout active="topics">
        <h2 className="view-heading">Topics</h2>
        <Box mt={3}>
          {[ADMIN].some((role) => userRoles.includes(role)) && (
            <Link to="/app/topic/add">
              <Button variant="outlined" startIcon={<Add fontSize="small" />}>
                Add Topic
              </Button>
            </Link>
          )}
        </Box>
        <Table columns={topicColumns} rows={data} />
      </Layout>
    </>
  );
};
