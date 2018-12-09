import 'whatwg-fetch'

import * as type from './const'

export function fetchTotalRates(){
  return (dispatch) => {
    return fetch(
      '/api/stats/rates',
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
