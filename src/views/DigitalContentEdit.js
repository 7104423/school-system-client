import { Autocomplete, Button, Grid, MenuItem, TextField } from "@mui/material";
import { top100Films } from "../mockups/top100films.mockup";
import { Layout } from "../containers/Layout";
import { withRole } from "../containers/withRole";
import { useForm } from "react-hook-form";
import { useContent, useEditContent } from "../hooks/useContent";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { ViewTrap } from "../components/viewtrap";
import { WholePageLoader } from "../containers/WholePageLoader";
import { ControlledTextField } from "../components/fields/input/ControlledTextField";
import { ControlledAutocomplete } from "../components/fields/input/ControlledAutocomplete";

export const DigitalContentEdit = withRole(["ADMIN", "TEACHER"], () => {
  const { id } = useParams();
  const { control, handleSubmit, reset } = useForm();
  const [isLoadedContent, data, fetch] = useContent("digitalContent", id);
  const [, , fetchDigitalContents] = useContent("digitalContents");
  const [isSubjectLoaded, subjects, fetchSubjects] = useContent("subjects");
  const [isTopicsLoaded, topics, fetchTopics] = useContent("topics");
  const update = useEditContent("digitalContent", id);
  const navigate = useNavigate();

  const isLoaded = isLoadedContent && isSubjectLoaded && isTopicsLoaded;

  const onSubmit = useCallback(
    async (data) => {
      const parsedData = {
        ...data,
        subject: data.subject?._id,
        topic: data.topic?._id,
      };
      await update(parsedData);
      await fetch();
      await fetchDigitalContents();
      navigate("/app/digital-contents");
    },
    [fetch, fetchDigitalContents, navigate, update]
  );

  useEffect(() => {
    fetch();
    fetchSubjects();
    fetchTopics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    reset(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Layout onSubmit={handleSubmit(onSubmit)} active="digital-contents">
      <ViewTrap>{!isLoaded && <WholePageLoader />}</ViewTrap>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        <Grid justifyContent={"start"} container spacing={2}>
          <Grid item xs={12}>
            <ControlledTextField
              control={control}
              name="type"
              fullWidth
              rules={{ required: "This field is required" }}
              label="Digital Content Type"
              select
            >
              <MenuItem value="Unicorn University link">
                Unicorn University link
              </MenuItem>
              <MenuItem value="YouTube link">YouTube link</MenuItem>
            </ControlledTextField>
          </Grid>

          <Grid item xs={12}>
            <ControlledTextField
              control={control}
              name="content"
              rules={{ required: "This field is required" }}
              label="Link to Digital Content"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <ControlledAutocomplete
              control={control}
              label="Subject"
              name="subject"
              options={subjects}
              getOptionLabel={(option) =>
                option?.name ? `${option?.name || ""}` : ""
              }
            />
          </Grid>

          <Grid item xs={12}>
            <ControlledAutocomplete
              control={control}
              label="Topic"
              name="topic"
              options={topics}
              getOptionLabel={(option) =>
                option?.name ? `${option?.name || ""}` : ""
              }
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Layout>
  );
});
