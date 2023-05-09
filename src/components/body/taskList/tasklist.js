import Grid from "@mui/material/Grid";
import moment from 'moment';
import React, { useEffect, useState } from "react";
import { getTaskList } from "../../api/camundaService";
import TaskLeftPane from "./taskLeftPane";
import TaskRightPane from "./taskRightPane";


const TaskList = () => {
    const [taskList, setTaskList] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);

  const fetchTaskList = async () => {
    const taskList = await getTaskList();
    let userName = document.cookie.replace(/(?:(?:^|.*;\s*)loggedInUser\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if(userName === '') userName = 'shsharma';
    const filtered = taskList.data.filter(task => {
        return task.assignee === userName;
      }).sort((a, b) => moment(new Date(b.created)).isBefore(moment(new Date(a.created))));

    setTaskList(filtered);
    setSelectedTask(filtered[0]);
  };

  useEffect(() => {
    fetchTaskList();
  }, []);

  return (
    <Grid style={Styles.paddingBottom} container spacing={12}>
      <Grid item xs={3}>
        <TaskLeftPane taskList={taskList} setSelectedTask={setSelectedTask}></TaskLeftPane>
      </Grid>
      {selectedTask ? 
      <Grid item xs={9}>
        <TaskRightPane selectedTask={selectedTask}></TaskRightPane>
      </Grid>: <Grid style={Styles.center} item xs={9}> <h1>No Preview <br></br> Select task</h1></Grid>
      }
    </Grid>
  );
};

const Styles = {
  backGroundClr: {},
  textcentre: {
    textAlign: "center",
  },
  paddingBottom: {
    paddingBottom: "400px",
    backgroundColor: "white",
  },
  padding: {
    padding: "10px",
  },
  center:{
    textAlign:"center",
    margingTop:"100px"
  }
};

export default TaskList;
