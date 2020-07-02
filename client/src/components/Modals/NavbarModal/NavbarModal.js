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

  const handleClose = () => {
    setOpen(false);
  };

  const { handleInputChange, handleAddElement } = useContext(
    ElementContext
  );

  const {
    getElements,
    createElement,
    updateElement,
    deleteElement,
  } = ElementAPI;

  const [elementState, setElementState] = useState({
    type: "",
    attributes: {},
  });

  elementState.handleInputChange = (event) => {
    setElementState({
      ...elementState.attributes,
      [event.target.name]: event.target.value,
    });
  };

  elementState.handleAddElement = (event) => {
    event.preventDefault();
    setOpen(false);
    let elements = JSON.parse(JSON.stringify(elementState.elements));
    createElement({
      type: elementState.type,
      siteTitle: elementState.attribute.siteTitle,
    }).then(({ data }) => {
      elements.push(data);
      setElementState({ ...elementState, elements, element: "" });
    })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Navbar Modal
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
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
              name={elementState.attributes.siteTitle}
              value={elementState.attributes.siteTitle}
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
              name={elementState.attributes.siteLink1}
              value={elementState.attributes.siteLink1}

              onChange={(event) => handleInputChange(event, "navbar")}
            />
          </form>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={(event) => handleAddElement(event, "navbar")}
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
