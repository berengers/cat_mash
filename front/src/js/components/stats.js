import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import * as type from '../actions/const'

const imgFill = (url) => ({
  height: "150px",
  width: "150px",
  backgroundImage: `url("${url}")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "50% 50%"
})

const progressSize = (max, rate) => {
  return Math.floor((100/max) * rate)
}

const progresStyle = {
  height: "50px",
  position: "relative",
  top: "50%",
  transform: "translateY(-50%)"
}


const Stats = ({ dispatch, cats }) => {
  const maxRate = cats.length>0?cats[0].rate:0

  return (
    <React.Fragment>
      <div className="p-4 col-sm-10 mx-auto">
        {
          cats.map(cat => (
          <div key={cat.id} className="row mb-3" style={{ height: "150px" }}>
            <div className="col-6 col-lg-3">
              <div className="bg-light mx-auto rounded-circle" style={imgFill(cat.url)}></div>
            </div>
            <div className="col-6 col-lg-8">
              <CSSTransition in={true} appear={true} timeout={2000} classNames="progress">
                <div className="progress" style={progresStyle}>
                  <div
                  className="progress-bar bg-info text-left font-weight-bold"
                  style={{ width: progressSize(maxRate,cat.rate)+"%" }}>
                    <span style={{ position: "relative", left: "12px" }}>{cat.rate} votes</span>
                  </div>
                </div>
              </CSSTransition>
            </div>
          </div>
          ))
        }
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

const mapStateToProps = ({ cats }) => ({ cats })

export default connect(mapStateToProps)(Stats)
