import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { ControlPanel } from "../components/control-panel/ControlPanel";
import { Layout } from "../containers/Layout";

export const TopicDetail = () => {
  const { id } = useParams();

  return (
    <Layout active="topics">
      <ControlPanel title={"Nejaky titulek"} id={id} page={"topic"} />
      <Grid container>
        <Grid xs={12}>TODO</Grid>
      </Grid>
    </Layout>
  );
};

