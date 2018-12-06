import { fetchVsCats } from '../actions/cat'

const routesMap = {
  HOME: {
    path: "/",
    thunk: (dispatch) => dispatch(fetchVsCats())
  }
}

export default routesMap
