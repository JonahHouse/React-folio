import { createContext } from 'react'

const ElementContext = createContext({
  element: '',
  elements: [],
  attributes: {},
  handleInputChange: () => { },
  handleAddElement: () => { },
  handleUpdateElement: () => { },
  handleDeleteElement: () => { }
})

export default ElementContext;
