import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { ControlPanel } from "../components/control-panel/ControlPanel";
import { useContent } from "../hooks/useContent";
import { ViewTrap } from "../components/viewtrap";
import { WholePageLoader } from "../containers/WholePageLoader";
import { ContentCard } from "../components/card/ContentCard";

export const SubjectDetail = () => {
  const { id } = useParams();

  const [isSubjectLoaded, subjectData, fetchSubject, contentID] = useContent(
    "subject",
    id
  );
  const [isTopicsLoaded, topicData, fetchTopic] = useContent(
    "subjectTopics",
    id
  );
  const [isContentsLoaded, contentData, fetchContents] = useContent(
    "subjectContents",
    id
  );

  const isLoaded = isSubjectLoaded && isTopicsLoaded && isContentsLoaded;

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const contentMap = useMemo(() => {
    return contentData.reduce((acc, content) => {
      if (!acc[content.type]) {
        acc[content.type] = [];
      }
      acc[content.type].push(content);
      return acc;
    }, {});
  }, [contentData]);

  useEffect(() => {
    if (contentID === id) return;
    fetchSubject();
    fetchTopic();
    fetchContents();
  }, [id]);

  return (
    <>
      <ViewTrap>{!isLoaded && <WholePageLoader />}</ViewTrap>
      <Layout active="subjects">
        <ControlPanel
          title={subjectData?.name}
          id={id}
          page={"subject"}
          rolesDelete={["ADMIN"]}
          rolesEdit={["ADMIN", "TEACHER"]}
        />
        <Grid justifyContent={"end"} container spacing={2}>
          <Grid item xs={12}>
            <p>{subjectData?.goal}</p>
          </Grid>
          <Grid item xs={6}>
            <strong>Supervisor</strong>:{" "}
            {subjectData?.supervisor && (
              <Link
                to={`/app/user/${subjectData?.supervisor?._id}`}
              >{`${subjectData?.supervisor?.name} ${subjectData?.supervisor?.surname}`}</Link>
            )}
          </Grid>
          <Grid item xs={6}>
            <strong>Teachers</strong>:{" "}
            {subjectData?.teachers &&
              subjectData?.teachers?.map((t, index, arr) => (
                <>
                  <Link
                    to={`/app/user/${t?._id}`}
                  >{`${t.name} ${t.surname}`}</Link>
                  {index !== arr.length - 1 && ", "}
                </>
              ))}
          </Grid>
          <Grid item xs={6}>
            <strong>Students</strong>:{" "}
            {subjectData?.studyProgramme &&
              subjectData?.studyProgramme?.students?.map((s, index, arr) => (
                <>
                  {s.name && (
                    <>
                      <Link
                        to={`/app/user/${s._id}`}
                      >{`${s.name} ${s.surname}`}</Link>
                      {index !== arr.length - 1 && ", "}
                    </>
                  )}
                </>
              ))}
          </Grid>
          <Grid item xs={6}>
            <strong>Study degree</strong>: {subjectData?.studyProgramme?.degree}
          </Grid>
          <Grid item xs={6}>
            <strong>Language</strong>: {subjectData?.language}
          </Grid>
          <Grid item xs={6}>
            <strong>Study programme</strong>:{" "}
            <Link
              to={`/app/study-programme/${subjectData?.studyProgramme?._id}`}
            >
              {subjectData?.studyProgramme?.name}
            </Link>
          </Grid>
        </Grid>
        <Box mt={"1rem"} spacing={"1rem"}>
          <Grid item>
            <Typography align="center" variant="h4">
              Topics
            </Typography>
          </Grid>
          <Grid item>
            {topicData.map((topic) => (
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
                  <Grid mt={3} gap={1} container>
                    {topic?.contents?.map((content) => (
                      <Grid xs={3} item>
                        <ContentCard {...content} />
                      </Grid>
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Box>
        <Grid
          mt={"1rem"}
          container
          flexDirection={"column"}
          alignItems={"start"}
          justifyContent={"start"}
          spacing={"1rem"}
        >
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
            <Grid width={"100%"} gap={3} container>
              {contentMap["YouTube link"]?.map((content) => (
                <Grid xs={4} item>
                  <ContentCard {...content} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};
