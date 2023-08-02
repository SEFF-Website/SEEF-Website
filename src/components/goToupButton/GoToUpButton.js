import React from 'react'
import "./go_to_up_button.css"
import { useState } from 'react'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
const GoToUpButton = () => {
    const [topButton, setTopButton] = useState(false)

    useEffect (()=>{
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setTopButton(true);
            } else {
                setTopButton(false);
            }
          });
    },[topButton])
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
      };
  return (
    // go to up button
    <>
     {
        topButton && (
        <div className='--home-to-up-button' onClick={scrollToTop}>
         <FontAwesomeIcon icon={faChevronUp} />
        </div>
        )
    }
    </>
    // go to up button
  )
}

export default GoToUpButton