import { Link } from "react-router-dom";

export const digitalContentColumns = [
  {
    field: "id",
    headerName: "ID",
    renderCell: ({ row: { id } }) => (
      <Link to={`/app/digital-content/${id}`}>{id}</Link>
    ),
    flex: 1,
  },
  {
    field: "type",
    headerName: "Type",
    flex: 1,
  },
  {
    field: "subject",
    headerName: "Subject",
    flex: 1,
  },
  {
    field: "topic",
    headerName: "Topic",
    flex: 1,
  },
];

