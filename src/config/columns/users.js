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
    renderCell: ({ row: { surname, id } }) => (
      <Link to={`/app/user/${id}`}>{surname}</Link>
    ),
    flex: 1,
  },
  {
    field: "groups",
    headerName: "Roles",
    flex: 1,
    valueGetter: (params) => {
      let groups = [];
      params.row.groups.forEach( (item) => groups.push(item.name) );
      return groups.join(", ");
    },
  }
];
