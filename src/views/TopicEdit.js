import { Button, Grid } from "@mui/material";
import { Layout } from "../containers/Layout";
import { withRole } from "../containers/withRole";
import { useCallback, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useContent, useEditContent } from "../hooks/useContent";
import { useNavigate, useParams } from "react-router-dom";
import { ControlledTextField } from "../components/fields/input/ControlledTextField";
import { ControlledAutocomplete } from "../components/fields/input/ControlledAutocomplete";
import { TopicContentEdit } from "../components/table/TopicContentEdit";

export const TopicEdit = withRole(["TEACHER", "ADMIN"], () => {
  const { id } = useParams();
  const { control, handleSubmit, reset, watch } = useForm();
  const sub = useRef({});
  sub.current = watch("subject");
  const [data, fetch] = useContent("topic", id);
  const [subjects, fetchSubjects] = useContent("subjects");
  const update = useEditContent("topic", id);
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (data) => {
      const parsedData = {
        ...data,
        subject: data.subject?._id,
        contents: undefined,
      };
      await update(parsedData);
      navigate("/app/topics");
    },
    [navigate, update]
  );

  useEffect(() => {
    fetch();
    fetchSubjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    reset(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Layout active="topics">
      <h2 className="view-heading">Edit Topic</h2>
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
              rules={{ required: "This field is required" }}
              variant="outlined"
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
      <TopicContentEdit id={id} subject={sub.current} />
    </Layout>
  );
});
