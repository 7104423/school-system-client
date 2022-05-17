// MUI > Card > Media Control Card
import React, { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

// MUI > Card > Multi Action Area Card
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Typography from "@mui/material/Typography";

// MUI > Kosťa
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  // Typography,
} from "@mui/material";

import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ControlPanel } from "../components/control-panel/ControlPanel";
import { Layout } from "../containers/Layout";
import { useContent } from "../hooks/useContent";
import { ViewTrap } from "../components/viewtrap";
import { WholePageLoader } from "../containers/WholePageLoader";

// MUI > Card > // MUI > Card > Multi Action Area Card
export function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345, mx: "30px", my: "30px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.eurodiaconia.org/wordpress/wp-content/uploads/2017/01/education.jpg"
          alt="Picture of book related iconography"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Book4u
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Books are great for many reasons. The best one is that you never
            have them all. There is always at least one missing.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

// MUI > Card > Media Control Card
export function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", mx: "30px", my: "30px" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Video4u
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Videos are great for speeding up learning process
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSr92KBak_uPbiCxAaCixCIg7nQ5AAaDUpSQ&usqp=CAU"
        alt="Topic related video content"
      />
    </Card>
  );
}

// Page Content
export const TopicDetail = () => {
  const { id } = useParams();
  const [isLoaded, data, fetch, contentID] = useContent("topic", id);

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    if (contentID === id) return;
    fetch();
  }, [id]);

  console.log(data);

  // TopicDetail Data Grid
  return (
    <Layout active="topics">
      <ViewTrap>{!isLoaded && <WholePageLoader />}</ViewTrap>
      <ControlPanel title={data?.name} id={id} page={"topic"} />

      <Grid justifyContent={"end"} container spacing={2}>
        <Grid item xs={12}>
          <p>{data?.description}</p>
        </Grid>
        <Grid item xs={6}>
          <strong>Subject</strong>:
        </Grid>
        <Grid item xs={6}>
          {data?.subject && (
            <Link to={`/app/subject/${data.subject._id}`}>
              {data.subject.name}
            </Link>
          )}
        </Grid>
      </Grid>

      <br />
      {/* Studijní materiály */}
      <Grid mt={"1rem"} container flexDirection={"column"} spacing={"1rem"}>
        <Grid item>
          <Typography align="left" variant="h3">
            Studijní materiály k tématu
          </Typography>
        </Grid>

        <Grid item>
          <Typography>
            Zde naleznete seznam studijních materiálů pro dané téma
          </Typography>
        </Grid>

        <br />
        {/* Online knihy */}
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

              <br />
              {/* MUI > Card > Multi Action Area Card */}
              <Grid container sflexDirection={"row"}>
                <Grid item xs={3}>
                  <MultiActionAreaCard></MultiActionAreaCard>
                </Grid>

                <Grid item xs={3}>
                  <MultiActionAreaCard></MultiActionAreaCard>
                </Grid>

                <Grid item xs={3}>
                  <MultiActionAreaCard></MultiActionAreaCard>
                </Grid>

                <Grid item xs={3}>
                  <MultiActionAreaCard></MultiActionAreaCard>
                </Grid>

                <Grid item xs={3}>
                  <MultiActionAreaCard></MultiActionAreaCard>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <br />

        {/* Výuková videa */}
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

              <br />
              {/* MUI > Card > Media Control Card */}
              <Grid container sflexDirection={"row"}>
                <Grid item xs={3}>
                  <MediaControlCard></MediaControlCard>
                </Grid>

                <Grid item xs={3}>
                  <MediaControlCard></MediaControlCard>
                </Grid>

                <Grid item xs={3}>
                  <MediaControlCard></MediaControlCard>
                </Grid>

                <Grid item xs={3}>
                  <MediaControlCard></MediaControlCard>
                </Grid>

                <Grid item xs={3}>
                  <MediaControlCard></MediaControlCard>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <br />
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
