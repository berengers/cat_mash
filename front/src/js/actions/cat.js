// !!!!!!!!! IMPORT POLYFILL FOR FETCH !!!!!!!!!!!!!!

import * as type from './const'

export function fetchVsCats(){
  return (dispatch) => {
    return fetch(
      'http://localhost:5000/api/cats/vs',
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    .then((resp) => { return resp.json() })
    .then((cats) => {
      console.log ("--- RECEIVE VS CATS ---")
      dispatch({ type: type.RECEIVE_VS_CATS, payload: { cats }})
    })
  }
}

export function fetchRateCat(id){
  return (dispatch) => {
    return fetch(
      'http://localhost:5000/api/cats/' + id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    .then((resp) => {
      console.log ("--- RATE CAT " + id + " ---")
      dispatch({ type: type.HOME })
    })
  }
}
