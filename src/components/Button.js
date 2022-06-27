import React from 'react'

import Icon from '@mdi/react'
const Button = ({icon, title}) => {
  return (
    <div className='flex items-center justify-between text-purple-700'>
        <Icon path={icon} size={1}/>
        <button>{title || "Button"}</button>
    </div>
  )
}

export default Button