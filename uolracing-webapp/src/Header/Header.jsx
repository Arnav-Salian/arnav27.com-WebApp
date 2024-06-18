import './Header.css'

function Header() {

    return(
        <nav>

            <div className="wrapper">
                <div className="logo"><a href="https://arnav27.com" target='_blank'>arnav27.com</a></div>

                <input type="radio" name="slide" id="menu-btn" />
                <input type="radio" name="slide" id="cancel-btn" />

                <ul className="nav-links">
                    <label htmlFor="cancel-btn" className='btn cancel-btn'><img src="src\assets\cancel_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt="" draggable="false"/></label>
                    <li><a href="#">HOME</a></li>
                    <li>
                        <a href="#" className='desktop-item'>ABOUT</a>
                        <input type="checkbox" id="showMega" />
                        <label htmlFor="showMega" className='mobile-item'>ABOUT</label>
                        <div className="mega-box">
                            <div className="content">
                                <div className="row">
                                    <img src="src\assets\About-Menu-IMG.jpeg" alt="" draggable="false"/>
                                </div>
                                <div className="row">
                                    <header>EDUCATION</header>
                                    <ul className="mega-links">
                                    <li><a href="#">University</a></li>
                                    <li><a href="#">Sixth Form</a></li>
                                    <li><a href="#">Secondary School</a></li>
                                    <li><a href="#">Primary School</a></li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <header>WORK EXPERIENCE</header>
                                    <ul className="mega-links">
                                    <li><a href="#">arnav27.com</a></li>
                                    <li><a href="#">Formula Student</a></li>
                                    

                                    </ul>
                                </div>
                                <div className="row">
                                    <header>PROJECTS</header>
                                    <ul className="mega-links">
                                    <li><a href="#">Portfolio</a></li>
                                    <li><a href="#">UoL Racing</a></li>
                                    
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>


                    <li>
                        <a href="#" className='desktop-item'>UPDATES</a>
                        <input type="checkbox" id='showDrop-updates'/>
                        <label htmlFor="showDrop-updates" className='mobile-item'>UPDATES</label>
                        <ul className="drop-menu">
                            <li><a href="#">Latest Updates</a></li>
                            <li><a href="#">Events</a></li>
                        </ul>
                    </li>

                    <li><a href="#">CONTACT</a></li>
                    {/* <li>
                        <a href="#" className='desktop-item'>MORE</a>
                        <input type="checkbox" id='showDrop-more'/>
                        <label htmlFor="showDrop-more" className='mobile-item'>MORE</label>
                        <ul className="drop-menu">
                            <li><a href="#">Team Store</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </li> */}
                </ul>
                
            </div>
            <label htmlFor="menu-btn" className='btn menu-btn' ><img id="menu-img" src="src\assets\menu_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt="" draggable="false"/></label>
            
        </nav>
        
    );

}

export default Header