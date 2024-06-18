import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
 
import Header from "./Header/Header.jsx"
import Footer from "./Footer/Footer.jsx"
import Contact from "./Contact/Contact.jsx"



function App(){

  return(
    <> 
      <BrowserRouter>
        <Header/>
          
            <main>
              <Routes>
                <Route path='/contact' element={<Contact/>} />
              </Routes>
            </main>
          
        <Footer/>
      </BrowserRouter>
    </>
  
  );

}

export default App