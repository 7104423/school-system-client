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
        <Grid xs={12}>TODO</Grid>
      </Grid>
    </Layout>
  );
};

