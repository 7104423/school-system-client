import { Button, Grid, MenuItem } from "@mui/material";
import { Layout } from "../containers/Layout";
import { withRole } from "../containers/withRole";
import { ControlledAutocomplete } from "../components/fields/input/ControlledAutocomplete";
import { ControlledTextField } from "../components/fields/input/ControlledTextField";
import { useForm } from "react-hook-form";
import { useAddContent, useContent } from "../hooks/useContent";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { ADMIN } from "../config/roles";

export const StudyProgrammeAdd = withRole([ADMIN], () => {
  const { control, handleSubmit } = useForm();

  const [teachers, fetchTeachers] = useContent("teacherEnum");
  const [students, fetchStudents] = useContent("studentEnum");
  const add = useAddContent("studyProgramme");
  const navigate = useNavigate();

  useEffect(() => {
    fetchTeachers();
    fetchStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = useCallback(
    async (data) => {
      const parsedData = {
        ...data,
        students: data.students?.map(({ id }) => id) ?? [],
        supervisor: data.supervisor?.id,
      };
      if (!(await add(parsedData))) return;
      navigate("/app/study-programmes");
    },
    [add, navigate]
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
