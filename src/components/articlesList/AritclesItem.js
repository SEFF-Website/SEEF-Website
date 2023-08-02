import { faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TimeAgo from 'timeago-react';
import React from 'react'
import { Link } from 'react-router-dom';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './aricleItem.css'

const AritclesItem = ({item}) => {
  return (
    // article item card
    <div className="card mb-3 --home-articles-item-cred" >
      {item.articles.length > 0 && (
        <>
         {/* show 1 article from all catrgory */}
        {item.articles.slice(0, 1).map((a, i)=> (
          <div className="row g-4 --home-articles-item-row" key={i}>
          <div className="col-lg-4 col-md-12 --home-articles-item-col p-0">
            <div className='--home-articles-item-image-box'>
            <img src={a.image} className="img-fluid rounded-start --home-articles-item-image" alt="..."/>
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="card-body --home-articles-item-cred-body">
              <div className='d-flex justify-content-between align-items-center'>
              <h6 class="card-subtitle mb-2 --home-articles-item-catrgory-name">{item.name}</h6>
              <p className="card-text --home-articles-item-aritcle-createAt d-block d-lg-none text-lowercase">
                <small class="--home-articles-item-aritcle-aicon">
                <FontAwesomeIcon icon={faClock} className='me-2 '/>
                <TimeAgo datetime={a.creat_at} locale='eg_EN'/>
                </small>
              </p>
              </div>
              <div className='--home-articles-item-aritcle-title-createAt mt-4'>
              <h5 className="card-title --home-articles-item-aritcle-title">{a.title}</h5>
              <p className="card-text --home-articles-item-aritcle-createAt d-none d-lg-block">
                <small class="--home-articles-item-aritcle-aicon">
                <FontAwesomeIcon icon={faClock} className='me-2 '/>
                <TimeAgo datetime={a.creat_at} locale='eg_EN'/>
                </small>
              </p>
              </div>
              <div className='--home-articles-item-aritcle-desc-link mt-4'>
              <p className="card-text --home-articles-item-aritcle-desc">{a.desc}</p>
              <Link to="/" className='--home-articles-item-aritcle-link d-none d-lg-block'><FontAwesomeIcon icon={faChevronRight} /></Link>
              </div>
            </div>
          </div>
        </div>
         ))}
         {/* show 1 article from all catrgory */}
        </>
      )}
  
</div>
    // article item card
  )
}

export default AritclesItem