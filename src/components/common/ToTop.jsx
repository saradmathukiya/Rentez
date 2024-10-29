import React, { useEffect, useState } from 'react'
// import { FaArrowUp } from 'react-icons/fa';
// import { FaArrowUpLong } from "react-icons/fa6";
import { BsArrowUp } from "react-icons/bs";


const ToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      };

    const listenToSroll = () => {
        let heightToHidden = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if(winScroll > heightToHidden) {
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    
    }

    useEffect(()=> {
        window.addEventListener('scroll',listenToSroll);
        return () => window.removeEventListener('scroll', listenToSroll);
    },[])

  return (
    <div className='totop-container'>
        {isVisible && (
            <div className='totop floating'  onClick={scrollToTop}>
                <BsArrowUp style={{fontWeight:'200'}}/>
            </div>
        ) }
    </div>
  )
}

export default ToTop