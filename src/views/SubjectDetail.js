import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Sidebar } from "../components/sidebar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { maa } from "../mockups/maa.mockup";

export const SubjectDetail = () => {
  const { id } = useParams();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div id="dashboard">
      <Sidebar active="subjects" />
      <div className="dash-view">
        <Grid container alignItems={"center"} spacing={"0.25rem"}>
          <Grid item>
            <h2 className="view-heading">Matematická analýza</h2>
          </Grid>
          <Grid item>
            <Grid container py={"1rem"} spacing="0.25rem">
              <Grid item>
                <Link to={`/app/subject/edit/${id}`}>
                  <IconButton>
                    <EditIcon fontSize="inherit" />
                  </IconButton>
                </Link>
              </Grid>
              <Grid item>
                <IconButton>
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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
      </div>
    </div>
  );
};

