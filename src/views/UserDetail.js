import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ControlPanel } from "../components/control-panel/ControlPanel";
import { Layout } from "../containers/Layout";
import { useContent } from "../hooks/useContent";
import { ViewTrap } from "../components/viewtrap";
import { WholePageLoader } from "../containers/WholePageLoader";

export const UserDetail = () => {
  const { id } = useParams();
  const [isLoaded, data, fetch] = useContent("user", id);

  useEffect(() => {
    fetch();
  }, [id]);

  return (
    <Layout active="users">
      <ViewTrap>{!isLoaded && <WholePageLoader />}</ViewTrap>
      <ControlPanel
        title={"User Detail"}
        id={id}
        page={"user"}
        rolesDelete={["ADMIN"]}
        rolesEdit={["ADMIN"]}
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
        <Grid xs={6}>{data?.groups.map(({ name }) => name).join(", ")}</Grid>
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
