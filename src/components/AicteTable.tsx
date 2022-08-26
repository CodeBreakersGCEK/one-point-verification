import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  {
    field: 'bankAccount',
    headerName: 'Bank Account',

    width: 100,
  },
  { field: 'collegeCode', headerName: 'C_Code', width: 70 },
  {
    field: 'email',
    headerName: 'Email Numer',

    width: 220,
  },
  { field: 'isVerified', headerName: 'Verified', width: 100 },
  { field: 'name', headerName: 'Name', width: 130 },
  {
    field: 'pan',
    headerName: 'Pan Card',

    width: 150,
  },
  {
    field: 'registrationNumber',
    headerName: 'Regd No.',

    width: 150,
  },
  { field: 'uid', headerName: 'Aadhar No.', width: 130 },
];

export default function DataTable({ users }: any) {
  const rows = users;
  return (
    <div className="w-full h-[400px]">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[7]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}
