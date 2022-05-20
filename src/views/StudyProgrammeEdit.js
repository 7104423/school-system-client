import { Autocomplete, Button, Grid, MenuItem, TextField } from "@mui/material";
import { top100Films } from "../mockups/top100films.mockup";
import { Layout } from "../containers/Layout";
import { withRole } from "../containers/withRole";

export const StudyProgrammeEdit = withRole(["ADMIN"], () => {
  return (
    <Layout active="study-programmes">
      <form style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Grid justifyContent={"end"} container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Study programme name"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Study programme description"
              variant="outlined"
              fullWidth
              multiline
              rows={2}
            />
          </Grid>

          <Grid item xs={6}>
            <Autocomplete
              disablePortal
              options={top100Films}
              fullWidth
              renderInput={(params) => (
                <TextField fullWidth {...params} label="Supervisor" />
              )}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField fullWidth label="Degree" value="20" select>
              <MenuItem value="BACHELOR">Bachelor</MenuItem>
              <MenuItem value="MASTER">Master</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <Autocomplete
              disablePortal
              multiple
              size="big"
              options={top100Films}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label="Students" />
              )}
            />
          </Grid>

          <Grid item xs={6}></Grid>

          <Grid item xs={12}>
            <Button variant="contained">Submit</Button>
          </Grid>
        </Grid>
      </form>
    </Layout>
  );
});
