import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { ControlPanel } from "../components/control-panel/ControlPanel";
import { Layout } from "../containers/Layout";

export const UserDetail = () => {
  const { id } = useParams();

  return (
    <Layout active="users">
      <ControlPanel title={"Nejaky titulek"} id={id} page={"user"} />
      <Grid container>
        <Grid xs={6}>Email:</Grid>
        <Grid xs={6}>dan@study.com</Grid>
      </Grid>
      <Grid container>
        <Grid xs={6}>Name:</Grid>
        <Grid xs={6}>Daniel</Grid>
      </Grid>
      <Grid container>
        <Grid xs={6}>Surname:</Grid>
        <Grid xs={6}>Black</Grid>
      </Grid>
      <Grid container>
        <Grid xs={6}>Role:</Grid>
        <Grid xs={6}>Student</Grid>
      </Grid>
    </Layout>
  );
};

