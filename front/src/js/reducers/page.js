import * as type from '../actions/const'

export function page(state='Home', action){
  switch (action.type) {
    case type.HOME:
      return 'HOME'
    case type.STATS:
      return 'STATS'
    default:
      return state
  }
}
