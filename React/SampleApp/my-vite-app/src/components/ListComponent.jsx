

import React from 'react'

const ListComponent = (props) => {
  
  const listData = props.list
  console.log(listData)
  return (
    <div>
        <ul>
            {
                listData.map((item,index) => {
                    return <li key={index}>{item}</li>
                })
            }

        </ul>
    </div>
  )
}

export default ListComponent