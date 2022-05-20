import { Button, Grid } from "@mui/material";
import { useCallback } from "react";
import { Layout } from "../containers/Layout";
import { withRole } from "../containers/withRole";
import { useForm } from "react-hook-form";
import { ControlledTextField } from "../components/fields/input/ControlledTextField";
import { ControlledAutocomplete } from "../components/fields/input/ControlledAutocomplete";

export const ROLES = [
  { name: "Student", value: "STUDENT" },
  { name: "Admin", value: "ADMIN" },
  { name: "Teacher", value: "TEACHER" },
];

export const UserAdd = withRole(["ADMIN"], () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = useCallback((data) => {}, []);

  return (
    <Layout active="users">
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
        noValidate
      >
        <Grid justifyContent={"start"} container spacing={2}>
          <Grid item xs={6}>
            <ControlledTextField
              control={control}
              name="name"
              rules={{ required: "This field is required" }}
              label="Name"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <ControlledTextField
              control={control}
              name="surname"
              rules={{ required: "This field is required" }}
              label="Surname"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <ControlledAutocomplete
              control={control}
              multiple
              rules={{ required: "This field is required" }}
              label="Role"
              name="groups"
              options={ROLES}
              getOptionLabel={(option) =>
                option?.name ? `${option.name}` : ""
              }
            />
          </Grid>

          <Grid item xs={6}>
            <ControlledTextField
              control={control}
              name={"email"}
              rules={{
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              }}
              label="Email"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <ControlledTextField
              control={control}
              name={"password"}
              rules={{
                required: "This field is required",
                minLength: {
                  value: 5,
                  message: "Minimal password length is 5 characters",
                },
              }}
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
            />
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
