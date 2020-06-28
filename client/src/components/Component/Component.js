import React, {} from 'react'
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
  selected: {
    backgroundColor: 'green'
  },
  notSelected: {
    backgroundColor: 'gray'
  }
}))

const Component = props => {
  const classes = useStyles()
  return (
      <ListItem button
        onClick={() => props.handleSelectComponent(props.component._id, props.component.isSelected)} >
        <ListItemText primary={props.component.text} />
      </ListItem>  
  )
}

export default Component