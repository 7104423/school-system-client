import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { ControlPanel } from "../components/control-panel/ControlPanel";
import { Layout } from "../containers/Layout";

export const StudyProgrammeDetail = () => {
  const { id } = useParams();

  return (
    <Layout active="study-programmes">
      <ControlPanel title={"Nejaky titulek"} id={id} page={"study-programme"} />
      <Grid container>
        <Grid xs={12}>TODO</Grid>
      </Grid>
    </Layout>
  );
};

