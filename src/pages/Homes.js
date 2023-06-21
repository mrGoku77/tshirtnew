import React from "react";
import im1 from '../images/menspage.png'
import {Link} from 'react-router-dom'


 const Homes = () => {
    return(
   

     <div className = "homepage">
      
      <div class='FlexContainer'>
        <Link to= '/mens'>
          <img className='mensnavimage' src= {im1} alt=''/>
          </Link>

          <Link to= 'women/'>
          <img className='mensnavimage' src= {im1} alt=''/>  
          </Link>

          <Link to= '/Kids'>
          <img className='mensnavimage' src= {im1} alt=''/> 
          </Link>
      </div>
       

      </div>
    )
}

export default Homes;