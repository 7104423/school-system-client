import { Autocomplete, Button, Grid, MenuItem, TextField } from "@mui/material";
import { top100Films } from "../mockups/top100films.mockup";
import { Layout } from "../containers/Layout";
import { withRole } from "../containers/withRole";
import { React } from "react";
import { useForm, Controller } from "react-hook-form";

export const TopicAdd = withRole(["TEACHER", "ADMIN"], () => {
  const {handleSubmit, errors, control, onSubmit } = useForm();

  return (
    <Layout active="topics">
      <h2 className="view-heading">Add Topic</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Grid justifyContent={"end"} container spacing={2}>
          <Grid item xs={12}>
          
          <Controller
            control={control}
            name="topname"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { isTouched, isDirty, error },
              formState,
              }) => (
            <TextField
              id="outlined-basic"
              label="Topic name"
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
            name="topdesc"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { isTouched, isDirty, error },
              formState,
              }) => (
              <TextField
              id="outlined-basic"
              label="Topic description"
              variant="outlined"
              fullWidth
              onBlur={onBlur} // notify when input is touched
              onChange={onChange} // send value to hook form
              checked={value || ''}
              inputRef={ref}
              multiline
              rows={4}
            />
            )}
            />
          </Grid>
          <Grid item xs={6}>
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
              options={top100Films}
              fullWidth
              onBlur={onBlur} // notify when input is touched
              onChange={onChange} // send value to hook form
              checked={value || ''}
              inputRef={ref}
              renderInput={(params) => (
                <TextField fullWidth {...params} label="Subject" />
              )}
            />
            )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
            control={control}
            name="lang"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { isTouched, isDirty, error },
              formState,
              }) => (
            <TextField fullWidth label="Language" 
            select
            onBlur={onBlur} // notify when input is touched
            onChange={onChange} // send value to hook form
            value={value || ''}
            inputRef={ref}
            >
              <MenuItem value="CS">Czech</MenuItem>
              <MenuItem value="EN">English</MenuItem>
            </TextField>
            )}
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained">Submit</Button>
          </Grid>
        </Grid>
      </form>
    </Layout>
  );
});
