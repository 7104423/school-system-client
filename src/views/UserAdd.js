import { Button, Grid, MenuItem, TextField } from "@mui/material";
import { Layout } from "../containers/Layout";

export const UserAdd = () => {
	return (
		<Layout active="users">
			<form style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>

				<Grid justifyContent={"end"} container spacing={2}>

					<Grid item xs={6}>
						<TextField
							id="outlined-basic"
							label="Name"
							variant="outlined"
							fullWidth
						/>
					</Grid>

					<Grid item xs={6}>
						<TextField
							id="outlined-basic"
							label="Surname"
							variant="outlined"
							fullWidth
						/>
					</Grid>

					<Grid item xs={6}>
            <TextField fullWidth label="Role" value="20" select>
							<MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="teacher">Teacher</MenuItem>
            </TextField>
          </Grid>

					<Grid item xs={6}>
						<TextField
							id="outlined-basic"
							label="Email"
							variant="outlined"
							fullWidth
						/>
					</Grid>

					<Grid item xs={6}></Grid>

					<Grid item xs={12}>
						<Button variant="contained">Submit</Button>
					</Grid>

				</Grid>

			</form>
		</Layout>
	);
};
