import { DataGrid } from "@mui/x-data-grid";

export const Table = ({ rows, columns }) => {
  return (
    <div style={{ height: "100%", paddingBottom: "2rem", paddingTop: "2rem" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[5, 10, 25, 100]}
        checkboxSelection
      />
    </div>
  );
};

