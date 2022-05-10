import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  // Typography,
} from "@mui/material";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { ControlPanel } from "../components/control-panel/ControlPanel";
import { Layout } from "../containers/Layout";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5}} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275}}>
      <Card variant="outlined" sx={{mx: "30px"}}>{card}</Card>
    </Box>
  );
}

export const TopicDetail = () => {
  const { id } = useParams();

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Layout active="topics">
      <ControlPanel title={"TopicDetail"} id={id} page={"topic"} />

      <Grid justifyContent={"end"} container spacing={2}>
        <Grid item xs={12}>
          <p>Toto je mockup text pouze pro účely nastavení front-endu. Mohlo by zde být lorem ipsum, ale to by bylo suchý...</p>
          <br></br>
        </Grid>
        <Grid item xs={1.5}>
          <strong>Name</strong>:
        </Grid>
        <Grid item xs={4.5}>
          Proměnné v JavaScript
        </Grid>

        <Grid item xs={1.5}></Grid>
        <Grid item xs={4.5}></Grid>

        <Grid item xs={1.5}>
          <strong>Description</strong>: 
        </Grid>
        <Grid item xs={4.5}>
          Úvodní seznámení s proměnnými...
        </Grid>

        <Grid item xs={1.5}></Grid>
        <Grid item xs={4.5}></Grid>

        <Grid item xs={1.5}>
          <strong>Topic ID</strong>: 
        </Grid>
        <Grid item xs={4.5}>
          a6892c0031bf3
        </Grid>

        <Grid item xs={1.5}></Grid>
        <Grid item xs={4.5}></Grid>

        <Grid item xs={1.5}>
          <strong>Subject</strong>: 
        </Grid>
        <Grid item xs={4.5}>
          919a42baf4a41
        </Grid>

        <Grid item xs={1.5}></Grid>
        <Grid item xs={4.5}></Grid>
        
      </Grid>
      
      <br/>
      
      <Grid mt={"1rem"} container flexDirection={"column"} spacing={"1rem"}>
        
        <Grid item>
          <Typography align="left" variant="h3">
            Studijní materiály k tématu
          </Typography>
        </Grid>

        <Grid item>
          <Typography>
            Zde naleznete seznam studijních materiálů pro dané téma / Topic...
          </Typography>
        </Grid>
      
        <br/>
      
        <Grid item>
          <Typography align="left" variant="h4">
            Online knihy
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
              
              <br/>

              <Grid  container  sflexDirection={"row"}>
                {/* OutlineCard */}
                <Grid item xs={2}>
                <OutlinedCard></OutlinedCard>
                </Grid>  

                <Grid item xs={2}>
                <OutlinedCard></OutlinedCard>
                </Grid>  

                <Grid item xs={2}>
                <OutlinedCard></OutlinedCard>
                </Grid>  

                <Grid item xs={2}>
                <OutlinedCard></OutlinedCard>
                </Grid>  

                <Grid item xs={2}>
                <OutlinedCard></OutlinedCard>
                </Grid>  


              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
            
      <br/>
      
        <Grid item>
          <Typography align="left" variant="h4">
            Výuková videa
          </Typography>
        </Grid>

        <Grid item>
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
        </Grid>
            
      <br/>
      
      </Grid>
    </Layout>
  );
};


  // Application Model
  // ------------------------------------------------------------------------
  // const topicSchema = {
  //   id: "a6892c0031bf3", // topic ID; required; unique
  //   name: "Proměnné v JavaScript", // topic name; required; unique
  //   description: "Úvodní seznámení s proměnnými...", // topic description
  //   subject: "919a42baf4a41" // subject ID; required
  // };
  // ------------------------------------------------------------------------
