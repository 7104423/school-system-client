import React, { useEffect } from "react";
import { Table } from "../components/table";
import { studyProgrammeColumns } from "../config/columns/studyProgrammes";
import { Layout } from "../containers/Layout";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Add } from "@mui/icons-material";
import { useContent } from "../hooks/useContent";
import { ViewTrap } from "../components/viewtrap";
import { WholePageLoader } from "../containers/WholePageLoader";

export const StudyProgrammes = () => {
  const [isLoaded, data, fetch] = useContent("studyProgrammes");

  useEffect(() => {
    if (isLoaded) return;
    fetch();
  }, []);

  return (
    <>
      <ViewTrap>{!isLoaded && <WholePageLoader />}</ViewTrap>
      <Layout active="study-programmes">
        <h2 className="view-heading">Study Programmes</h2>
        <Box mt={3}>
          <Link to="/app/study-programme/add">
            <Button variant="outlined" startIcon={<Add fontSize="small" />}>
              Add study programme
            </Button>
          </Link>
        </Box>
        <Table columns={studyProgrammeColumns} rows={data} />
      </Layout>
    </>
  );
};
