import { Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { useUser } from "../../contexts/userContext";

export const ControlPanel = ({
  title,
  id,
  page,
  rolesEdit = [],
  rolesDelete = [],
  onDelete = () => {},
}) => {
  const user = useUser();
  const userRoles = user.getRoles();

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
              <IconButton onClick={onDelete}>
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
