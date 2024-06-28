import React from 'react'
import PropTypes from 'prop-types'

const TempInput = ({temp,fn}) => {
  return (
    <div>
        <label>Enter Temp</label>
        <input input="text" value={temp} onChange={e => fn(e.target.value) }></input>
    </div>
  )
}


export default TempInput
