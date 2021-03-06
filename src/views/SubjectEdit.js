import { Button, Grid, MenuItem } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { withRole } from "../containers/withRole";
import { useContent, useEditContent } from "../hooks/useContent";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ControlledAutocomplete } from "../components/fields/input/ControlledAutocomplete";
import { ControlledTextField } from "../components/fields/input/ControlledTextField";
import { TopicEdit } from "../components/table/TopicEdit";
import { SubjectContentEdit } from "../components/table/SubjectContentEdit";
import { ADMIN, TEACHER } from "../config/roles";

export const SubjectEdit = withRole([ADMIN, TEACHER], () => {
  const { id } = useParams();
  const [data, fetch] = useContent("subject", id);
  const [teachers, fetchTeachers] = useContent("teacherEnum");
  const [studyProgrammes, fetchStudyProgrammes] = useContent("studyProgrammes");
  const { control, reset, handleSubmit } = useForm();
  const update = useEditContent("subject");
  const navigate = useNavigate();

  useEffect(() => {
    fetch();
    fetchTeachers();
    fetchStudyProgrammes();
  }, [fetch, fetchStudyProgrammes, fetchTeachers, id]);

  useEffect(() => {
    reset(data);
  }, [data, reset]);

  const onSubmit = useCallback(
    async (data) => {
      const formatedData = {
        ...data,
        studyProgramme: data.studyProgramme?._id || data.studyProgramme?.id,
        supervisor: data.supervisor?._id || data.supervisor?.id,
        teachers: data.teachers.map((teacher) => teacher._id || teacher.id),
        credits: Number(data.credits) || 0,
      };
      if (!(await update(formatedData))) return;
      navigate("/app/subjects");
    },
    [update, navigate]
  );

  return (
    <Layout active="subjects">
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
        noValidate
      >
        <Grid justifyContent={"start"} container spacing={2}>
          <Grid item xs={12}>
            <ControlledTextField
              name="name"
              control={control}
              rules={{ required: "This field is required" }}
              label="Subject name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <ControlledTextField
              name="goal"
              control={control}
              label="Subject goal"
              rules={{ required: "This field is required" }}
              variant="outlined"
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={6}>
            <ControlledAutocomplete
              control={control}
              rules={{ required: "This field is required" }}
              label="Supervisor"
              name="supervisor"
              options={teachers}
              getOptionLabel={(option) =>
                option?.name
                  ? `${option?.name || ""} ${option?.surname || ""}`
                  : ""
              }
            />
          </Grid>

          <Grid item xs={6}>
            <ControlledAutocomplete
              control={control}
              name="teachers"
              rules={{ required: "This field is required" }}
              label={"Teachers"}
              multiple
              options={teachers}
              getOptionLabel={(option) => `${option?.name} ${option?.surname}`}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <ControlledTextField
              type="number"
              name="credits"
              control={control}
              rules={{
                required: "This field is required",
                min: { value: 1, message: "Minimum is 1" },
                max: { value: 30, message: "Maximum is 30" },
              }}
              label="Number of credits"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <ControlledAutocomplete
              control={control}
              name="studyProgramme"
              rules={{ required: "This field is required" }}
              label={"Study Programme"}
              options={studyProgrammes}
              getOptionLabel={(option) =>
                option?.name ? `${option?.name}` : ""
              }
            />
          </Grid>
          <Grid item xs={6}>
            <ControlledTextField
              name="language"
              control={control}
              rules={{ required: "This field is required" }}
              label="Language"
              variant="outlined"
              fullWidth
              select
            >
              <MenuItem value="cs">Czech</MenuItem>
              <MenuItem value="en">English</MenuItem>
            </ControlledTextField>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      <TopicEdit id={id} />
      <SubjectContentEdit id={id} />
    </Layout>
  );
});
