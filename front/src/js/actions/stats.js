import * as type from './const'

export function fetchTotalRates(){
  return (dispatch) => {
    return fetch(
      'http://localhost:5000/api/stats/rates',
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    .then((resp) => { return resp.json() })
    .then((totalRates) => {
      console.log ("--- GET TOTAL RATES ---")
      dispatch({ type: type.RECEIVE_TOTAL_RATES, payload: { totalRates } })
    })
  }
}
