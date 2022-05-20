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
  {
    field: "supervisor",
    headerName: "Supervisor",
    flex: 1,
    valueGetter: (params) =>
      `${params.row.supervisor?.name} ${params.row.supervisor?.surname}`,
  },
  {
    field: "credits",
    headerName: "Credits",
  },
  {
    field: "degree",
    headerName: "Degree",
    valueGetter: (params) => params.row.studyProgramme?.degree,
  },
  {
    field: "language",
    headerName: "Language",
  },
  {
    field: "studyProgramme",
    headerName: "Study Programme",
    valueGetter: (params) => params.row.studyProgramme?.name,
    flex: 1,
  },
];
