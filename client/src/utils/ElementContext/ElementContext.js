import { createContext } from 'react'

const ElementContext = createContext({
  element: '',
  elements: [],
  handleInputChange: () => { },
  handleAddElement: () => { },
  handleUpdateElement: () => { },
  handleDeleteElement: () => { }
})

export default ElementContext

