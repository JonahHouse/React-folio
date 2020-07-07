import React, { useState, useContext, useRef } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ElementContext from "../../utils/ElementContext";
import ElementAPI from "../../utils/ElementAPI";
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  form: {

  },
  input: {

  }
}))

const TextBoxModal = () => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false);

  const handleTextboxClickOpen = () => {
    setOpen(true);
  };

  const handleTextboxModalClose = () => {
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

  const [elementState, setElementState] = useState({
    element: "",
    elements: [],
  });

  elementState.handleInputChange = (event) => {
    setElementState({
      ...elementState,
      [event.target.name]: event.target.value,
    });
  };

  elementState.handleAddElement = (event) => {
    event.preventDefault();
    setOpen(false);
    let elements = JSON.parse(JSON.stringify(elementState.elements));
    createElement({
      text: elementState.element,
    }).then(({ data }) => {
      elements.push(data);
      setElementState({ ...elementState, elements, element: "" });
    })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleTextboxClickOpen}>
        Text Box
      </Button>
      <Dialog
        open={open}
        onClose={handleTextboxModalClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Enter Your Text Here</DialogTitle>
        <DialogContent>
          <DialogContentText>Text Message </DialogContentText>

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
              value={attributes.text}
              fullWidth
              name="element"
              onChange={(event) => handleInputChange(event, "textbox")}
            />
          </form>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleTextboxModalClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={(event) => { handleAddElement(event, "textbox"); handleTextboxModalClose() }}
            color="primary"
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div >
  );
};

export default TextBoxModal;
