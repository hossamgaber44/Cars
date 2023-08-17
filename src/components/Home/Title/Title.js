import React from 'react'
import './Title.css'
const Title = ({header ,title ,info ,id}) => {
  return (
    <div className='title' id={id}>
        <h4 className='title-header'>{header}</h4>
        <h1>{title}</h1>
        <h5 className='title-info'>{info}</h5>
    </div>
  )
}

export default Title