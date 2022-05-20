import { Button, Grid, MenuItem } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { withRole } from "../containers/withRole";
import { useAddContent, useContent } from "../hooks/useContent";
import { ViewTrap } from "../components/viewtrap";
import { WholePageLoader } from "../containers/WholePageLoader";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ControlledAutocomplete } from "../components/fields/input/ControlledAutocomplete";
import { ControlledTextField } from "../components/fields/input/ControlledTextField";

export const SubjectAdd = withRole(["ADMIN"], () => {
  const { id } = useParams();
  const [, fetchSubjects] = useContent("subjects");
  const [teachers, fetchTeachers] = useContent("teacherEnum");
  const [studyProgrammes, fetchStudyProgrammes] = useContent("studyProgrammes");
  const { control, handleSubmit } = useForm();
  const add = useAddContent("subject");
  const navigate = useNavigate();

  useEffect(() => {
    fetchTeachers();
    fetchStudyProgrammes();
  }, [fetchStudyProgrammes, fetchTeachers, id]);

  const onSubmit = useCallback(
    async (data) => {
      const formatedData = {
        ...data,
        studyProgramme: data.studyProgramme?.id,
        supervisor: data.supervisor?.id,
        teachers: data.teachers.map((teacher) => teacher.id),
      };
      await add(formatedData);
      await fetchSubjects();
      navigate("/app/subjects");
    },
    [add, fetchSubjects, navigate]
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
              rules={{ required: "This field is required" }}
              label="Number of credits"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <ControlledAutocomplete
              control={control}
              name="studyProgramme"
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
    </Layout>
  );
});
