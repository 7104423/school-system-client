import { Link } from "react-router-dom";

export const topicColumns = [
  {
    field: "name",
    headerName: "Topic name",
    renderCell: ({ row: { name, id } }) => (
      <Link to={`/app/topic/${id}`}>{name}</Link>
    ),
    flex: 1,
  },
  {
    field: "subject",
    headerName: "Subject",
    valueGetter: (params) => params.row.subject?.name,
    flex: 1,
  },
];
