import * as type from '../actions/const'


export function cats(state=[], action){
  switch (action.type) {
    case type.STATS:
      return []
    case type.RECEIVE_CATS:
      return [ ...state, ...action.payload.cats ]
    default:
      return state
  }
}

export function catsPage(state=1, action){
  switch (action.type) {
    case type.STATS:
      return 1
    case type.NEXT_CATS_PAGE:
      return state + 1
    default:
      return state
  }
}

export function vsCats(state=[], action){
  switch (action.type) {
    case type.RECEIVE_VS_CATS:
      return action.payload.cats
    default:
      return state
  }
}
