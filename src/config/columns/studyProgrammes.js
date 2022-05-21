import { Link } from "react-router-dom";

export const studyProgrammeColumns = [
  {
    field: "name",
    headerName: "Programme name",
    renderCell: ({ row: { name, id } }) => (
      <Link to={`/app/study-programme/${id}`}>{name}</Link>
    ),
    flex: 1,
  },
  {
    field: "degree",
    headerName: "Degree",
    flex: 1,
  },
  {
    field: "supervisor",
    headerName: "Supervisor",
    flex: 1,
    valueGetter: ({ row }) =>
      `${row?.supervisor?.name} ${row?.supervisor?.surname}`,
  },
];
