import * as type from '../actions/const'

export function totalRates(state=0, action){
  switch (action.type) {
    case type.RECEIVE_TOTAL_RATES:
      return action.payload.totalRates.total
    default:
      return state
  }
}
