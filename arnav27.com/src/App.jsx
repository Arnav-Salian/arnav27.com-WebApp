import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Home from "./Homepage/Home.jsx";
import University from './Education/University.jsx';
import SixthForm from './Education/SixthForm.jsx';
import SecondarySch from './Education/SecondarySch.jsx';
import PrimarySch from './Education/PrimarySch.jsx';
import FSUK from './Experience/FSUK.jsx';
import Arnav27 from './Project-page/arnav27.jsx';
import UoLRacing from './Project-page/UolRacing.jsx';
import Waitrose from './Experience/Waitrose.jsx';
import Blog from './Update27/Blog.jsx';
import LiveFeed from './Update27/LiveFeed.jsx';
import Contact from "./Contact/Contact.jsx";
import Error404 from './Error404/404Error.jsx';


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
                <Route path='/waitrose' element={<Waitrose/>} />
                <Route path='/blog' element={<Blog/>} />
                <Route path='/feed' element={<LiveFeed/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='*' element={<Error404/>} />
              </Routes>
            </main>
          
        <Footer/>
      </BrowserRouter>
    </>
  
  );

}

export default App