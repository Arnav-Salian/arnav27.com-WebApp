import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Home from "./Homepage/Home.jsx";
import University from './Education/University.jsx';
import SixthForm from './Education/SixthForm.jsx';
import SecondarySch from './Education/SecondarySch.jsx';
import PrimarySch from './Education/PrimarySch.jsx';
import FSUK from './Experience/FSUK.jsx';
import Arnav27 from './Experience/arnav27.jsx';
import UoLRacing from './Project-page/UolRacing.jsx';
import Portfolio from './Project-page/Portfolio.jsx';
import LiveFeed from './Update27/LiveFeed.jsx';
import Contact from "./Contact/Contact.jsx";




function App(){

  return(
    <> 
      <BrowserRouter>
        <Header/>
          
            <main>
              <Routes>
                <Route index element={<Home />} />
                <Route path='/university' element={<University/>} />
                <Route path='/sixthform' element={<SixthForm/>} />
                <Route path='/secondary' element={<SecondarySch/>} />
                <Route path='/primary' element={<PrimarySch/>} />
                <Route path='/fsuk' element={<FSUK/>} />
                <Route path='/arnav27' element={<Arnav27/>} />
                <Route path='/uolracing' element={<UoLRacing/>} />
                <Route path='/portfolio' element={<Portfolio/>} />
                <Route path='/feed' element={<LiveFeed/>} />
                <Route path='/contact' element={<Contact/>} />
              </Routes>
            </main>
          
        <Footer/>
      </BrowserRouter>
    </>
  
  );

}

export default App