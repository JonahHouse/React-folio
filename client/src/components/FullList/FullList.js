import React, { useContext } from 'react'
import ComponentContext from '../../utils/ComponentContext'
import Component from '../Component'
import List from '@material-ui/core/List'
import Paper from '@material-ui/core/Paper'

const FullList = () => {

  const {
    components,
    handleUpdateComponent,
    handleDeleteComponent
  } = useContext(ComponentContext)

  return (
    <Paper>
      <List>
        {
          components.map(component => (
            <Item
              key={component._id}
              item={component}
              handleUpdateComponent={handleUpdateComponent}
              handleDeleteComponent={handleDeleteComponent} />
          ))
        }
      </List>
    </Paper>
  )
}

export default FullList 