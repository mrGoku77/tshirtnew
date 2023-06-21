import React from 'react';
import im4 from '../images/10.png'
import im5 from '../images/20.png'
import im6 from '../images/30.jpg'
import im7 from '../images/50.png'

export default function Offers() {
    return(
     <> 
     <div className='offerspage'>

     <section class='FlexContainer'>
            <div> <img className='50image' src= {im4} alt=''/> </div>
            <div> <img className='20image' src= {im5} alt=''/> </div>
            <div> <img className='30image' src= {im6} alt=''/> </div>
            <div> <img className='10image' src= {im7} alt=''/> </div>
        </section>
     </div>

     </>

    )
}