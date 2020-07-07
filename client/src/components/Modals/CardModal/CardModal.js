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

const CardModal = () => {
  const classes = makeStyles();

  const [open, setOpen] = React.useState(false);

  const handleCardClickOpen = () => {
    setOpen(true);
  };

  const handleCardModalClose = () => {
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
      <Button variant="outlined" color="primary" onClick={handleCardClickOpen}>
        Card
      </Button>
      <Dialog
        open={open}
        onClose={handleCardModalClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Card</DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleAddElement}
          >
            <DialogContentText>Title</DialogContentText>
            <TextField
              className={classes.input}
              autoFocus
              margin="dense"
              id="element"
              label="Card Title"
              type="text"
              fullWidth
              name="cardTitle"
              value={attributes.cardTitle}
              onChange={(event) => handleInputChange(event, "card")}
            />
            <DialogContentText>Body</DialogContentText>
            <TextField
              className={classes.input}
              autoFocus
              margin="dense"
              id="element"
              label="Card Body"
              type="text"
              fullWidth
              name="cardBody"
              value={attributes.cardBody}
              onChange={(event) => handleInputChange(event, "card")}
            />
            <DialogContentText>Button Text</DialogContentText>
            <TextField
              className={classes.input}
              autoFocus
              margin="dense"
              id="element"
              label="Card Button Text"
              type="text"
              fullWidth
              name="cardButtonText"
              value={attributes.cardButtonText}
              onChange={(event) => handleInputChange(event, "card")}
            />
            <DialogContentText>Button Link</DialogContentText>
            <TextField
              className={classes.input}
              autoFocus
              margin="dense"
              id="element"
              label="Card Button Link"
              type="text"
              fullWidth
              name="cardButtonLink"
              value={attributes.cardButtonLink}
              onChange={(event) => handleInputChange(event, "card")}
            />
            <DialogContentText>Image</DialogContentText>
            <TextField
              className={classes.input}
              autoFocus
              margin="dense"
              id="element"
              label="Card Image"
              type="text"
              fullWidth
              name="cardImage"
              value={attributes.cardImage}
              onChange={(event) => handleInputChange(event, "card")}
            />
          </form>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCardModalClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={(event) => {
              handleAddElement(event, "card"); handleCardModalClose();
            }}
            color="primary"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CardModal
