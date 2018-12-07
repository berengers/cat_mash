import React from 'react'
import { connect } from 'react-redux'

import * as type from '../actions/const'
import { fetchRateCat } from '../actions/cat'
import logo from '../../medias/cat-mash-logo.png'


const VsCats = ({ dispatch, vsCats }) => {
  return (
    <React.Fragment>
      <div className="container-fluid p-0">
        <div className="col-12 position-fixed" style={{ zIndex: 10 }}>
          <img src={logo} className="d-block mx-auto" width="200px"/>
        </div>
        <div className="row no-gutters" style={{minHeight: "100vh"}}>
            {
              vsCats.map((cat, index) => (
                <div key={cat.id} className={"col-md-6 d-flex py-4 " + (index === 0?"bg-light":"bg-white")}>
                  <img
                  src={cat.url}
                  onClick={() => { dispatch(fetchRateCat(cat.id)) }}
                  className="btn btn-light border p-2 img-fluid align-self-center justify-content-center mx-auto rounded"
                  style={{ maxWidth: "60%", zIndex: 50 }}
                  />
                </div>
              ))
            }
        </div>
      </div>
      <div className="col-12 position-fixed" style={{ bottom: 0 }}>
        <div
          onClick={() => { dispatch({ type: type.HOME }) }}
          className="btn btn-light d-block rounded-top shadow border mx-auto"
          style={{ width: "300px" }}>
          <p className="m-0 text-dark">
            Retour aux votes
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = ({ vsCats }) => ({ vsCats })

export default connect(mapStateToProps)(VsCats)
