import React from 'react'
import Icon from '@mdi/react'

const LinkButton = ({icon, title}) => {
  return (
    <div className='flex p-1 bg-purple-700 text-white rounded-xl'>
        <button>{title || "Button"}</button>
        <Icon path={icon} size={1}/>
    </div>
  )
}

export default LinkButton