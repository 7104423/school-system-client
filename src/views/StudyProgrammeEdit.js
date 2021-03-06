import { Button, Grid, MenuItem } from "@mui/material";
import { Layout } from "../containers/Layout";
import { withRole } from "../containers/withRole";
import { ControlledAutocomplete } from "../components/fields/input/ControlledAutocomplete";
import { ControlledTextField } from "../components/fields/input/ControlledTextField";
import { useForm } from "react-hook-form";
import { useContent, useEditContent } from "../hooks/useContent";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { ADMIN } from "../config/roles";

export const StudyProgrammeEdit = withRole([ADMIN], () => {
  const { id } = useParams();
  const { control, handleSubmit, reset } = useForm();

  const [data, fetch] = useContent("studyProgramme", id);
  const [teachers, fetchTeachers] = useContent("teacherEnum");
  const [students, fetchStudents] = useContent("studentEnum");
  const update = useEditContent("studyProgramme", id);
  const navigate = useNavigate();

  useEffect(() => {
    fetch();
    fetchTeachers();
    fetchStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    reset(data);
  }, [data, reset]);

  const onSubmit = useCallback(
    async (data) => {
      const parsedData = {
        ...data,
        students: data.students?.map(({ _id }) => _id),
        supervisor: data.supervisor?._id,
      };
      if (!(await update(parsedData))) return;
      navigate("/app/study-programmes");
    },
    [navigate, update]
  );

  return (
    <Layout active="study-programmes">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        <Grid justifyContent={"end"} container spacing={2}>
          <Grid item xs={12}>
            <ControlledTextField
              control={control}
              name="name"
              rules={{ required: "This field is required" }}
              label="Study programme name"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <ControlledTextField
              control={control}
              name="description"
              label="Study programme description"
              variant="outlined"
              fullWidth
              multiline
              rows={2}
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
            <ControlledTextField
              control={control}
              name="degree"
              fullWidth
              rules={{ required: "This field is required" }}
              label="Degree"
              select
            >
              <MenuItem value="Bc">Bachelor</MenuItem>
              <MenuItem value="Mgr">Master</MenuItem>
            </ControlledTextField>
          </Grid>

          <Grid item xs={12}>
            <ControlledAutocomplete
              control={control}
              label="Students"
              name="students"
              multiple
              options={students}
              getOptionLabel={(option) =>
                option?.name
                  ? `${option?.name || ""} ${option?.surname || ""}`
                  : ""
              }
            />
          </Grid>

          <Grid item xs={6}></Grid>

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
