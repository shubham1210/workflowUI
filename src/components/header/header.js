import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PersonIcon from "@mui/icons-material/Person";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Modal from "@mui/material/Modal";
import React from "react";
import ProecssList from "../processList/processList";
import bainImg from "../../img/bain.png";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let userName = localStorage.getItem("username");
  if (userName === "") userName = "shsharma";
  return (
    <Grid style={Styles.parentGrid} container spacing={12}>
      <Grid item xs={1}>
        <img valt="bainIcon" style={Styles.bainImg} src={bainImg}></img>
      </Grid>
      <Grid style={Styles.leftMargin} item xs={5}>
        <div style={Styles.camundaLogoSection}>
          <Link style={Styles.noUnderLine} href="/home/body">
            <h2 style={Styles.fontHeader}> Planning Workflow</h2>
          </Link>
        </div>
      </Grid>
      <Grid
        style={Styles.marginTop}
        item
        display="flex"
        justifyContent="right"
        alignItems="right"
        xs={6}
      >
        <AccountTreeIcon></AccountTreeIcon>&nbsp;&nbsp;
        <Link onClick={handleOpen}>Start Process</Link>&nbsp;&nbsp;
        <PersonIcon /> {userName}&nbsp;&nbsp;
        <Link href="/">Logout</Link>&nbsp;&nbsp;
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={Styles.modalStyle}>
            <ProecssList></ProecssList>
          </Box>
        </Modal>
      </Grid>
    </Grid>
  );
};

const Styles = {
  leftMargin: {
    marginLeft: "0px",
    paddingLeft: "0px"
  },
  marginTop: { marginTop: "25px" },
  fontHeader: {
    fontFamily: "fantasy",
    color: "black",
  },
  parentGrid: {
    justifyContent: "center",
  },
  camundaLogoSection: {
    textAlign: "left",
  },
  headerUserSection: {
    textAlign: "right",
  },
  loggedInUserimage: {
    height: `15px`,
  },
  modalStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
  noUnderLine: {
    textDecoration: "none",
  },
  bainImg: {
    height: "50px",
    width: "50px",
    marginTop:"10px"
  },
};

export default Header;
