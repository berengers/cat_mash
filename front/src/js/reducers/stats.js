import * as type from '../actions/const'

export function totalRates(state=0, action){
  switch (action.type) {
    case type.RECEIVE_TOTAL_RATES:
      return action.payload.totalRates.total
    default:
      return state
  }
}

export function statsCats(state=[], action){
  switch (action.type) {
    case type.STATS:
      return []
    case type.RECEIVE_CATS:
      return [ ...state, ...action.payload.res.cats ]
    default:
      return state
  }
}

const initialStatsPage = { pageNumber: 0, totalCats: 0 }

export function statsPage(state=initialStatsPage, action){
  switch (action.type) {
    case type.STATS:
      return initialStatsPage
    case type.NEXT_CATS_PAGE:
      return { ...state, pageNumber: state.pageNumber + 1 }
    case type.RECEIVE_CATS:
      return { ...state, totalCats: action.payload.res.total}
    default:
      return state
  }
}
