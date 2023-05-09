import React, { useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

const SuperSet = () => {
  const [tabSelected, setTabSelected] = useState(0);
  const handleChange = (event, newValue) => {
    setTabSelected(newValue);
  };
  return (
    <Grid style={Styles.paddingTop} container spacing={12}>
      <Grid style={Styles.paddingTop} item xs={12}>
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs value={tabSelected} onChange={handleChange}>
            <Tab value={0} label="Super Set" />
            <Tab value={1} label="Tablue" />
          </Tabs>
        </Box>
      </Grid>
      {tabSelected === 0 && (
        <Grid style={Styles.paddingTopLeft} item xs={12}>
          <iframe
            title="superset"
            style={Styles.wholeScreen}
            src="http://localhost:8088/superset/dashboard/6/?preselect_filters=%7B%7D&standalone=true&native_filters_key=4iAOD5vlknO8h4tD_3-aUGmiGBM7Fun9McJ0QGJzFi86Utp1BIyy2dxd5i8FQ6yo"
          ></iframe>
        </Grid>
      )}
      {tabSelected === 1 && (
        <Grid style={Styles.paddingTopLeft} item xs={12}>
          <iframe
            title="tablue"
            style={Styles.wholeScreen}
            src="https://public.tableau.com/views/US_Superstore_10_0/Overview?%3Aembed=y&%3AshowVizHome=no&%3Ahost_url=https%3A%2F%2Fpublic.tableau.com%2F&%3Atabs=yes&%3Atoolbar=yes&%3Aanimate_transition=yes&%3Adisplay_static_image=no&%3Adisplay_spinner=no&%3Adisplay_overlay=yes&%3Adisplay_count=yes&%3AloadOrderID=0"
          ></iframe>
        </Grid>
      )}
    </Grid>
  );
};

const Styles = {
  wholeScreen: {
    width: "95%",
    height: "1020px",
    marginLeft: "100px",
  },
  paddingTop: {
    paddingTop: "10px",
  },
  paddingTopLeft: {
    paddingTop: "0px",
    marginLeft: "0px",
    paddingLeft: "0px",
  },
};

export default SuperSet;
