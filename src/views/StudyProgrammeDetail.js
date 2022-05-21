import { Grid } from "@mui/material";
import { useCallback, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ControlPanel } from "../components/control-panel/ControlPanel";
import { ADMIN } from "../config/roles";
import { Layout } from "../containers/Layout";
import { useContent, useDeleteContent } from "../hooks/useContent";

export const StudyProgrammeDetail = () => {
  const { id } = useParams();

  const [data, fetch] = useContent("studyProgramme", id);

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const remove = useDeleteContent("studyProgramme", id);
  const navigate = useNavigate();
  const handleDelete = useCallback(async () => {
    await remove();
    navigate("/app/study-programmes");
  }, [navigate, remove]);

  return (
    <Layout active="study-programmes">
      <ControlPanel
        title={data?.name}
        id={id}
        page={"study-programme"}
        rolesDelete={[ADMIN]}
        onDelete={handleDelete}
        rolesEdit={[ADMIN]}
      />

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
