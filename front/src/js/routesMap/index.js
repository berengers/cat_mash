import { fetchVsCats, fetchCats } from '../actions/cat'

const routesMap = {
  HOME: {
    path: "/",
    thunk: (dispatch) => dispatch(fetchVsCats())
  },
  STATS: {
    path: "/stats",
    thunk: (dispatch) => dispatch(fetchCats())
  }
}

export default routesMap
