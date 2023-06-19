
import {NavLink} from "react-router-dom"

export default function Header() {
    return(
      <> 
        <header className="header sticky">
        
        <div className="searchB">

             <input className="searchBar"  type="text" placeholder="Search"/> 

        </div>



        <div className="navlinks">
          
            <li>
              <NavLink className="homes" to="/"> Home </NavLink>  
            </li>

            <li> 
              <NavLink className="offerss" to="/offers"> Offers </NavLink>
             </li>

            <li>
              <NavLink className="mens" to="/mens"> Men </NavLink> 
             </li>

            <li>
              <NavLink className="womens" to="/women">  Women </NavLink>
             </li>

            <li> 
              <NavLink className="Kids" to="/Kids"> Kids </NavLink>
             </li>

             <li> 
              <NavLink className="Contacts" to="/Contacts"> ContactPage </NavLink>
             </li>
           
            
          </div>
             
        
      </header>

      </>
      
    )
}