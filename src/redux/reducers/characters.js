const initialState = {
  items: [],
  isLoaded: false,
  fetching: true,
}

const characters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHARACTERS':
      return {
        ...state,
        items: [...state.items, ...action.payload],
        isLoaded: true,
      };
    case 'SET_LOADED' :
      return {
        ...state,
        isLoaded: action.payload,
      };
    case 'SET_FETCHING' :
      return {
        ...state,
        fetching: action.payload
      }
    default:
      return state
  }

}
export default characters;