import { Link } from "react-router-dom";

export const subjectColumns = [
  {
    field: "name",
    headerName: "Subject name",
    renderCell: ({ row: { name, id } }) => (
      <Link to={`/app/subject/${id}`}>{name}</Link>
    ),
    flex: 1,
  },
  { field: "supervisor", headerName: "Supervisor", flex: 1 },
  {
    field: "degree",
    headerName: "Degree",
  },
  {
    field: "language",
    headerName: "Language",
  },
  {
    field: "studyProgramme",
    headerName: "Study Programme",
    flex: 1,
  },
];

