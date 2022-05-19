import { Autocomplete, Button, Grid, MenuItem, TextField } from "@mui/material";
import { top100Films } from "../mockups/top100films.mockup";
import { Layout } from "../containers/Layout";
import { withRole } from "../containers/withRole";
import { React } from "react";
import { useForm, Controller } from "react-hook-form";

export const DigitalContentAdd = withRole(["ADMIN", "TEACHER"], () => {
  const {handleSubmit, errors, control, onSubmit } = useForm();
    
  return (
    <Layout active="digital-contents">
      <form onSubmit={handleSubmit(onSubmit)} style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Grid justifyContent={"end"} container spacing={2}>
          
          <Grid item xs={12}>
          <Controller
            control={control}
            name="type"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { isTouched, isDirty, error },
              formState,
              }) => (
                <TextField fullWidth label="Digital Content Type" 
                  select
                  onBlur={onBlur} // notify when input is touched
                  onChange={onChange} // send value to hook form
                  value={value || ''}
                  inputRef={ref}
                  >
                    <MenuItem value="Book">Book</MenuItem>
                    <MenuItem value="Video">Video</MenuItem>
                    <MenuItem value="Course">Course</MenuItem>
                </TextField>
            )}
          />
          </Grid>

          <Grid item xs={12}>
          <Controller
            control={control}
            name="link"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { isTouched, isDirty, error },
              formState,
              }) => (
              <TextField
                id="outlined-basic"
                label="Link to new Digital Content"
                variant="outlined"
                fullWidth
                onBlur={onBlur} // notify when input is touched
                onChange={onChange} // send value to hook form
                checked={value || ''}
                inputRef={ref}
              />
            )}
          />
          </Grid>

          <Grid item xs={12}>
          <Controller
            control={control}
            name="subject"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { isTouched, isDirty, error },
              formState,
              }) => (
              <Autocomplete
                disablePortal
                multiple
                size="big"
                options={top100Films}
                fullWidth
                onBlur={onBlur} // notify when input is touched
                onChange={onChange} // send value to hook form
                checked={value || ''}
                inputRef={ref}
                renderInput={(params) => (
                  <TextField {...params} label="Subject" />
                )}
              />
            )}
          />
          </Grid>

          <Grid item xs={12}>
          <Controller
            control={control}
            name="topic"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { isTouched, isDirty, error },
              formState,
              }) => (
              <Autocomplete
                disablePortal
                multiple
                size="big"
                options={top100Films}
                fullWidth
                onBlur={onBlur} // notify when input is touched
                onChange={onChange} // send value to hook form
                checked={value || ''}
                inputRef={ref}
                renderInput={(params) => <TextField {...params} label="Topic" />}
              />
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
