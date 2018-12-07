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

export function fetchCats(page){
  return (dispatch) => {
    dispatch({ type: type.NEXT_CATS_PAGE })
    return fetch(
      'http://localhost:5000/api/cats/' + page,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    .then((resp) => { return resp.json() })
    .then((cats) => {
      console.log ("--- RECEIVES CATS ---")
      console.log ("cats ---> ", cats)
      dispatch({ type: type.RECEIVE_CATS, payload: { cats } })
    })
  }
}
