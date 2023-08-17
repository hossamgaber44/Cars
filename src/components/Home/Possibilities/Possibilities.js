import React from 'react'
import './Possibilities.css'
import db from '../../../data/db.json'
import { Link } from 'react-router-dom'
const Possibilities = () => {
    const {Possibilities}=db
    console.log(Possibilities)
  return (
    <div className='Possibilities'>
        {Possibilities.map(i=>(
            <div key={i.id} className='Possibilities-cotent'>
                <div className='Possibilities-img'>
                    <img src={i.img} />
                </div>
                <div className='Possibilities-info'>
                    <h3 className='Possibilities-title'>{i.title}</h3>
                    <h2 className='Possibilities-price'><b>{i.price}$</b></h2>
                    <h4>lorem lorem</h4>
                    <div className='Possibilities-link'>
                        <Link to='/'>Bay Now</Link>
                        <Link to='/'>View details</Link>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Possibilities