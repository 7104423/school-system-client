import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export const Table = ({ rows, columns }) => {
  return (
    <div style={{ height: "100%", paddingBottom: "2rem", paddingTop: "2rem" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[25]}
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};

