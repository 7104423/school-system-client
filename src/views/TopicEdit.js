import { Autocomplete, Button, Grid, MenuItem, TextField } from "@mui/material";
import { top100Films } from "../mockups/top100films.mockup";
import { Layout } from "../containers/Layout";
import { withRole } from "../containers/withRole";

export const TopicEdit = withRole(["TEACHER", "ADMIN"], () => {
  return (
    <Layout active="topics">
      <h2 className="view-heading">Edit Topic</h2>
      <form style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Grid justifyContent={"end"} container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Topic name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Topic description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              disablePortal
              options={top100Films}
              fullWidth
              renderInput={(params) => (
                <TextField fullWidth {...params} label="Subject" />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Language" value="20" select>
              <MenuItem value="CS">Czech</MenuItem>
              <MenuItem value="EN">English</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained">Submit</Button>
          </Grid>
        </Grid>
      </form>
    </Layout>
  );
});
