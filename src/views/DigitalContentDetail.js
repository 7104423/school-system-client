import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { ControlPanel } from "../components/control-panel/ControlPanel";
import { Layout } from "../containers/Layout";

export const DigitalContentDetail = () => {
  const { id } = useParams();
  return (
    <Layout active="digital-content">
      <ControlPanel
        title={"Digital Content Detail"}
        id={id}
        page={"digital-content"}
      />
      <Grid justifyContent={"end"} container spacing={2}>
        <Grid item xs={12}>
          <p>
            Toto je mockup text pouze pro účely nastavení front-endu. Mohlo by
            zde být lorem ipsum, ale to by bylo suchý...
          </p>
          <br></br>
        </Grid>
        <Grid item xs={1.5}>
          <strong>Digital Content Type</strong>:
        </Grid>
        <Grid item xs={4.5}>
          Úvodní seznámení s proměnnými...
        </Grid>

        <Grid item xs={1.5}></Grid>
        <Grid item xs={4.5}></Grid>

        <Grid item xs={1.5}>
          <strong>Digital Content ID</strong>:
        </Grid>
        <Grid item xs={4.5}>
          a6892c0031bf3
        </Grid>

        <Grid item xs={1.5}></Grid>
        <Grid item xs={4.5}></Grid>

        <Grid item xs={1.5}>
          <strong>Link to Digital Content</strong>:
        </Grid>
        <Grid item xs={4.5}>
          919a42baf4a41
        </Grid>

        <Grid item xs={1.5}></Grid>
        <Grid item xs={4.5}></Grid>
        <Grid item xs={1.5}>
          <strong>Subject</strong>:
        </Grid>
        <Grid item xs={4.5}>
          a6892c0031bf3
        </Grid>

        <Grid item xs={1.5}></Grid>
        <Grid item xs={4.5}></Grid>
        <Grid item xs={1.5}>
          <strong>Topic</strong>:
        </Grid>
        <Grid item xs={4.5}>
          a6892c0031bf3
        </Grid>

        <Grid item xs={1.5}></Grid>
        <Grid item xs={4.5}></Grid>
      </Grid>
    </Layout>
  );
};
