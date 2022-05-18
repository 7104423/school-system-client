import { Autocomplete, Button, Grid, MenuItem, TextField } from "@mui/material";
import { top100Films } from "../mockups/top100films.mockup";
import { Layout } from "../containers/Layout";
import { withRole } from "../containers/withRole";

export const DigitalContentAdd = withRole(["ADMIN", "TEACHER"], () => {
  return (
    <Layout active="digital-contents">
      <form style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Grid justifyContent={"end"} container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="Digital Content Type" value="20" select>
              <MenuItem value="Book">Book</MenuItem>
              <MenuItem value="Video">Video</MenuItem>
              <MenuItem value="Course">Course</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Link to new Digital Content"
              variant="outlined"
              fullWidth
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
                <TextField {...params} label="Subject" />
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
              renderInput={(params) => <TextField {...params} label="Topic" />}
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
