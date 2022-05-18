import { Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { useUser } from "../../contexts/userContext";
import { useCallback } from "react";
import { fetchJSON, url } from "../../utils/api";

export const ControlPanel = ({
  title,
  id,
  page,
  rolesEdit = [],
  rolesDelete = [],
}) => {
  const user = useUser();
  const userRoles = user.getRoles();

  const handleDelete = useCallback(() => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      fetchJSON(`${url}/api/${page}/delete`, {
        method: "POST",
        body: JSON.stringify({ id }),
      });
    }
  }, [id, page]);

  return (
    <Grid container alignItems={"center"} spacing={"0.25rem"}>
      <Grid item>
        <h2 className="view-heading">{title}</h2>
      </Grid>
      <Grid item>
        <Grid container py={"1rem"} spacing="0.25rem">
          {rolesEdit.some((role) => userRoles.includes(role)) && (
            <Grid item>
              <Link to={`/app/${page}/edit/${id}`}>
                <IconButton>
                  <EditIcon fontSize="inherit" />
                </IconButton>
              </Link>
            </Grid>
          )}
          {rolesDelete.some((role) => userRoles.includes(role)) && (
            <Grid item>
              <IconButton onClick={handleDelete()}>
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
