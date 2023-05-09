import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import Grid from "@mui/material/Grid";
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import React from "react";
import AdminImg from "../../img/admin.png";
import cockPitImg from "../../img/cockpit.png";
import taskListImg from "../../img/tasklist.png";
import supersetImg from "../../img/superset.png";

const Body = () => {
  return (
    <div style={Styles.paddingBottom}>
      <Grid container spacing={12}>
        <Grid item xs={8}>
          <div style={Styles.camundaLogoSection}>
            <div>
              <Grid container spacing={12}>
                <Grid style={Styles.textcentre} item xs={3}>
                  <img alt="Cockpit" src={cockPitImg}></img>
                  <Link href="http://localhost:8085/camunda/app/cockpit/default/#/dashboard" target="_blank">Cockpit</Link>
                </Grid>
                <Grid style={Styles.textcentre} item xs={3}>
                  <img alt="taskList" src={taskListImg}></img>
                  <Link  href="taskList">TaskList</Link>
                </Grid>
                <Grid style={Styles.textcentre} item xs={3}>
                  <img alt="Cockpit" src={AdminImg}></img>
                  <Link href="http://localhost:8085/camunda/app/admin/default/#/" target="_blank">Admin</Link>
                </Grid>
                <Grid style={Styles.textcentre} item xs={3}>
                <img valt="Cockpit" style={Styles.supersetImg}  src={supersetImg}></img>
                  <Link href="visualisation">Visualisation</Link>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 350,minHeight: 250 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 30 }}
                color="text.secondary"
                gutterBottom
              >
                Profile
              </Typography>
              <Typography variant="h5" component="div">
               Shubham Sharma
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                shubham@localhost.com
              </Typography>
              <Typography variant="body2">
               <Link>Edit</Link>
               <Link>Change Password</Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

const Styles = {
  textcentre: {
    textAlign: "center",
  },
  paddingBottom: {
    backgroundColor: "white",
  },
  supersetImg:{
    height:"200px",
    width:"200px"
  }
};

export default Body;
