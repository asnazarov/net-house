import axios from "axios";


export const fetchBurgers = (pageNum) => (dispatch) => {
  axios.get(`https://rickandmortyapi.com/api/character?page=${pageNum}`)
    .then(({data}) => {
      dispatch(setCharacters(data.results))
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      dispatch(setFetching(false))
    })
}

export const setFetching = payload => ({
  type: 'SET_FETCHING',
  payload
})

export const setLoaded = payload => ({
  type: 'SET_LOADED',
  payload,
})
export const setCharacters = (items) => ({
  type: 'SET_CHARACTERS',
  payload: items,
})