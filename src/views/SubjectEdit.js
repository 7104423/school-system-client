import { Button, Divider, Grid, MenuItem } from "@mui/material";
import { Table } from "../components/table";
import { topicColumns } from "../config/columns/topics";
import { subjectMockup } from "../mockups/subjects.mockup";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { withRole } from "../containers/withRole";
import { useContent, useEditContent } from "../hooks/useContent";
import { ViewTrap } from "../components/viewtrap";
import { WholePageLoader } from "../containers/WholePageLoader";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ControlledAutocomplete } from "../components/fields/input/ControlledAutocomplete";
import { ControlledTextField } from "../components/fields/input/ControlledTextField";

export const SubjectEdit = withRole(["ADMIN", "TEACHER"], () => {
  const { id } = useParams();
  const [, fetchSubjects] = useContent("subjects");
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
        studyProgramme: data.studyProgramme?._id,
        supervisor: data.supervisor?._id,
        teachers: data.teachers.map((teacher) => teacher._id),
      };
      await update(formatedData);
      await fetch();
      await fetchSubjects();
      navigate("/app/subjects");
    },
    [update, fetch, fetchSubjects, navigate]
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
      <Grid container>
        <Grid xs={12} item>
          <Divider variant="middle">Topics</Divider>
        </Grid>
        <Grid xs={6} item>
          <Link target="_blank" to="/app/topic/add">
            <Button
              variant="outlined"
              endIcon={<OpenInNewIcon fontSize="small" />}
            >
              Create Topic
            </Button>
          </Link>
        </Grid>
        <Grid height={500} xs={12} item>
          <Table columns={topicColumns} rows={subjectMockup} />
        </Grid>
        <Grid xs={12} item>
          <Divider variant="middle">Digital contents</Divider>
        </Grid>
        <Grid xs={6} item>
          <Link target="_blank" to="/app/digital-content/add">
            <Button
              variant="outlined"
              endIcon={<OpenInNewIcon fontSize="small" />}
            >
              Create Digital content
            </Button>
          </Link>
        </Grid>
        <Grid height={500} xs={12} item>
          <Table columns={topicColumns} rows={subjectMockup} />
        </Grid>
      </Grid>
    </Layout>
  );
});
