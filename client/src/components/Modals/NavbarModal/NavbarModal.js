import React, { useState, useContext, useRef } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ElementContext from "../../../utils/ElementContext";
import ElementAPI from "../../../utils/ElementAPI";
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  form: {

  },
  input: {

  }
}))

const NavbarModal = () => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false);

  const handleNavbarClickOpen = () => {
    setOpen(true);
  };

  const handleNavbarModalClose = () => {
    setOpen(false);
  };

  const { attributes, handleInputChange, handleAddElement } = useContext(
    ElementContext
  );

  const {
    getElements,
    createElement,
    updateElement,
    deleteElement,
  } = ElementAPI;

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleNavbarClickOpen}>
        Navbar
      </Button>
      <Dialog
        open={open}
        onClose={handleNavbarModalClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add A NavBar</DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleAddElement}
          >
            <TextField
              className={classes.input}
              autoFocus
              margin="dense"
              id="element"
              label="Site Title"
              type="text"
              fullWidth
              name="siteTitle"
              value={attributes.siteTitle}
              onChange={(event) => handleInputChange(event, "navbar")}
            />
            <TextField
              className={classes.input}
              autoFocus
              margin="dense"
              id="element"
              label="LinkedIn Link"
              type="text"
              fullWidth
              name="linkedin"
              value={attributes.linkedin}
              onChange={(event) => handleInputChange(event, "navbar")}
            />
            <TextField
              className={classes.input}
              autoFocus
              margin="dense"
              id="element"
              label="GitHub Link"
              type="text"
              fullWidth
              name="github"
              value={attributes.github}
              onChange={(event) => handleInputChange(event, "navbar")}
            />
            <TextField
              className={classes.input}
              autoFocus
              margin="dense"
              id="element"
              label="Instagram Link"
              type="text"
              fullWidth
              name="instagram"
              value={attributes.instagram}
              onChange={(event) => handleInputChange(event, "navbar")}
            />
          </form>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleNavbarModalClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={(event) => {
              handleAddElement(event, "navbar"); handleNavbarModalClose();
            }}
            color="primary"
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NavbarModal
