import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/body/body";
import TaskList from "./components/body/taskList/tasklist";
import SuperSet from "./components/body/visualisation/visualisation";
import Home from "./components/home/home";
import SignIn from "./components/signIn/signIn";

function App() {
  return (
    /*     <div style={Styles.backGroundClr}>
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
              <Route path="/home" element={ <SignIn/> } />
            </Routes>
          </Router>
        </Grid>
      </Grid>
    </div> */
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="home" element={<Home></Home>}>
          <Route path="body" element={<Body></Body>} />
          <Route path="taskList" element={<TaskList></TaskList>} />
          <Route path="visualisation" element={<SuperSet></SuperSet>} />
        </Route>
      </Routes>
    </Router>
  );
}

/* const Styles = {
  backGroundClr: {
    backgroundColor: "rgb(248,160,28)",
    padding: "5px",
  },
  breadCrumPadding: {
    paddingTop: "0px",
  },
}; */
export default App;
