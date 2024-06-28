import React from 'react'


function Mycomponent(props) {
    // write the logic here to receive the props
    const name = 'Jasbir'
    const age1 = props.age
    const occupation1 = props.occupation
  
    return <h1>Hello {name} Thanks Babel :) is {age1} old and works as {occupation1}</h1>;
  }

export default Mycomponent