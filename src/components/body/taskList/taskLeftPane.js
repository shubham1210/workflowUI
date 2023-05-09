import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import React from "react";
import moment from 'moment';


const TaskLeftPane = ({ taskList,setSelectedTask }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index,task) => {
    setSelectedIndex(index);
    setSelectedTask(task)
  };

  const taskListHtml  = taskList.map((task,index) => (
    <ListItemButton key={index} onClick={(event) => handleListItemClick(event, index,task)} selected={selectedIndex===index} alignItems="flex-start">
      <ListItemText
        primary=<b>{task.name}</b>
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              <b>Process ID :</b> {task.id}
              {task.processDefinitionId}
            </Typography>
            <br />
            <b>Assigned to :</b> {task.assignee}
            <br />
            Created <strong>{moment(new Date(task?.created)).fromNow()}</strong>
          </React.Fragment>
        }
      />
    </ListItemButton>
  ));;
  

  return (
    <Grid container spacing={12}>
      <Grid style={Styles.paddingTop} item xs={12}>
        <h2>Task Items({taskList?.length})</h2>
      </Grid>
      <Grid style={Styles.paddingTop} item xs={12}>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {taskListHtml}
          <Divider variant="inset" component="li" />
        </List>
      </Grid>
    </Grid>
  );
};
const Styles = {
  paddingTop: {
    paddingTop: "10px",
  },
};

export default TaskLeftPane;
