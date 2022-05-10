import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { ControlPanel } from "../components/control-panel/ControlPanel";
import { useContent } from "../hooks/useContent";
import { ViewTrap } from "../components/viewtrap";
import { WholePageLoader } from "../containers/WholePageLoader";

export const SubjectDetail = () => {
  const { id } = useParams();

  const {
    isLoaded: isSubjectLoaded,
    contentID,
    data: subjectData,
    fetch: fetchSubject,
  } = useContent("subject", id);
  const {
    isLoaded: isSubjectTopicsLoaded,
    data: subjectTopicData,
    fetch: fetchTopic,
  } = useContent("subjectTopics", id);

  const isLoaded = isSubjectLoaded && isSubjectTopicsLoaded;

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    console.log(contentID, id);
    if (contentID === id) return;
    fetchSubject();
    fetchTopic();
  }, [id]);

  return (
    <>
      <ViewTrap>{!isLoaded && <WholePageLoader />}</ViewTrap>
      <Layout active="subjects">
        <ControlPanel title={subjectData?.name} id={id} page={"subject"} />
        <Grid justifyContent={"end"} container spacing={2}>
          <Grid item xs={12}>
            <p>{subjectData?.goal}</p>
          </Grid>
          <Grid item xs={6}>
            <strong>Supervisor</strong>:{" "}
            {`${subjectData?.supervisor?.name} ${subjectData?.supervisor?.surname}`}
          </Grid>
          <Grid item xs={6}>
            <strong>Teachers</strong>:{" "}
            {subjectData?.teachers
              ?.map((t) => `${t.name} ${t.surname}`)
              ?.join(", ")}
          </Grid>
          <Grid item xs={6}>
            <strong>Students</strong>: Konstantin Kožokar
          </Grid>
          <Grid item xs={6}>
            <strong>Study degree</strong>: {subjectData?.studyProgramme?.degree}
          </Grid>
          <Grid item xs={6}>
            <strong>Language</strong>: {subjectData?.language}
          </Grid>
          <Grid item xs={6}>
            <strong>Study programme</strong>:{" "}
            {subjectData?.studyProgramme?.name}
          </Grid>
        </Grid>
        <Grid mt={"1rem"} container flexDirection={"column"} spacing={"1rem"}>
          <Grid item>
            <Typography align="center" variant="h4">
              Topics
            </Typography>
          </Grid>
          <Grid item>
            {subjectTopicData.map((topic) => (
              <Accordion
                key={topic.id}
                expanded={expanded === topic.id}
                onChange={handleChange(topic.id)}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>{topic.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{topic.description}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
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
    </>
  );
};

