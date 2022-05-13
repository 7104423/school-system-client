import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { ControlPanel } from "../components/control-panel/ControlPanel";
import { Layout } from "../containers/Layout";

export const UserDetail = () => {
  const { id } = useParams();

  return (
    <Layout active="users">
      <ControlPanel title={"User Detail"} id={id} page={"user"} />
      <Grid container>
        <Grid xs={6}><strong>Name:</strong></Grid>
        <Grid xs={6}>Daniel</Grid>
      </Grid>
      <Grid container>
        <Grid xs={6}><strong>Surname:</strong></Grid>
        <Grid xs={6}>Black</Grid>
      </Grid>
      <Grid container>
        <Grid xs={6}><strong>Role:</strong></Grid>
        <Grid xs={6}>Student</Grid>
      </Grid>
      <Grid container>
        <Grid xs={6}> <strong>Email:</strong></Grid>
        <Grid xs={6}>dan@study.com</Grid>
      </Grid>
    </Layout>
  );
};

