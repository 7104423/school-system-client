import { Autocomplete, Button, Grid, MenuItem, TextField } from "@mui/material";
import { top100Films } from "../mockups/top100films.mockup";
import { Layout } from "../containers/Layout";
import { withRole } from "../containers/withRole";
import { React } from "react";
import { useForm, Controller } from "react-hook-form";

export const SubjectAdd = withRole(["ADMIN"], () => {
  const {handleSubmit, errors, control, onSubmit } = useForm();

    return (
      <Layout active="subjects">
        <form onSubmit={handleSubmit(onSubmit)} style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <Grid justifyContent={"end"} container spacing={2}>
            <Grid item xs={12}>
              
            <Controller
            control={control}
            name="subName"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { isTouched, isDirty, error },
              formState,
              }) => (
              <TextField
                id="outlined-basic"
                label="Subject name"
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
            name="subGoal"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { isTouched, isDirty, error },
              formState,
              }) => (
              <TextField
                id="outlined-basic"
                label="Subject goal"
                variant="outlined"
                fullWidth
                multiline
                rows={2}
                onBlur={onBlur} // notify when input is touched
                onChange={onChange} // send value to hook form
                checked={value || ''}
                inputRef={ref}
              />
              )}
              />
            </Grid>
            <Grid item xs={6}>
              
              <Controller
            control={control}
            name="supervisor"
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
                  <TextField fullWidth {...params} label="Supervisor" />
                )}
              />
              )}
              />
            </Grid>
            <Grid item xs={6}>
              
              <Controller
            control={control}
            name="teachers"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { isTouched, isDirty, error },
              formState,
              }) => (
              <Autocomplete
                disablePortal
                multiple
                options={top100Films}
                fullWidth
                onBlur={onBlur} // notify when input is touched
                onChange={onChange} // send value to hook form
                checked={value || ''}
                inputRef={ref}
                renderInput={(params) => (
                  <TextField {...params} label="Teachers" />
                )}
              />
              )}
              />
            </Grid>
            <Grid item xs={12}>
              
              <Controller
            control={control}
            name="students"
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
                  <TextField {...params} label="Students" />
                )}
              />
              )}
              />
            </Grid>
            <Grid item xs={6}>
              
              <Controller
            control={control}
            name="degree"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { isTouched, isDirty, error },
              formState,
              }) => (
              <TextField 
              fullWidth 
              label="Degree" 
              select
              onBlur={onBlur} // notify when input is touched
              onChange={onChange} // send value to hook form
              value={value || ''}
              inputRef={ref}>
                <MenuItem value="Bc.">Bachelor</MenuItem>
                <MenuItem value="Mgr.">Master</MenuItem>
              </TextField>
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
              <TextField 
              fullWidth 
              label="Language" 
              select
              onBlur={onBlur} // notify when input is touched
              onChange={onChange} // send value to hook form
              value={value || ''}
              inputRef={ref}>
                <MenuItem value="cs">Czech</MenuItem>
                <MenuItem value="en">English</MenuItem>
              </TextField>
              )}
              />
            </Grid>
            <Grid item xs={6}>
              
              <Controller
            control={control}
            name="programme"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { isTouched, isDirty, error },
              formState,
              }) => (
              <TextField 
              fullWidth 
              label="Study programme" 
              select
              onBlur={onBlur} // notify when input is touched
              onChange={onChange} // send value to hook form
              value={value || ''}
              inputRef={ref}>
                <MenuItem value="cs">Software development</MenuItem>
                <MenuItem value="en">Business management</MenuItem>
              </TextField>
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
  },
);
