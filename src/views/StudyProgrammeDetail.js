import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { ControlPanel } from "../components/control-panel/ControlPanel";
import { Layout } from "../containers/Layout";

export const StudyProgrammeDetail = () => {
  const { id } = useParams();

  return (
    <Layout active="study-programmes">
      
      <ControlPanel title={"Software development"} id={id} page={"study-programme"} />
      
      <Grid justifyContent={"end"} container spacing={2}>

        <Grid item xs={12}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit tempor pharetra. Nulla rhoncus mauris molestie dolor sodales, et tempus leo pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce semper bibendum nibh, a molestie diam molestie eu. Maecenas lobortis blandit quam, a elementum est placerat nec. Aenean id tellus mi. In elementum convallis odio, eget congue tortor pulvinar non. Mauris scelerisque dolor in erat facilisis, consequat rhoncus ex tempus.</p>
        </Grid>

        <Grid item xs={6}>
          <strong>Supervisor</strong>: Zdeněk Zelinger
        </Grid>

        <Grid item xs={6}>
          <strong>Degree</strong>: Master
        </Grid>

        <Grid item xs={12}>
          <strong>Students</strong>: John Smith, Tamara Johanson, Marty Williams, Jakc Brown, Lily Jones, Anthony Garcia, Kevin Miller, Tom Davis, Patricia Martinez, Jenifer Lopez, Justin Wilson, Michale Anderson
        </Grid>
      
      </Grid>

    </Layout>
  );
};
