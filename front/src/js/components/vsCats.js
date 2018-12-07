import React from 'react'
import { connect } from 'react-redux'

import * as type from '../actions/const'
import { fetchRateCat } from '../actions/cat'
import logo from '../../medias/cat-mash-logo.png'

const logoStyle = {
  zIndex: 10,
  width: "200px"
}

const imgClass = "btn btn-light border p-2 img-fluid align-self-center justify-content-center mx-auto rounded"

const imgStyle= {
  maxWidth: "60%",
  zIndex: 50
}

const stateButton = {
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)",
  borderRadius: "0"
}

const VsCats = ({ dispatch, vsCats }) => {

  return (
    <div className="container-fluid p-0">
      <div className="col-12 position-fixed" style={{ zIndex: 10 }}>
        <img src={logo} className="d-block mx-auto" width="200px" style={{}}/>
      </div>
      <div className="row no-gutters" style={{minHeight: "100vh"}}>
          {
            vsCats.map((cat, index) => (
              <div key={cat.id} className={"col-md-6 d-flex py-4 " + (index === 0?"bg-light":"bg-white")}>
                <img
                src={cat.url}
                onClick={() => { dispatch(fetchRateCat(cat.id)) }}
                className={imgClass}
                style={imgStyle}
                />
              </div>
            ))
          }
          <div
            onClick={() => { dispatch({ type: type.STATS }) }}
            className="btn btn-light rounded-top shadow border position-fixed py-2 px-5"
            style={stateButton}>
            <p className="m-0 text-dark">
              Voir les plus beaux chats <br/>
              xxx xxx votes
            </p>
          </div>
      </div>

    </div>
  )
}

const mapStateToProps = ({ vsCats }) => ({ vsCats })

export default connect(mapStateToProps)(VsCats)
