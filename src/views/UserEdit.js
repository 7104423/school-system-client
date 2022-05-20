import { Button, Grid, MenuItem, TextField } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ViewTrap } from "../components/viewtrap";
import { Layout } from "../containers/Layout";
import { WholePageLoader } from "../containers/WholePageLoader";
import { withRole } from "../containers/withRole";
import { useContent, useEditContent } from "../hooks/useContent";
import { useForm } from "react-hook-form";
import { ControlledTextField } from "../components/fields/input/ControlledTextField";
import { ControlledAutocomplete } from "../components/fields/input/ControlledAutocomplete";
import { useUser } from "../contexts/userContext";

export const ROLES = [
  { name: "Student", value: "STUDENT" },
  { name: "Admin", value: "ADMIN" },
  { name: "Teacher", value: "TEACHER" },
];

export const UserEdit = withRole(["ADMIN", "$CURRENT_USER"], () => {
  const { id } = useParams();
  const [isLoaded, data, fetch] = useContent("user", id);
  const [, , fetchUsers] = useContent("users");
  const update = useEditContent("user");
  const { control, handleSubmit, reset } = useForm();

  const user = useUser();
  const userRoles = user.getRoles();
  const hasAdmin = userRoles.includes("ADMIN");

  const navigate = useNavigate();

  useEffect(() => {
    fetch();
  }, [fetch, id]);

  useEffect(() => {
    const parsedData = {
      ...data,
      password: undefined,
      groups:
        data.groups
          ?.map(({ name }) => ROLES.find(({ value }) => value === name))
          .filter((e) => e) ?? [],
    };
    reset(parsedData);
  }, [data, reset]);

  const onSubmit = useCallback(
    async (data) => {
      await update(data);
      await fetch();
      await fetchUsers();
      navigate("/app/users");
    },
    [fetch, fetchUsers, navigate, update]
  );

  return (
    <Layout active="users">
      <ViewTrap>{!isLoaded && <WholePageLoader />}</ViewTrap>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
        noValidate
      >
        <Grid justifyContent={"end"} container spacing={2}>
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

          {hasAdmin && (
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
          )}

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

          <Grid item xs={6}></Grid>

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
