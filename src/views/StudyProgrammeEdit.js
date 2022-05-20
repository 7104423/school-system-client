import { Autocomplete, Button, Grid, MenuItem, TextField } from "@mui/material";
import { top100Films } from "../mockups/top100films.mockup";
import { Layout } from "../containers/Layout";
import { withRole } from "../containers/withRole";
import { ControlledAutocomplete } from "../components/fields/input/ControlledAutocomplete";
import { ControlledTextField } from "../components/fields/input/ControlledTextField";
import { useForm } from "react-hook-form";
import { useContent, useEditContent } from "../hooks/useContent";
import { useNavigate, useParams } from "react-router-dom";
import { ViewTrap } from "../components/viewtrap";
import { WholePageLoader } from "../containers/WholePageLoader";
import { useCallback, useEffect } from "react";

export const StudyProgrammeEdit = withRole(["ADMIN"], () => {
  const { id } = useParams();
  const { control, handleSubmit, reset } = useForm();

  const [isLoadedStudyProgramme, data, fetch] = useContent(
    "studyProgramme",
    id
  );
  const [isTeacherLoaded, teachers, fetchTeachers] = useContent("teacherEnum");
  const [isStudentLoaded, students, fetchStudents] = useContent("studentEnum");
  const [, , fetchStudyProgrammes] = useContent("studyProgrammes");
  const update = useEditContent("studyProgramme", id);
  const navigate = useNavigate();

  const isLoaded = isLoadedStudyProgramme && isTeacherLoaded && isStudentLoaded;

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
      await update(parsedData);
      await fetchStudyProgrammes();
      navigate("/app/study-programmes");
    },
    [fetchStudyProgrammes, navigate, update]
  );

  return (
    <Layout active="study-programmes">
      <ViewTrap>{!isLoaded && <WholePageLoader />}</ViewTrap>
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
