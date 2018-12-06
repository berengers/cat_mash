import React from 'react'

const imgClass = "border p-2 img-fluid align-self-center justify-content-center mx-auto rounded"

const imgStyle= {
  maxWidth: "60%",
  maxHeight: "100%"
}

const VsCats = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row no-gutters" style={{minHeight: "100vh"}}>
        <div className="col-sm-6 bg-light d-flex">
          <img src="http://24.media.tumblr.com/tumblr_m29a9d62C81r2rj8po1_500.jpg" className={imgClass + " bg-white"} style={imgStyle} />
        </div>
        <div className="col-sm-6 d-flex">
          <img src="http://25.media.tumblr.com/tumblr_m4pwa9EXE41r6jd7fo1_500.jpg" className={imgClass + " bg-light"} style={imgStyle}/>
        </div>
      </div>
    </div>
  )
}

export default VsCats
