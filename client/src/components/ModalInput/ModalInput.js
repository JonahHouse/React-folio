import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles'
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import ElementContext from '../../utils/ElementContext'

const ModalInput = () => {


  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  }

  const CloseModal = () => {
    style.display = "none"
  }

  const {
    element,
    handleInputChange,
    handleAddElement
  } = useContext(ElementContext)




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
            id="element"
            label="Element"
            type="text"
            name="element"
            fullWidth
            value={element}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button
            className={CloseModal}
            onClick={handleAddElement}
            color="primary">
            Add Item
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ModalInput
