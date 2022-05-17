import { Link } from "react-router-dom";

export const digitalContentColumns = [
  {
    field: "type",
    headerName: "Type",
    renderCell: ({ row: { id, type } }) => (
      <Link to={`/app/digital-content/${id}`}>{type}</Link>
    ),
    flex: 1,
  },
  {
    field: "subject",
    headerName: "Subject",
    valueGetter: ({
      row: {
        subject: { name },
      },
    }) => name,
    flex: 1,
  },
  {
    field: "topic",
    headerName: "Topic",
    valueGetter: ({
      row: {
        topic: { name },
      },
    }) => name,
    flex: 1,
  },
];
