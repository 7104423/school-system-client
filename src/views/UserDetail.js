import { Grid } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ControlPanel } from "../components/control-panel/ControlPanel";
import { Layout } from "../containers/Layout";
import { useContent, useDeleteContent } from "../hooks/useContent";
import { ADMIN } from "../config/roles";

export const UserDetail = () => {
  const { id } = useParams();
  const [data, fetch] = useContent("user", id);
  const remove = useDeleteContent("user", id);
  const navigate = useNavigate();

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleDelete = useCallback(async () => {
    if (!(await remove())) return;
    navigate("/app/users");
  }, [navigate, remove]);

  return (
    <Layout active="users">
      <ControlPanel
        title={"User Detail"}
        id={id}
        page={"user"}
        rolesDelete={[ADMIN]}
        onDelete={handleDelete}
        rolesEdit={[ADMIN]}
      />
      <Grid container>
        <Grid xs={6}>
          <strong>Name:</strong>
        </Grid>
        <Grid xs={6}>{data?.name}</Grid>
      </Grid>
      <Grid container>
        <Grid xs={6}>
          <strong>Surname:</strong>
        </Grid>
        <Grid xs={6}>{data?.surname}</Grid>
      </Grid>
      <Grid container>
        <Grid xs={6}>
          <strong>Role:</strong>
        </Grid>
        <Grid xs={6}>{data?.groups?.map(({ name }) => name).join(", ")}</Grid>
      </Grid>
      <Grid container>
        <Grid xs={6}>
          {" "}
          <strong>Email:</strong>
        </Grid>
        <Grid xs={6}>
          <a href={`mailto:${data?.email}`}>{data?.email}</a>
        </Grid>
      </Grid>
    </Layout>
  );
};
