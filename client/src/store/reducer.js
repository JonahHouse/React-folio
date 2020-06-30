import actions from './action-types'

function reducer(state, action) {
  switch (action.type) {
    case actions.ADD_SELECTED_ELEMENT:
      return { ...state, selectedElements: [...state.selectedElements, action.payload] }
    case actions.UPDATE_SELECTED_ELEMENT:
      return { ...state, selectedElements: action.payload };
    case actions.REMOVE_SELECTED_ELEMENT:
      return {
        ...state,
        selectedElements: state.selectedElements.filter(selectedElement => selectedElement.id !== action.id)
      };
    default:
      return state;
  }
};

export default reducer;
