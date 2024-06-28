import React from 'react'

const Banner = () => {
  return (
    <div
     className='h-[20vh] md:h-[75vh] bg-cover bg-center flex item-end'
     style={
        {
            backgroundImage:'url(https://scx1.b-cdn.net/csz/news/800/2017/theoreticala.jpg)'
        }
      }
       > 
        <div className='text-white w-full text-center text-2xl'
        >
        Banner
        </div>
    </div>
  )
}

export default Banner