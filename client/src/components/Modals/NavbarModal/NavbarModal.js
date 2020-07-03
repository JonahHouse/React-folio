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
import Paper from '@material-ui/core/Paper'
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
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
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Navbar Modal
      </Button>
      <Dialog
        open={open}
        onClose={handleModalClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Enter Site Labels Here</DialogTitle>
        <DialogContent>
          <DialogContentText>Site Name</DialogContentText>
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
            <DialogContentText>Site Link 1</DialogContentText>
            <TextField
              className={classes.input}
              autoFocus
              margin="dense"
              id="element"
              label="Site Link 1"
              type="text"
              fullWidth
              name="siteLink1"
              value={attributes.siteLink1}
              onChange={(event) => handleInputChange(event, "navbar")}
            />
          </form>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={(event) => {
              handleAddElement(event, "navbar"); handleModalClose();
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
