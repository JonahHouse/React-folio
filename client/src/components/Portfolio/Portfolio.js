import React, { useContext } from 'react'
import ElementContext from '../../utils/ElementContext'
import Paper from '@material-ui/core/Paper'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'

const Portfolio = () => {

  const {
    elements,
    handleUpdateElement,
    handleDeleteElement
  } = useContext(ElementContext)

  return (
    <>
      <Paper>
        {
          elements.map(element => (
            < TextareaAutosize
              rowsMax={4}
              aria-label="maximum height"
              key={element.id}
              value={element}
              handleUpdateElement={handleUpdateElement}
              handleDeleteElement={handleDeleteElement}
            />
          ))

        }

      </Paper>
    </>
  )
}

export default Portfolio
