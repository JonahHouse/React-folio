import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import DoneIcon from '@material-ui/icons/Done'

const useStyles = makeStyles(theme => ({
  done: {
    backgroundColor: 'green'
  },
  notDone: {
    backgroundColor: 'gray'
  }
}))

const Component = props => {
  const classes = useStyles()
  return (
    <ListItem>
      <ListItemAvatar
        onClick={() => props.handleUpdateComponent(props.component._id, props.component.isDone)} >
        <Avatar className={props.component.isDone ? classes.done : classes.notDone} >
          <DoneIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={props.component.text} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => props.handleDeleteItem(props.component._id)} >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default Component