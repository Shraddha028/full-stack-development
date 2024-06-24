import React from 'react'
import PropTypes from 'prop-types'

const TempDisplay = ({temp}) => {
  return (
    <div>
    <h1>Display Temp</h1>
    <h1>{temp}</h1>
    </div>
  )
}


export default TempDisplay