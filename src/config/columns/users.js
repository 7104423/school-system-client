import { Link } from "react-router-dom";

export const userColumns = [
  {
    field: "name",
    headerName: "Name",
    renderCell: ({ row: { name, id } }) => (
      <Link to={`/app/user/${id}`}>{name}</Link>
    ),
    flex: 1,
  },
  {
    field: "surname",
    headerName: "Surname",
    flex: 1,
  },
];
