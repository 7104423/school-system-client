import { Grid } from "@mui/material";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ControlPanel } from "../components/control-panel/ControlPanel";
import { ViewTrap } from "../components/viewtrap";
import { Layout } from "../containers/Layout";
import { WholePageLoader } from "../containers/WholePageLoader";
import { useContent } from "../hooks/useContent";

export const StudyProgrammeDetail = () => {
  const { id } = useParams();

  const [isLoaded, data, fetch] = useContent("studyProgramme", id);

  useEffect(() => {
    if (isLoaded) return;
    fetch();
  }, []);

  return (
    <Layout active="study-programmes">
      <ViewTrap>{!isLoaded && <WholePageLoader />}</ViewTrap>
      <ControlPanel title={data?.name} id={id} page={"study-programme"} />

      <Grid justifyContent={"end"} container spacing={2}>
        <Grid item xs={12}>
          <p>{data?.description}</p>
        </Grid>

        <Grid item xs={6}>
          <strong>Supervisor</strong>:{" "}
          <Link
            to={`/app/user/${data?.supervisor?._id}`}
          >{`${data?.supervisor?.name} ${data?.supervisor?.surname}`}</Link>
        </Grid>

        <Grid item xs={6}>
          <strong>Degree</strong>: {data?.degree}
        </Grid>

        <Grid item xs={12}>
          <strong>Students</strong>:{" "}
          {data?.students?.map((student, index) => (
            <>
              {student?.name && (
                <>
                  <Link
                    to={`/app/user/${student?._id}`}
                  >{`${student?.name} ${student?.surname}`}</Link>
                  {index !== data.students.length - 1 && ", "}
                </>
              )}
            </>
          ))}
        </Grid>
      </Grid>
    </Layout>
  );
};
