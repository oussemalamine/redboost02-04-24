import { createColumnHelper } from "@tanstack/react-table"
const columnHelper = createColumnHelper()
export const columnDef = [
  //ANOTHER METHOD TO CREATE A HEADER ELEMENT
  columnHelper.accessor("id", { header: "ID" }),
  {
    accessorKey: "first_name",
    header: "FIRST NAME",
  },
  //ANOTHER THIRD METHOD TO CREATE A HEADER ELEMENT
  {
    accessorFn: (row) => row.last_name,
    header: "LAST NAME",
  },
  {
    accessorKey: "email",
    header: "EMAIL",
  },
  {
    accessorKey: "date",
    header: "DATE",
  },
]
