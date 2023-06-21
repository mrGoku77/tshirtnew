import React from "react";
import im1 from '../images/menspage.png'
import im2 from '../images/women.jpg'
import im3 from '../images/kids.png'
import {Link} from 'react-router-dom'


 const Homes = () => {
    return(
   

     <div className = "homepage">
      
      <div class='FlexContainer'>
        <Link to= '/mens'>
          <img className='mensnavimage' src= {im1} alt=''/>
          </Link>

          <Link to= 'women/'>
          <img className='womensnavimage' src= {im2} alt=''/>  
          </Link>

          <Link to= '/Kids'>
          <img className='kidsnavimage' src= {im3} alt=''/> 
          </Link>
      </div>
       

      </div>
    )
}

export default Homes;