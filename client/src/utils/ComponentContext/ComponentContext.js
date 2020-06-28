import { createContext } from 'react'

const ComponentContext = createContext({
  component: '',
  components: [],
  handleInputChange: () => { },
  handleAddComponent: () => { },
  handleUpdateComponent: () => { },
  handleDeleteComponent: () => { }
})

export default ItemContext