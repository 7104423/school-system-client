import React, { useEffect } from "react";
import { Table } from "../components/table";
import { studyProgrammeColumns } from "../config/columns/studyProgrammes";
import { Layout } from "../containers/Layout";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Add } from "@mui/icons-material";
import { useContent } from "../hooks/useContent";
import { useUser } from "../contexts/userContext";
import { ADMIN } from "../config/roles";

export const StudyProgrammes = () => {
  const [data, fetch] = useContent("studyProgrammes");
  const user = useUser();
  const userRoles = user.getRoles();

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Layout active="study-programmes">
        <h2 className="view-heading">Study Programmes</h2>
        <Box mt={3}>
          {[ADMIN].some((role) => userRoles.includes(role)) && (
            <Link to="/app/study-programme/add">
              <Button variant="outlined" startIcon={<Add fontSize="small" />}>
                Add study programme
              </Button>
            </Link>
          )}
        </Box>
        <Table columns={studyProgrammeColumns} rows={data} />
      </Layout>
    </>
  );
};
