import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { DataGrid } from "@mui/x-data-grid";
import React, { useRef, useState, useEffect } from "react";
import VersioningTable from "./versioningTable";
import moment from 'moment';

export default function DataGridDemo({ empList, saveEditiedVersion,taskType }) {
  const renderDetailsButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => {
            setSelectedRow(params.row);
            handleOpen();
          }}
        >
          Versions
        </Button>
      </strong>
    );
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "createdDate",
      headerName: "Created Date",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      width: 160,
      valueFormatter: params => 
      moment(params?.value).format("DD/MM/YYYY hh:mm A"),
    },
    {
      field: "PreviousEdits",
      headerName: "Old Version",
      width: 150,
      renderCell: renderDetailsButton,
      disableClickEventBubbling: true,
    },
  ];
  if(taskType === "Submit Data")
  {
    columns.pop()
  }
  const apiRef = useRef(null);
  const handleClickButton = () => {
    saveEditiedVersion(apiRef.current.getRowModels());
  };

  useEffect(() => {
   saveEditiedVersion(apiRef.current.getRowModels());
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedRow, setSelectedRow] = useState([]);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        apiRef={apiRef}
        rows={empList}
        columns={columns}
        onCellClick={handleClickButton}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={Styles.modalStyle}>
          <VersioningTable selectedRow={selectedRow}></VersioningTable>
        </Box>
      </Modal>
    </Box>
  );
}

const Styles = {
  marginTop: { marginTop: "25px" },
  fontHeader: {
    fontFamily: "fantasy",
  },
  parentGrid: {
    justifyContent: "center",
  },
  camundaLogoSection: {
    textAlign: "left",
  },
  headerUserSection: {
    textAlign: "right",
  },
  loggedInUserimage: {
    height: `15px`,
  },
  modalStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
};
