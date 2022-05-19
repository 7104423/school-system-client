import { Button, Grid, MenuItem, TextField } from "@mui/material";
import { Layout } from "../containers/Layout";
import { withRole } from "../containers/withRole";
import { React } from "react";
import { useForm, Controller } from "react-hook-form";

export const UserAdd = withRole(["ADMIN"], () => {
  const {handleSubmit, errors, control, onSubmit } = useForm();

  return (
    <Layout active="users">
      <form onSubmit={handleSubmit(onSubmit)} style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Grid justifyContent={"end"} container spacing={2}>
          <Grid item xs={6}>
                                    
          <Controller
            control={control}
            name="name"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { isTouched, isDirty, error },
              formState,
              }) => (
              <TextField
              id="outlined-basic"
              label="Name"
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

          <Grid item xs={6}>
                        
            <Controller
            control={control}
            name="surename"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { isTouched, isDirty, error },
              formState,
              }) => (
              <TextField
              id="outlined-basic"
              label="Surname"
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

          <Grid item xs={6}>
                        
            <Controller
            control={control}
            name="role"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { isTouched, isDirty, error },
              formState,
              }) => (
              <TextField fullWidth label="Role" 
              select
              onBlur={onBlur} // notify when input is touched
                onChange={onChange} // send value to hook form
                value={value || ''}
                inputRef={ref}>
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="teacher">Teacher</MenuItem>
            </TextField>
            )}
            />
          </Grid>

          <Grid item xs={6}>
                        
            <Controller
            control={control}
            name="email"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { isTouched, isDirty, error },
              formState,
              }) => (
            <TextField
              id="outlined-basic"
              label="Email"
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

          <Grid item xs={6}></Grid>

          <Grid item xs={12}>
            <Button variant="contained">Submit</Button>
          </Grid>
        </Grid>
      </form>
    </Layout>
  );
});
