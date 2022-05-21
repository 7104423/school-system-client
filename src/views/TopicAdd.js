import { Button, Grid } from "@mui/material";
import { Layout } from "../containers/Layout";
import { withRole } from "../containers/withRole";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAddContent, useContent } from "../hooks/useContent";
import { useNavigate } from "react-router-dom";
import { ControlledTextField } from "../components/fields/input/ControlledTextField";
import { ControlledAutocomplete } from "../components/fields/input/ControlledAutocomplete";
import { ADMIN, TEACHER } from "../config/roles";

export const TopicAdd = withRole([ADMIN, TEACHER], () => {
  const { control, handleSubmit } = useForm();
  const [, fetchTopics] = useContent("topics");
  const [subjects, fetchSubjects] = useContent("subjects");
  const add = useAddContent("topic");
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (data) => {
      const parsedData = {
        ...data,
        subject: data.subject?.id,
      };
      await add(parsedData);
      await fetchTopics();
      navigate("/app/topics");
    },
    [add, fetchTopics, navigate]
  );

  useEffect(() => {
    fetchSubjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout active="topics">
      <h2 className="view-heading">Add Topic</h2>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        <Grid justifyContent={"end"} container spacing={2}>
          <Grid item xs={12}>
            <ControlledTextField
              control={control}
              name="name"
              label="Topic name"
              variant="outlined"
              rules={{ required: "This field is required" }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <ControlledTextField
              control={control}
              name="description"
              label="Topic description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
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
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Layout>
  );
});
