import { Link } from "react-router-dom";

export const userColumns = [
  {
    field: "name",
    headerName: "Topic name",
    renderCell: ({ row: { name, id } }) => (
      <Link to={`/app/user/${id}`}>{name}</Link>
    ),
    flex: 1,
  },
];

