import * as type from '../actions/const'


export function vsCats(state=[], action){
  switch (action.type) {
    case type.RECEIVE_VS_CATS:
      return action.payload.cats
    default:
      return state
  }
}
