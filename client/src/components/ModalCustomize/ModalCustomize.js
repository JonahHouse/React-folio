import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const ModalCustomize = () => {
  
  const [componentState, setComponentState] = useState({
    components: [
      {
        name: "NavBar",
        input: ''
      },
      {
        name: "Footer"
        input: ''
      },
      {
        name: "Form"
        input: ''
      },
      {
        name: "Button"
        input: ''

      }
    ]
  })

  componentState.handleInputChange = event => {
    setComponentState({ ...componentState, [event.target.name]: event.target.value })
  }

 
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }


  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Customize Component</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Customize Component here
          </DialogContentText>
          <TextField
            className={classes.input}
            autoFocus
            margin="dense"
            id="componentAttributes"
            label="title"
            type="text"
            name="component"
            fullWidth
            value={component}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ModalCustomize