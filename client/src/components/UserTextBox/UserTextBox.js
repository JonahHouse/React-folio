import React, { useContext } from 'react'
import ElementContext from '../../utils/ElementContext'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'


const useStyles = makeStyles(theme => ({
  form: {

  },
  input: {

  }
}))


const UserTextBox = () => {
  const classes = useStyles()

  const {
    elements,
    handleUpdateElement,
    handleDeleteElement
  } = useContext(ElementContext)

  return (
    <>
      <Paper className={classes.form}>
        {
          elements.map((element, key) => (
            <TextareaAutosize
              className={classes.input}
              rowsMax={4}
              aria-label="maximum height"
              key={key}
              value={element.text}
              handleUpdateElement={handleUpdateElement}
              handleDeleteElement={handleDeleteElement}
            />

          ))

        }

      </Paper>
    </>
  )
}

export default UserTextBox
