import { Divider, Grid } from "@mui/material";
import { useCallback, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContentCard } from "../components/card/ContentCard";
import { ControlPanel } from "../components/control-panel/ControlPanel";
import { Layout } from "../containers/Layout";
import { useContent, useDeleteContent } from "../hooks/useContent";

export const DigitalContentDetail = () => {
  const { id } = useParams();

  const [data, fetch] = useContent("digitalContent", id);

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const remove = useDeleteContent("digitalContent", id);
  const navigate = useNavigate();
  const handleDelete = useCallback(async () => {
    if (!(await remove())) return;
    navigate("/app/digital-contents");
  }, [navigate, remove]);

  return (
    <Layout active="digital-contents">
      <ControlPanel
        title={"Digital Content Detail"}
        id={id}
        page={"digital-content"}
        rolesDelete={["ADMIN", "TEACHER"]}
        rolesEdit={["ADMIN", "TEACHER"]}
        onDelete={handleDelete}
      />
      <Grid justifyContent={"end"} container spacing={2}>
        <Grid item xs={6}>
          <strong>Digital Content Type</strong>:
        </Grid>
        <Grid item xs={6}>
          {data?.type}
        </Grid>

        <Grid item xs={6}>
          <strong>Digital Content Value</strong>:
        </Grid>
        <Grid item xs={6}>
          {data?.content && (
            <a target="_blank" href={data?.content} rel="noreferrer">
              LINK
            </a>
          )}
        </Grid>
        <Grid item xs={6}>
          <strong>Subject</strong>:
        </Grid>
        <Grid item xs={6}>
          {data?.subject && (
            <Link to={`/app/subject/${data?.subject?._id}`}>
              {data?.subject?.name}
            </Link>
          )}
        </Grid>
        <Grid item xs={6}>
          <strong>Topic</strong>:
        </Grid>
        <Grid item xs={6}>
          {data?.topic && (
            <Link to={`/app/subject/${data?.topic?._id}`}>
              {data?.topic?.name}
            </Link>
          )}
        </Grid>
      </Grid>
      <Grid p={3} container>
        <Grid xs={12} item>
          <Divider variant="middle">Preview</Divider>
        </Grid>
        <Grid xs={12} item>
          <Grid m="auto" p={3} maxWidth={300}>
            <ContentCard {...data} />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};
