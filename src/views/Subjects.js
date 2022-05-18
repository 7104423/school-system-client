import { Add } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "../components/table";
import { subjectColumns } from "../config/columns/subjects";
import { Layout } from "../containers/Layout";
import { useContent } from "../hooks/useContent";
import { ViewTrap } from "../components/viewtrap";
import { WholePageLoader } from "../containers/WholePageLoader";
import { useUser } from "../contexts/userContext";

export const Subjects = () => {
  const [isLoaded, data, fetch] = useContent("subjects");
  const user = useUser();
  const userRoles = user.getRoles();

  useEffect(() => {
    if (isLoaded) return;
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ViewTrap>{!isLoaded && <WholePageLoader />}</ViewTrap>
      <Layout active="subjects">
        <h2 className="view-heading">Subjects</h2>
        <Box mt={3}>
          {["ADMIN"].some((role) => userRoles.includes(role)) && (
            <Link to="/app/subject/add">
              <Button variant="outlined" startIcon={<Add fontSize="small" />}>
                Add subject
              </Button>
            </Link>
          )}
        </Box>
        <Table columns={subjectColumns} rows={data} />
      </Layout>
    </>
  );
};
