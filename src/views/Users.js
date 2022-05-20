import React, { useEffect } from "react";
import { Table } from "../components/table";
import { userColumns } from "../config/columns/users";
import { Layout } from "../containers/Layout";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Add } from "@mui/icons-material";
import { useUser } from "../contexts/userContext";
import { useContent } from "../hooks/useContent";

export const Users = () => {
  const user = useUser();
  const userRoles = user.getRoles();

  const [isLoaded, data, fetch] = useContent("users");

  useEffect(() => {
    if (isLoaded) {
      return;
    }
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout active="users">
      <h2 className="view-heading">Users</h2>

      <Box mt={3}>
        {["ADMIN"].some((role) => userRoles.includes(role)) && (
          <Link to="/app/user/add">
            <Button variant="outlined" startIcon={<Add fontSize="small" />}>
              Add user
            </Button>
          </Link>
        )}
      </Box>

      <Table columns={userColumns} rows={data} />
    </Layout>
  );
};
