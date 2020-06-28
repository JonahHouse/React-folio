import { createContext } from 'react'

const ComponentContext = createContext({
  component: '',
  components: [],
 

  handleListItemClick: () => { },
  handleInputChange: () => { },
  handleAddComponent: () => { },
  handleUpdateComponent: () => { },
  handleDeleteComponent: () => { }
})

export default ItemContext