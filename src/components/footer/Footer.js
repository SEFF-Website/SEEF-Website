import React, { useEffect, useState } from 'react'
import Logo from '../../assets/images/seff_logo_transparent.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './footer.css'
import { Link } from 'react-router-dom'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    const [links, setLinks] = useState([])
    useEffect(()=>{
        fetch("http://localhost:8000/category")
        .then(res => res.json())
        .then(result => setLinks(result))
        .catch(console.log);
    },[])
  return (
    <footer className='--home-footer-section pt-3'>
        <div className='container'>
            <div className='--home-footer-section-top '>
                <div className='d-flex justify-content-between align-items-end'>
                    <div className='--home-footer-section-top-left text-uppercase'>
                        <div>
                            <img src={Logo} width={132} height={132}/>
                            <p className='d-block d-lg-none --home-footer-section-top-left-text'>SOFTWARE ENGINEERING FOR FUTURE</p>
                        </div>
                        <ul class="nav --home-footer-section-top-left-ul d-none d-lg-flex">
                            <li class="nav-item --home-footer-section-top-left-li">
                                <Link class="nav-link text-white --home-footer-section-top-left-link"  to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white --home-footer-section-top-left-link" to="/">About</Link>
                            </li>
                            
                            {
                                links.slice(0, 3).map((item, i)=> (
                                    <li class="nav-item" key={i}>
                                        <Link class="nav-link text-white --home-footer-section-top-left-link" to={`/catrgory/${item.name}`}>{item.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <ul class="nav d-none d-lg-flex">
                        {
                                links.slice(3, -1).map((item, i)=> (
                                    <li class="nav-item" key={i}>
                                        <Link class="nav-link text-white --home-footer-section-top-left-link" to={`/catrgory/${item.name}`}>{item.name}</Link>
                                    </li>
                                ))
                            }
                              <li class="nav-item">
                                <Link class="nav-link text-white" to="/">contect us</Link>
                            </li>
                        </ul>

                        <ul className='list-unstyled d-block d-lg-none'>
                            <li> 
                                <Link className='d-flex text-white text-decoration-none' to="/">
                                <span className='me-3'>sefffuture@gmail.com</span>
                                </Link>
                            </li>
                            <li>
                            <Link className='d-flex text-white text-decoration-none' to="/">
                                <span className='d-flex flex-column me-3'>
                                    <span>+20 109 8481 288</span>
                                    <span>+20 155 5177 645</span>
                                </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='--home-footer-section-top-right'>
                        <ul className='list-unstyled d-none d-lg-block'>
                            <li> 
                                <Link className='d-flex text-white' to="/">
                                <span className='me-3'>sefffuture@gmail.com</span>
                                <span className='--home-footer-section-top-right-icon'><FontAwesomeIcon icon={faEnvelope} /></span>
                                </Link>
                            </li>
                            <li>
                            <Link className='d-flex text-white' to="/">
                                <span className='d-flex flex-column me-3'>
                                    <span>+20 109 8481 288</span>
                                    <span>+20 155 5177 645</span>
                                </span>
                                <span className='ms-auto --home-footer-section-top-right-icon'><FontAwesomeIcon icon={faPhoneVolume} /></span>
                                </Link>
                            </li>
                        </ul>
                        <div className='--home-footer-section-bottom-icons d-flex  d-lg-none text-white flex-column'>
                            <FontAwesomeIcon icon={faFacebook} className='my-2 fa-2x'/>
                            <FontAwesomeIcon icon={faTwitter} className='my-2 fa-2x'/>
                            <FontAwesomeIcon icon={faInstagram} className='my-2 fa-2x'/>
                            <FontAwesomeIcon icon={faLinkedin} className='my-2 fa-2x'/>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='--home-footer-section-hr'/>
            <div className='--home-footer-section-bottom text-white py-3 d-flex justify-content-center justify-content-lg-between align-items-center'>
                <p className='--home-footer-section-bottom-text '>
                @2023 EGYPT, ALL RIGHTS RESERVED 
                </p>
                <div className='--home-footer-section-bottom-icons d-none d-lg-block'>
                <FontAwesomeIcon icon={faFacebook} className='mx-4 fa-2x'/>
                <FontAwesomeIcon icon={faTwitter} className='mx-4 fa-2x'/>
                <FontAwesomeIcon icon={faInstagram} className='mx-4 fa-2x'/>
                <FontAwesomeIcon icon={faLinkedin} className='mx-4 fa-2x'/>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer