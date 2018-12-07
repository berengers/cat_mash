import { fetchVsCats, fetchCats } from '../actions/cat'
import { fetchTotalRates } from '../actions/stats'

const routesMap = {
  HOME: {
    path: "/",
    thunk: (dispatch) => {
      dispatch(fetchVsCats())
      dispatch(fetchTotalRates())
    }
  },
  STATS: {
    path: "/stats",
    thunk: (dispatch) => dispatch(fetchCats())
  }
}

export default routesMap
