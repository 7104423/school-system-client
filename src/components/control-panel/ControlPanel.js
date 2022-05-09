import { Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

export const ControlPanel = ({ title, id, page }) => {
  return (
    <Grid container alignItems={"center"} spacing={"0.25rem"}>
      <Grid item>
        <h2 className="view-heading">{title}</h2>
      </Grid>
      <Grid item>
        <Grid container py={"1rem"} spacing="0.25rem">
          <Grid item>
            <Link to={`/app/${page}/edit/${id}`}>
              <IconButton>
                <EditIcon fontSize="inherit" />
              </IconButton>
            </Link>
          </Grid>
          <Grid item>
            <IconButton>
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

