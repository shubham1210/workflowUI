import Grid from "@mui/material/Grid";
import "./App.css";
import Body from "./components/body/body";
import Header from "./components/header/header";
import TaskList from "./components/body/taskList/tasklist";
import Breadcrumb from "./components/breadcrumb/breadcrumb";
import SuperSet from "./components/body/visualisation/visualisation";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
let showBreadcrum = false;
if (window.location.pathname==="/") {
  showBreadcrum = false;
}else{
  showBreadcrum = true;

}
function App() {
  return (
    <div style={Styles.backGroundClr}>
      <Grid container spacing={12}>
        <Grid item xs={12}>
          <Header></Header>
        </Grid>
        {showBreadcrum ? (
          <Grid style={Styles.breadCrumPadding} item xs={12}>
            <Breadcrumb></Breadcrumb>
          </Grid>
        ) : (
          <></>
        )}
        <Grid item xs={12}>
          <Router>
            <Routes>
              <Route exact path="/" element={<Body></Body>} />
              <Route path="/taskList" element={<TaskList></TaskList>} />
              <Route path="/visualisation" element={<SuperSet></SuperSet>} />
            </Routes>
          </Router>
        </Grid>
      </Grid>
    </div>
  );
}

const Styles = {
  backGroundClr: {
    backgroundColor: "rgb(248,160,28)",
    padding:"5px"
  
  },
  breadCrumPadding:{
    paddingTop:"0px"
  }
}
export default App;
