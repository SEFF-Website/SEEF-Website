import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'

const CatrgoryItem = ({item}) => {
  const [isHovering, setIsHovering] = useState(false);
  const { pathname } = useLocation()
  const splitLocation = pathname.split("/");
  

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <li class= "nav-item --home-navbar-box-links " onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
    <Link to={`/catrgory/${item.name}`} className= {`nav-link ${splitLocation === item.name ? "--home-navbar-active" : ""} text-white`} id={item.id} >
      {item.name}
      {item.subcategory.length > 0 && (<FontAwesomeIcon icon={faChevronDown} className='ms-2 --home-navbar-box-links-cheveron-icon'/>)}
      </Link>

    {(item.subcategory.length > 0 && isHovering) && (
      <ul className="nav flex-column  p-3 text-center --home-nav-menu">
      {item.subcategory.map((sub, i)=> (
        <li className='nav-item'><Link className="nav-link text-white text-start" to={`/catrgory/${sub.name}`} key={i}>{sub.name}</Link></li>
        ))}
  </ul> 
    )}
</li>
  )
}

export default CatrgoryItem