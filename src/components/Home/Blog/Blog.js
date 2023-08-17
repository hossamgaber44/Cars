import React from 'react'
import './Blog.css'
import db from '../../../data/db.json'
import { Link } from 'react-router-dom'
const Blog = () => {
    const {Blog}=db
  return (
    <div className='Blog'>
        {Blog.map(i=>(
            <div key={i.id} className='Blog-Content'>
                <div className='Blog-img'>
                    <img src={i.img}/>
                </div>
                <div className='Blog-info'>
                <h5>lorem 1223 </h5>
                <h3 className='Blog-title'>{i.title}</h3>
                <p>{i.info}</p>
                <Link to='/'>Read More</Link>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Blog