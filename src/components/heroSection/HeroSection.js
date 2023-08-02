import React, { useEffect, useState } from 'react'
import "./heroSection.css"
import HeroSectionItem from './HeroSectionItem'
const HeroSection = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
      fetch("http://localhost:8000/category")
      .then(res => res.json())
      .then(result => setData(result))
      .catch(console.log);
  }, [])
  return (
    <div className='--home-hero-section text-white'>
        <div className='container --home-padding-100'>
          <div className='row'>
            <div className='--home-hero-section-title'>
              <div className='col'>
                <div className='--home-hero-content-title'>
                  <h1>SOFTWARE ENGINEERING <br/>FOR FUTURE </h1>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='--home-hero-featured-news'>
              <div className='--home-hero-content-subtitle'>
                <h2 className='--home-hero-content-subtitle-text'>FEATURED NEWS </h2>
              </div>
              <div className='--home-hero-section-cards'>
                {data.slice(0, 1).map((item, i)=> <HeroSectionItem  item={item} key={i}/>)}
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default HeroSection