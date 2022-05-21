// MUI > Card > Media Control Card
import React, { useCallback, useEffect, useMemo } from "react";
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
import Typography from "@mui/material/Typography";

// MUI > Kosťa
import {
  Grid,
  // Typography,
} from "@mui/material";

import { Link, useNavigate, useParams } from "react-router-dom";
import { ControlPanel } from "../components/control-panel/ControlPanel";
import { Layout } from "../containers/Layout";
import { useContent, useDeleteContent } from "../hooks/useContent";
import { ContentCard } from "../components/card/ContentCard";

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
  const [dataTopic, fetchTopic] = useContent("topic", id);

  const [dataContent, fetchContent] = useContent("topicContents", id);

  useEffect(() => {
    fetchTopic();
    fetchContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const contentMap = useMemo(() => {
    return dataContent.reduce((acc, content) => {
      if (!acc[content.type]) {
        acc[content.type] = [];
      }
      acc[content.type].push(content);
      return acc;
    }, {});
  }, [dataContent]);

  const remove = useDeleteContent("topic", id);
  const navigate = useNavigate();
  const handleDelete = useCallback(async () => {
    if (!(await remove())) return;
    navigate("/app/topics");
  }, [navigate, remove]);

  // TopicDetail Data Grid
  return (
    <Layout active="topics">
      <ControlPanel
        title={dataTopic?.name}
        id={id}
        page={"topic"}
        rolesDelete={["ADMIN", "TEACHER"]}
        rolesEdit={["ADMIN", "TEACHER"]}
        onDelete={handleDelete}
      />

      <Grid justifyContent={"end"} container spacing={2}>
        <Grid item xs={12}>
          <p>{dataTopic?.description}</p>
        </Grid>
        <Grid item xs={6}>
          <strong>Subject</strong>:
        </Grid>
        <Grid item xs={6}>
          {dataTopic?.subject && (
            <Link to={`/app/subject/${dataTopic.subject._id}`}>
              {dataTopic.subject.name}
            </Link>
          )}
        </Grid>
      </Grid>

      <br />
      {/* Studijní materiály */}
      <Grid mt={"1rem"} container flexDirection={"column"} spacing={2}>
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
        <Grid width={"100%"} item>
          <Grid gap={3} container>
            {contentMap["Unicorn University link"]?.map((content) => (
              <Grid xs={4} item>
                <ContentCard {...content} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Typography align="center" variant="h4">
            Výuková videa
          </Typography>
        </Grid>
        <Grid xs={12} width={"100%"} item>
          <Grid width={"100%"} spacing={3} container>
            {contentMap["YouTube link"]?.map((content) => (
              <Grid xs={3} item>
                <ContentCard {...content} />
              </Grid>
            ))}
          </Grid>
        </Grid>
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
