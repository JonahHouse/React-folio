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

const HeroModal = () => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false);

  const handleHeroClickOpen = () => {
    setOpen(true);
  };

  const handleHeroModalClose = () => {
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
      <Button variant="outlined" color="primary" onClick={handleHeroClickOpen}>
        Hero
      </Button>
      <Dialog
        open={open}
        onClose={handleHeroModalClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add A Hero</DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleAddElement}
          >
            <TextField
              className={classes.input}
              autoFocus
              margin="dense"
              id="element"
              label="Hero Title"
              type="text"
              fullWidth
              name="heroTitle"
              value={attributes.heroTitle}
              onChange={(event) => handleInputChange(event, "hero")}
            />

            <TextField
              className={classes.input}
              autoFocus
              margin="dense"
              id="element"
              label="Hero Paragraph"
              type="text"
              fullWidth
              name="heroParagraph"
              value={attributes.heroParagraph}
              onChange={(event) => handleInputChange(event, "hero")}
            />

            <TextField
              className={classes.input}
              autoFocus
              margin="dense"
              id="element"
              label="Hero Button 1"
              type="text"
              fullWidth
              name="heroBtn1"
              value={attributes.heroBtn1}
              onChange={(event) => handleInputChange(event, "hero")}
            />

            <TextField
              className={classes.input}
              autoFocus
              margin="dense"
              id="element"
              label="Hero Button 2"
              type="text"
              fullWidth
              name="heroBtn2"
              value={attributes.heroBtn2}
              onChange={(event) => handleInputChange(event, "hero")}
            />
            <TextField
              className={classes.input}
              autoFocus
              margin="dense"
              id="element"
              label="Background Image"
              type="text"
              fullWidth
              name="backgroundImage"
              value={attributes.backgroundImage}
              onChange={(event) => handleInputChange(event, "hero")}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleHeroModalClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={(event) => {
              handleAddElement(event, "hero"); handleHeroModalClose();
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

export default HeroModal
