import React from 'react'
import { connect } from 'react-redux'

import VsCats from './vsCats'
import Stats from './stats'
import '../../css/transitions.css'
import '../../css/app.css'

const components = {
  'HOME':   <VsCats />,
  'STATS':  <Stats />
}

const App = ({ page }) => {
  return (
    <div>
      {
        components[page]
      }
    </div>
  )
}

const mapStateToProps = ({ page }) => ({ page })

export default connect(mapStateToProps)(App)
