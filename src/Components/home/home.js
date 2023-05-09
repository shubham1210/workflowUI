import React from 'react'
 import Grid from "@mui/material/Grid";
 import { Route, Routes } from 'react-router-dom';
 import { BrowserRouter as Router } from "react-router-dom";
 import Header from '../header/header';
 import Breadcrumb from '../breadcrumb/breadcrumb';
 import Body from '../body/body';
 import TaskList from '../body/taskList/tasklist';
 import SuperSet from '../body/visualisation/visualisation';
 import { Outlet } from 'react-router-dom';


 const Home = () => {


     let showBreadcrum = false;
 if (window.location.pathname==="/home") {
   showBreadcrum = false;
 }else{
   showBreadcrum = true;

 }
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

 <Grid item xs={8}>
     <Outlet></Outlet>
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

 export default Home;