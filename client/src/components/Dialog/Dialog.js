import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export default function FormDialog() {
  const [open, setOpen] = React.useState(false)

  const handleModalOpen = () => {
    setOpen(true)
  }

  const handleModalClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleModalOpen}>
        Open edit modal
      </Button>
      <Dialog open={open} onClose={handleModalClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add/Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter in text here and it will appear on your edit page...
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="text"
            label="text"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
