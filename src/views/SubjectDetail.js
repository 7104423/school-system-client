import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { maa } from "../mockups/maa.mockup";
import { Layout } from "../containers/Layout";
import { ControlPanel } from "../components/control-panel/ControlPanel";

export const SubjectDetail = () => {
  const { id } = useParams();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Layout active="subjects">
      <ControlPanel title={"Matematická analýza"} id={id} page={"subject"} />
      <Grid justifyContent={"end"} container spacing={2}>
        <Grid item xs={12}>
          <p>{maa}</p>
        </Grid>
        <Grid item xs={6}>
          <strong>Supervisor</strong>: Zdeněk Zelinger
        </Grid>
        <Grid item xs={6}>
          <strong>Teachers</strong>: Michal Zdražil, Jiřina Duspivová
        </Grid>
        <Grid item xs={6}>
          <strong>Students</strong>: Konstantin Kožokar
        </Grid>
        <Grid item xs={6}>
          <strong>Study degree</strong>: Bachelor
        </Grid>
        <Grid item xs={6}>
          <strong>Language</strong>: Czech
        </Grid>
        <Grid item xs={6}>
          <strong>Study programme</strong>: Software development
        </Grid>
      </Grid>
      <Grid mt={"1rem"} container flexDirection={"column"} spacing={"1rem"}>
        <Grid item>
          <Typography align="center" variant="h4">
            Topics
          </Typography>
        </Grid>
        <Grid item>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Collapsible Group Item #1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>Collapsible Group Item #2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>Collapsible Group Item #3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
      <Grid mt={"1rem"} container flexDirection={"column"} spacing={"1rem"}>
        <Grid item>
          <Typography align="center" variant="h3">
            Studijní materiály
          </Typography>
        </Grid>
        <Grid item>
          <Typography align="center" variant="h4">
            Online knihy
          </Typography>
        </Grid>
        <Grid item>
          <Typography align="center" variant="h4">
            Výuková videa
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

