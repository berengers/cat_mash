import React from 'react'
import { connect } from 'react-redux'

import VsCats from './vsCats'
import Stats from './stats'

const components = {
  'HOME':   <VsCats />,
  'STATS':  <Stats />
}

const App = ({ page }) => {
  return (
    <div className="bg-light">
      {
        components[page]
      }
    </div>
  )
}

const mapStateToProps = ({ page }) => ({ page })

export default connect(mapStateToProps)(App)
