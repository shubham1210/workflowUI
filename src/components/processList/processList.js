import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import { getProcessDefinition, postProcessDefinition } from "../api/camundaService";

export default function ProecssList() {
  const [processList, setProcessList] = React.useState([]);

  const fetchProcessList = async () => {
    const processList = await getProcessDefinition();
    setProcessList(processList.data);
  };

  const startProcess = async (processDefination) => {
    await postProcessDefinition(processDefination);
  };


  useEffect(() => {
    fetchProcessList();
  }, []);


  const renderDetailsButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => {
            startProcess(params.row.id);
            alert("Process Started")
            window.location = "/home/taskList";
          }}
        >
          Start Process
        </Button>
      </strong>
    );
  };

  const columns = [
    { field: "id", headerName: "ID", width: 400 },
    {
      field: "key",
      headerName: "Key",
      width: 200,
      editable: true,
    },
    {
      field: "start",
      headerName: "Start Process",
      width: 300,
      renderCell: renderDetailsButton,
      disableClickEventBubbling: true,
    },
  ];
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={processList}
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
        editMode="row"
      />
    </Box>
  );
}

