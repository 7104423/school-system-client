import { Grid } from "@mui/material";
import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ControlPanel } from "../components/control-panel/ControlPanel";
import { ViewTrap } from "../components/viewtrap";
import { Layout } from "../containers/Layout";
import { WholePageLoader } from "../containers/WholePageLoader";
import { useContent } from "../hooks/useContent";

export const DigitalContentDetail = () => {
  const { id } = useParams();

  const [isLoaded, data, fetch] = useContent("digitalContent", id);

  useEffect(() => {
    if (isLoaded) return;
    fetch();
  }, []);

  console.log(data);

  return (
    <Layout active="digital-contents">
      <ViewTrap>{!isLoaded && <WholePageLoader />}</ViewTrap>
      <ControlPanel
        title={"Digital Content Detail"}
        id={id}
        page={"digital-content"}
        rolesDelete={["ADMIN", "TEACHER"]}
        rolesEdit={["ADMIN", "TEACHER"]}
      />
      <Grid justifyContent={"end"} container spacing={2}>
        <Grid item xs={6}>
          <strong>Digital Content Type</strong>:
        </Grid>
        <Grid item xs={6}>
          {data?.type}
        </Grid>

        <Grid item xs={6}>
          <strong>Digital Content Value</strong>:
        </Grid>
        <Grid item xs={6}>
          {data?.content && (
            <a target="_blank" href={data?.content} rel="noreferrer">
              LINK
            </a>
          )}
        </Grid>
        <Grid item xs={6}>
          <strong>Subject</strong>:
        </Grid>
        <Grid item xs={6}>
          {data?.subject && (
            <Link to={`/app/subject/${data?.subject?._id}`}>
              {data?.subject?.name}
            </Link>
          )}
        </Grid>
        <Grid item xs={6}>
          <strong>Topic</strong>:
        </Grid>
        <Grid item xs={6}>
          {data?.topic && (
            <Link to={`/app/subject/${data?.topic?._id}`}>
              {data?.topic?.name}
            </Link>
          )}
        </Grid>
      </Grid>
    </Layout>
  );
};
