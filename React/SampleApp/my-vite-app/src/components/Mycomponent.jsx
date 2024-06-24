import React from 'react'

// const Mycomponent = () => {
//   return (
//     <div>Mycomponent</div>
//   )
// }

function Mycomponent(props) {
    // write the logic here to receive the props
    console.log(props)
    const name = 'Jasbir'
    const age1 = props.age
    const occupation1 = props.occupation
  
    return <h1>Hello {name} Thanks Babel :) is {age1} old and works as {occupation1}</h1>;
  }

export default Mycomponent