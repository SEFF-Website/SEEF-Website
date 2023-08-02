import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';
import TimeAgo from 'timeago-react';
const HeroSectionItem = ({item}) => {
  
  return (
    // hero section itme
    <>
    {   
        item.articles.length > 0 && (
          <>
          {/* show 3 articles from first catrgory */}
          {item.articles.slice(0, 3).map((articl, i)=>(
           
             <div className='--home-hero-section-card' key={i}>
              <Link to={`/catrgory/${item.name}/${articl.id}`} className='--home-hero-section-link'>
                  <div className='catrgort-name'>
                    <span className='--home-hero-section-card-catrgort-name'>{item.name}</span>
                    <span className='--home-hero-section-articl-time d-block d-lg-none text-lowercase'>
                    <FontAwesomeIcon icon={faClock} className='me-2 '/>
                    <TimeAgo datetime={articl.creat_at} locale='eg_EN'/>
                    </span>
                </div>
                <div className='--home-hero-section-articl-title-time '>
                    <h2 className='--home-hero-section-articl-title'>{articl.title}</h2>
                    <span className='--home-hero-section-articl-time d-none d-lg-block'>
                    <FontAwesomeIcon icon={faClock} className='me-2 '/>
                    <TimeAgo datetime={articl.creat_at} locale='eg_EN'/>
                    </span>
                </div>
                <div>
                    <p className='--hero-section-articl-desc'>{articl.desc}</p>
                </div>
              </Link>
            </div>
            ))}
          </>
        )
      }
      {/* show first 3 articles from first catrgory */}
    </>
// hero section item
  )
}

export default HeroSectionItem