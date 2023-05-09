import Grid from "@mui/material/Grid";
import React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumb from "../breadcrumb/breadcrumb";
import Header from "../header/header";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Bain and Co.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const Home = () => {
  let showBreadcrum = false;
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/home/body"
  ) {
    showBreadcrum = false;
  } else {
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

        <Grid item xs={12}>
          <Outlet></Outlet>
        </Grid>
      </Grid>
      <Copyright sx={{ mt: 8, mb: 4 }} />

    </div>
  );
};

const Styles = {
  backGroundClr: {
    backgroundColor: "aliceblue",
    padding: "5px",
  },
  breadCrumPadding: {
    paddingTop: "0px",
  },
};

export default Home;
