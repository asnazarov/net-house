const initialState = {
  items: {},
}

const card = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHARACTER_CARD': {

      return {
        ...state,
        items: action.payload,
      }
    }
    default:
      return state
  }

}
export default card;