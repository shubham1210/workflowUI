import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PersonIcon from "@mui/icons-material/Person";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Modal from "@mui/material/Modal";
import React from "react";
import ProecssList from "../processList/processList";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let userName = document.cookie.replace(
    /(?:(?:^|.*;\s*)loggedInUser\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  if (userName === "") userName = "shsharma";
  return (
    <Grid style={Styles.parentGrid} container spacing={12}>
      <Grid item xs={6}>
        <div style={Styles.camundaLogoSection}>
          <Link href="/">
            <h2 style={Styles.fontHeader}> Planning Worflow</h2>
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
        <PersonIcon /> &nbsp;&nbsp;{userName}
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
  marginTop: { marginTop: "25px" },
  fontHeader: {
    fontFamily: "fantasy",
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
};

export default Header;
