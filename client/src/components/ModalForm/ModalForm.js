import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ElementContext from "../../utils/ElementContext";
import ElementAPI from "../../utils/ElementAPI";

const ModalForm = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { element, handleInputChange, handleAddElement } = useContext(
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
    let elements = JSON.parse(JSON.stringify(elementState.elements));
    createElement({
      text: elementState.element,
    }).then(({ data }) => {
      elements.push(data);
      setElementState({ ...elementState, elements, element: "" });
    });
    handleClose().catch((err) => console.error(err));
  };

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
        <DialogTitle id="form-dialog-title">Enter Your Text Here</DialogTitle>
        <DialogContent>
          <DialogContentText>Text Message </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="element"
            label="element"
            type="text"
            fullWidth
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddElement} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalForm;
