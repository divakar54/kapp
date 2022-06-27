import React from 'react'
import first from '../assets/first.jpg'
import second from '../assets/second.jpg'
import third from '../assets/third.jpg'

const ImageContainer = () => {
  return (
    <div className='parent w-2/4 h-20'>
        <img className='item-a object-cover' src={first} alt="first"/>
        <img className='object-cover' src={second} alt='second'/>
        <img className='object-cover' src={third} alt='third'/>
    </div>
  )
}

export default ImageContainer