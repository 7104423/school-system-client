import { Autocomplete, Button, Grid, MenuItem, TextField } from "@mui/material";
import { Sidebar } from "../components/sidebar";
import { top100Films } from "../mockups/top100films.mockup";

export const SubjectEdit = () => {
  return (
    <div id="dashboard">
      <Sidebar active="subjects" />
      <div className="dash-view">
        <form style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <Grid justifyContent={"end"} container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Subject name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Subject goal"
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
              <Autocomplete
                disablePortal
                multiple
                options={top100Films}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} label="Teachers" />
                )}
              />
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
            <Grid item xs={6}>
              <TextField fullWidth label="Degree" value="20" select>
                <MenuItem value="BACHELOR">Bachelor</MenuItem>
                <MenuItem value="MASTER">Master</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Language" value="20" select>
                <MenuItem value="cs">Czech</MenuItem>
                <MenuItem value="en">English</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Study programme" value="20" select>
                <MenuItem value="cs">Software development</MenuItem>
                <MenuItem value="en">Business management</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item alignItems={"end"}>
              <Button variant="contained" primary>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

