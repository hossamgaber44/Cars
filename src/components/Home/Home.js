import React from 'react'
import Banner from './Banner/Banner'
import Title from './Title/Title'
import TypesCars from './TypesCars/TypesCars'
import About from './About/About'
import Possibilities from './Possibilities/Possibilities'
import Blog from './Blog/Blog'
import CompaniesCars from './CompaniesCars/CompaniesCars.js'
import FeaturedCars from './FeaturedCars/FeaturedCars'
const Home = () => {
  return (
    <div>
        <Banner/>
        <div className='container'>
          <Title header='All Cars' id='cars' title='We have all types Cars' info='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero omnis sit alias ipsam oditearum.' />
          <TypesCars/>
          <About/>
          <Title header='What We Offer' id='parts' title='Our Car Is Always Excellent' info='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero omnis sit alias ipsam oditearum.' />
          <Possibilities/>
          <Title header='Blog & News' id='blog' title='Our Blog Content' info='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero omnis sit alias ipsam oditearum.' />
          <Blog/>
          <Title header='Companies Cars' id='#' title=' We have Many Types of Modern Cars' info='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero omnis sit alias ipsam oditearum.' />
          <CompaniesCars/>
          <Title header='Featured Cars' id='featured-Cars' title='We have Featured Cars' info='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero omnis sit alias ipsam oditearum.' />
          <FeaturedCars/>
        </div>
    </div>
  )
}

export default Home