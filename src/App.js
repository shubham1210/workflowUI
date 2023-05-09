import Grid from "@mui/material/Grid";
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Body from "./components/body/body";
import TaskList from "./components/body/taskList/tasklist";
import SuperSet from "./components/body/visualisation/visualisation";
import Breadcrumb from "./components/breadcrumb/breadcrumb";
import Header from "./components/header/header";
import SignIn from './components/signIn/signIn';
import Home from "./components/home/home";

let showBreadcrum = false;
if (window.location.pathname==="/") {
  showBreadcrum = false;
}else{
  showBreadcrum = true;

}
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={ <SignIn/> } />
      <Route path="home" element={<Home></Home>} >
      <Route path="body" element={<Body></Body>} />
<Route path="taskList" element={<TaskList></TaskList>} />
<Route path="visualisation" element={<SuperSet></SuperSet>} />
        </Route>


    </Routes>
  </Router>
  );
}


export default App;
