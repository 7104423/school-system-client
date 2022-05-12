import React, { useEffect } from "react";
import { Table } from "../components/table";
import { userColumns } from "../config/columns/users";
import { Layout } from "../containers/Layout";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Add } from "@mui/icons-material";
import { useContent } from "../hooks/useContent";
import { ViewTrap } from "../components/viewtrap";
import { WholePageLoader } from "../containers/WholePageLoader";

export const Users = () => {
  const { isLoaded, data, fetch } = useContent("users");

  useEffect(() => {
    if (isLoaded) return;
    fetch();
  }, []);

  return (
    <>
      <ViewTrap>{!isLoaded && <WholePageLoader />}</ViewTrap>
      <Layout active="users">
        <h2 className="view-heading">Users</h2>
        <Box mt={3}>
          <Link to="/app/user/add">
            <Button variant="outlined" startIcon={<Add fontSize="small" />}>
              Add subject
            </Button>
          </Link>
        </Box>
        <Table columns={userColumns} rows={data} />
      </Layout>
    </>
  );
};

