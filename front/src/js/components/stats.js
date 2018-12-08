import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import * as type from '../actions/const'
import { fetchCats } from '../actions/cat'
import logo from '../../medias/cat-mash-logo.png'

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


const Stats = ({ dispatch, statsCats, statsPage }) => {
  const maxRate = statsCats.length>0?statsCats[0].rate:0

  return (
    <React.Fragment>
      <div className="p-4 col-sm-10 col-lg-8 col-xl-6 mx-auto">
        <img src={logo} className="d-block mx-auto" width="200px"/>
        {
          statsCats.map(cat => (
          <div key={cat.id} className="d-flex mb-3" style={{ height: "150px" }}>
            <div className="">
              <div className="bg-light rounded-circle" style={imgFill(cat.url)}></div>
            </div>
            <div className="flex-grow-1 pl-4">
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
        {statsCats.length < statsPage.totalCats &&
          <div className="col-12">
            <div
            className="btn btn-lg btn-dark d-block col-6 py-1 px-5 mb-5 mt-4 mx-auto"
            onClick={ () => {
              dispatch(fetchCats(statsPage.pageNumber + 1)),
              dispatch({ type: type.NEXT_CATS_PAGE })
            }}
            >
              More ...
            </div>
          </div>
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

const mapStateToProps = ({ statsCats, statsPage }) => ({ statsCats, statsPage })

export default connect(mapStateToProps)(Stats)
