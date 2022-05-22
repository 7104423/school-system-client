import { Button, Grid, MenuItem } from "@mui/material";
import { Layout } from "../containers/Layout";
import { withRole } from "../containers/withRole";
import { useForm } from "react-hook-form";
import { useAddContent, useContent } from "../hooks/useContent";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { ControlledTextField } from "../components/fields/input/ControlledTextField";
import { ControlledAutocomplete } from "../components/fields/input/ControlledAutocomplete";
import { ADMIN, TEACHER } from "../config/roles";

export const DigitalContentAdd = withRole([ADMIN, TEACHER], () => {
  const { control, handleSubmit } = useForm();
  const [subjects, fetchSubjects] = useContent("subjects");
  const [topics, fetchTopics] = useContent("topics");
  const update = useAddContent("digitalContent");
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (data) => {
      const parsedData = {
        ...data,
        subject: data.subject?.id || data.subject?._id,
        topic: data.topic?.id || data.topic?._id,
      };
      if (!(await update(parsedData))) return;
      navigate("/app/digital-contents");
    },
    [navigate, update]
  );

  useEffect(() => {
    fetchSubjects();
    fetchTopics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout onSubmit={handleSubmit(onSubmit)} active="digital-contents">
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
              rules={{ required: "This field is required" }}
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
