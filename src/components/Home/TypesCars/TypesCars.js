import React from 'react'
import './TypesCars.css'
import db from '../../../data/db.json'
import {Link} from 'react-router-dom'
const {products} =db
const Cars =products.filter((i) =>i.typeCar ==='typesCars');
const TypesCars = () => {
  return (
    <div className='TypesCars'>
            <div className='Types-Cars-content'>
              {Cars.map((i)=>(
                    <div key={i.id} className='car'>
                       <div className='car-img'>
                           <img src={i.img}/>
                        </div>
                         <Link to='/' className='car-btn' >porche care</Link>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default TypesCars