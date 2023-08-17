import React from 'react'
import './CompaniesCars.css'
import db from '../../../data/db.json'
const CompaniesCars = () => {
    const {CompaniesCars} = db
  return (
    <section className="companies-cars">
        <div className="cars-content">
            {CompaniesCars.map(i=>(
                <div key={i.id} className="companies-car">
                <div className="companies-car-img">
                    <img src={i.img}/>
                </div>
                <h3>{i.title}</h3>
               </div>
            ))}
        </div>
 </section>
  )
}

export default CompaniesCars