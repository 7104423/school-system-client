import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
} from "@mui/material";
import { useCallback } from "react";
import { Layout } from "../containers/Layout";
import { withRole } from "../containers/withRole";
import { Controller, useForm } from "react-hook-form";
import { ControlledTextField } from "../components/fields/input/ControlledTextField";
import { ControlledAutocomplete } from "../components/fields/input/ControlledAutocomplete";
import { useAddContent, useContent } from "../hooks/useContent";
import { useNavigate } from "react-router-dom";
import { ADMIN, STUDENT, TEACHER } from "../config/roles";

export const ROLES = [
  { name: "Student", value: STUDENT },
  { name: "Admin", value: ADMIN },
  { name: "Teacher", value: TEACHER },
];

export const BOOLEAN = [
  { name: "true", value: true },
  { name: "false", value: false },
];

export const UserAdd = withRole([ADMIN], () => {
  const { control, handleSubmit, watch } = useForm();
  const add = useAddContent("user");
  const [, fetch] = useContent("users");
  const navigate = useNavigate();

  const thirdParty = watch("thirdPartyIdentity");

  const onSubmit = useCallback(
    async (data) => {
      const parsedData = {
        ...data,
        groups: data?.groups?.map(({ value }) => value) ?? [],
      };
      await add(parsedData);
      await fetch();
      navigate("/app/users");
    },
    [add, fetch, navigate]
  );

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
          <Grid item xs={12}>
            <Controller
              control={control}
              name="thirdPartyIdentity"
              render={({ field: { value, ...field } }) => (
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox {...field} checked={value || false} />}
                    label="3rd party identity"
                  />
                </FormGroup>
              )}
            />
          </Grid>
          {!thirdParty && (
            <>
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
              <Grid item xs={6}>
                <Controller
                  control={control}
                  name="resetPassword"
                  render={({ field: { value, ...field } }) => (
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox {...field} checked={value || false} />
                        }
                        label="Request user to change password"
                      />
                    </FormGroup>
                  )}
                />
              </Grid>
            </>
          )}

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
