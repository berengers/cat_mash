import React from 'react'
import { connect } from 'react-redux'

import { fetchRateCat } from '../actions/cat'

const imgClass = "btn btn-light border p-2 img-fluid align-self-center justify-content-center mx-auto rounded"

const imgStyle= {
  maxWidth: "60%",
  maxHeight: "50%"
}

const VsCats = ({ dispatch, vsCats }) => {

  return (
    <div className="container-fluid p-0">
      <div className="row no-gutters" style={{minHeight: "100vh"}}>
          {
            vsCats.map((cat, index) => (
              <div key={cat.id} className={"col-md-6 d-flex " + (index === 0?"bg-light":"bg-white")}>
                <img
                src={cat.url}
                onClick={() => { dispatch(fetchRateCat(cat.id)) }}
                className={imgClass}
                style={imgStyle}
                />
              </div>
            ))
          }
      </div>
    </div>
  )
}

const mapStateToProps = ({ vsCats }) => ({ vsCats })

export default connect(mapStateToProps)(VsCats)
