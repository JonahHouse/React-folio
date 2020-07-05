import React, { useContext } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ElementContext from '../../utils/ElementContext'
import ElementAPI from '../../utils/ElementAPI'
import confirmAlert from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

const useStyles = makeStyles(theme => ({
  modifyButtons: {
    marginTop: theme.spacing(4)
  }
}))

const ModifyElement = (props) => {
  const classes = useStyles()

  const { elements, element, attributes, handleDeleteElement, handleUpdateElement } = useContext(
    ElementContext
  )
  const {
    updateElement,
    deleteElement,
  } = ElementAPI;



  return (
    <div className={classes.modifyButtons}  >
      <Grid container spacing={2} justify="center">
        <Grid item>
          <DeleteIcon
            onClick={() => props.handleDeleteElement(props.elementId)}
          >
          </DeleteIcon>
        </Grid>
        <Grid item>
          <EditIcon
            onClick={() => props.handleUpdateElement(props.elementId)}
          >
          </EditIcon>
        </Grid>
      </Grid>
    </div>
  )
}

export default ModifyElement
