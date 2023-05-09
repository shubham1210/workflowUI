import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { getVersionsOfEmp } from "../api/employeeService";
import moment from 'moment';

export default function VersioningTable({ selectedRow }) {
  const [taskList, setTaskList] = useState([]);

  const fetchTaskList = async (processId,linkedId) => {
    const taskList = await getVersionsOfEmp(processId,linkedId);
    setTaskList(taskList.data);
  };

  useEffect(() => {
    if (selectedRow?.processId)
      fetchTaskList(selectedRow.processId, selectedRow.linkedId);
  }, [selectedRow]);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: false,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: false,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: false,
    },
    {
      field: "versions",
      headerName: "Version",
      type: "number",
      width: 110,
      editable: false,
    },{
      field: "createdDate",
      headerName: "Created Date",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      width: 160,
      valueFormatter: params => 
      moment(params?.value).format("DD/MM/YYYY hh:mm A"),
    },
  ];
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={taskList}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}