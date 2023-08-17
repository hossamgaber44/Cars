import React from 'react'
import './FeaturedCars.css'
import { Link } from "react-router-dom";
import db from '../../../data/db.json'
const FeaturedCars = () => {
    const {products} = db ;
    const Cars =products.filter((i) =>i.typeCar ==='FeaturedCars');
  return (
    <div className='FeaturedCars'>
        <div className='FeaturedCars-content'>
            <div className='FeaturedCars-content'>
                {Cars.map(i=>(
                    <div key={i.id} className='Featured-cars'>
                        <div className='FeaturedCars-img'>
                            <img src={i.img} />   
                        </div>
                        <div className='FeaturedCars-info'>
                             <div className='FeaturedCars-title'>
                                <h2>{i.name}</h2>
                                <span className='FeaturedCars-model'>{i.model}</span>
                            </div>
                            <div className='FeaturedCars-body'>
                                <div className='data'>
                                    <i className="fa-solid fa-user-group"></i>
                                    <h3>{i.numberOfPeople }{'   '}<span>People</span></h3>
                                </div>
                                <div className='data'>
                                       <i className="fa-solid fa-bolt"></i>
                                       <h3>{i.type1}</h3>
                                </div>
                                <div className='data'>
                                       <i className="fa-solid fa-gauge-high"></i>
                                       <h3>{i.speed}</h3>
                                </div>
                                <div className='data'>
                                       <i className="fa-sharp fa-solid fa-microchip"></i>
                                       <h3>{i.type1}</h3>
                                </div>
                            </div>
                            <div className='FeaturedCars-price'>
                                <div className='total-price'>
                                    <span>
                                       ${i.price}
                                    </span>
                                     /
                                    <span>
                                        {i.duration}
                                    </span>
                                </div>
                                <Link to='/' className='FeaturedCars-btn'>Rent now</Link>
                            </div>
                        </div>
                    </div> 
                ))}
            </div>
        </div>
    </div>
  )
}

export default FeaturedCars