import './css/Kids.css';
import './css/Header.css';
import './css/Contacts.css';
import './css/App.css';
import './css/Men.css';
import './css/Women.css';
import './css/Offers.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homes from './pages/Homes'
import Offers from './pages/Offers'
import Header from './components/Header'
import Mens from './pages/Mens'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Contacts from './pages/Contacts'

export default function App() {
  return (
    <div>
      
      <BrowserRouter>
      
         

        <Routes>
          
          

          <Route path= "/" element={<Homes/>} />
          <Route path= "/offers" element={<Offers/>} />
          <Route path= "/mens" element={<Mens/>} />
          <Route path= "/women" element={<Women/>} />
          <Route path= "/kids" element={<Kids/>} />
          <Route path= "/contacts" element={<Contacts/>} />
        
         
          
        </Routes> 
        
        <Header/>

      </BrowserRouter>
    </div>
  );
}



