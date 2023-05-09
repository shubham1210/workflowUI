import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { submitFormWithVaribale } from "../../api/camundaService";
import BpmnJs from "../bpmnViewer/bpmnViwer";

import {
  getEmpByProcess,
  getEmpDefaultList,
  saveEmpWithNewVersion,
} from "../../api/employeeService";
import CustomReactTable from "../../table/customReactTable";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function handleSubmit(task, isApproved, empList) {
  if(empList.length === 0)return;
  const newempList = []
  empList.forEach((row, key) => {
    row.taskid = task.id;
    row.processId = task.processInstanceId;
    row.versions = parseInt(row.versions) + 1 + "";
    row.linkedId = row.id;
    delete row.id;
    delete row.createdDate;
    newempList.push( row);
  });
 /*  const newempList = empList.keys().map((row) => {
    row.taskid = task.id;
    row.processId = task.processInstanceId;
    row.versions = parseInt(row.versions) + 1 + "";
    row.linkedId = row.id;
    delete row.id;
    return row;
  }); */
  saveEmpWithNewVersion(newempList);
  submitFormWithVaribale(task.id, isApproved);
  window.location.reload();
}


function TaskrightPane({ selectedTask }) {
  const [tabSelected, setTabSelected] = React.useState(0);
  const [isApproved, setIsApproved] = useState(false);
  let isLoading = false;

  const [editedEmpList, setEditedEmpList] = useState([]);

  function saveEditiedVersion(list){
    setEditedEmpList(list);
    console.log(editedEmpList)
  }

  const handleChange = (event, newValue) => {
    setTabSelected(newValue);
  };
  const handleSendSelection = (event) => {
    setIsApproved(!isApproved);
  };
  const isApprover = selectedTask?.assignee === "pahuwalia";
  const [empList, setEmpList] = useState([]);

  const fetchEmpList = async () => {
    let empList = [];
    
    if (isLoading === false && empList.length===0 && selectedTask?.name === "Submit Data") {
      isLoading = true;
      empList = await getEmpDefaultList();
      isLoading = false;
      setEmpList(empList.data);
    } else if (isLoading === false && empList.length===0 && selectedTask?.processInstanceId) {
      isLoading = true;
      empList = await getEmpByProcess(selectedTask?.processInstanceId);
      isLoading = false;
      setEmpList(empList.data);
    }
  };

  useEffect(() => {
      fetchEmpList();
  }, [selectedTask]);

  return (
    <Grid container spacing={12}>
      <Grid style={Styles.paddingTop} item xs={12}>
        <h2>Task Desctiption</h2>
        <Alert severity="info">
          <AlertTitle></AlertTitle>
          Assigned to — <strong>{selectedTask?.assignee}</strong>
          <br></br>
          Created —{" "}
          <strong>{moment(new Date(selectedTask?.created)).fromNow()}</strong>
        </Alert>
      </Grid>

      <Grid style={Styles.paddingTop} item xs={12}>
        <Box sx={{ width: "100%", bgcolor: "background.paper", boxShadow: "3"}}>
          <Tabs value={tabSelected} onChange={handleChange}>
            <Tab value={0} label="Form" />
            <Tab value={2} label="Process Diagram" />
            <Tab value={1} label="Description" />
            <Tab value={3} label="History" />
          </Tabs>
        </Box>
      </Grid>
      {selectedTask && tabSelected === 0 && (
        <Grid style={Styles.paddingTop} item xs={12}>
          <CustomReactTable
            empList={empList}
            saveEditiedVersion={saveEditiedVersion}
            taskType={selectedTask?.name}
          ></CustomReactTable>
          <Grid style={Styles.paddingTop} item xs={12}>
            <Stack direction="row" spacing={1}>
              <Checkbox
                {...label}
                value={isApproved}
                disabled={!isApprover}
                onClick={(event) => handleSendSelection(event)}
              />
              <div style={Styles.paddingTop}>Approved</div>

              <Button
                variant="contained"
                onClick={() => {
                  handleSubmit(selectedTask, isApproved,editedEmpList);
                }}
                color="success"
              >
                Submit
              </Button>
            </Stack>
          </Grid>
        </Grid>
      )}
      {selectedTask && tabSelected === 2 && (
        <Grid style={Styles.paddingTop} item xs={12}>
          <BpmnJs></BpmnJs>
        </Grid>
      )}
    </Grid>
  );
}

const Styles = {
  paddingTop: {
    paddingTop: "10px",
  },
};

export default TaskrightPane;
