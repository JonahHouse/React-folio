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

const ButtonModal = () => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false);

  const handleButtonClickOpen = () => {
    setOpen(true);
  };

  const handleButtonModalClose = () => {
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
      <Button variant="outlined" color="primary" onClick={handleButtonClickOpen}>
        Button
      </Button>
      <Dialog
        open={open}
        onClose={handleButtonModalClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Enter Your Button Text Here</DialogTitle>
        <DialogContent>
          <DialogContentText>Button Text Message </DialogContentText>

          <form
            onSubmit={handleAddElement}
          >
            <TextField
              className={classes.input}
              autoFocus
              margin="dense"
              id="element"
              label="element"
              type="text"
              value={attributes.btnText}
              fullWidth
              name="btnText"
              onChange={handleInputChange}
            />
            <TextField
              className={classes.input}
              autoFocus
              margin="dense"
              id="element"
              label="element"
              type="text"
              value={attributes.btnLink}
              fullWidth
              name="btnLink"
              onChange={handleInputChange}
            />
          </form>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleButtonModalClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={(event) => {
              handleAddElement(event, "button"); handleButtonModalClose();
            }}
            color="primary"
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div >
  );
};

export default ButtonModal;
