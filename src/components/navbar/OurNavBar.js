import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/seff_logo_transparent.png'
import { Link } from 'react-router-dom'
import './ourNavBar.css'
import CatrgoryItem from './CatrgoryItem'



const OurNavBar = () => {
    const [data, setData]= useState([])
    useEffect(()=>{
        fetch("http://localhost:8000/category")
        .then(res => res.json())
        .then(result => setData(result))
        .catch(console.log);
    },[])

  return (
    <div className='--home-navbar'>
        {/* top header */}
        <nav className="navbar --home-top-header d-none d-md-block">
            <div className="container">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item --home-navbar-box-link">
                    <Link to="/login" className='--home-navbar-link'>login</Link>
                    </li>
                </ul>
            </div>
        </nav>
        {/* top header */}
        {/* links */}
        <nav className="navbar navbar-expand-lg --home-navbar-links">
            <div className="container">
            <Link className="navbar-brand" to="/">
            <img src={logo} alt="" width={132} height={132} class="d-inline-block align-text-top" />
            </Link>
                <button className="navbar-toggler --home-navbar-links-navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon --home-navbar-links-icon"></span>
                </button>
                <div className="collapse navbar-collapse --home-navbar-links-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item --home-navbar-box-links">
                    <Link className="nav-link text-white " aria-current="page" to="/">Home</Link>
                    </li>
                    {data.map((item, i) =>(
                       <CatrgoryItem key={i} item={item}/>
                    ))}
                </ul>
                  <Link className="btn --home-nav-btn-contact text-white" to="/contactUs">contact us</Link>
                </div>
            </div>
        </nav>
        {/* links */}
    </div>
  )
}

export default OurNavBar