import './Header.css'

function Header() {

    return(
        <nav>

            <div className="wrapper">
                <div className="logo"><a href="#"><img src="src\assets\site-logo-white.png" alt="" draggable="false"/></a></div>

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
                                    <img src="src\assets\About-Menu-IMG.png" alt="" draggable="false"/>
                                </div>
                                <div className="row">
                                    <header>ABOUT THE TEAM</header>
                                    <ul className="mega-links">
                                    <li><a href="#">Values & Goals</a></li>
                                    <li><a href="#">Past Results</a></li>
                                    <li><a href="#">Sustainable Racing</a></li>
                                    <li><a href="#">Team Stats</a></li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <header>OUR CARS</header>
                                    <ul className="mega-links">
                                    <li><a href="#">LR04 Timeline</a></li>
                                    <li><a href="#">LR03 2024</a></li>
                                    <li><a href="#">LR02 2023</a></li>
                                    <li><a href="#">LR01 2022</a></li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <header>FORMULA STUDENT</header>
                                    <ul className="mega-links">
                                    <li><a href="#">About Competition</a></li>
                                    <li><a href="#">Points Allocation</a></li>
                                    <li><a href="#">Documentation</a></li>
                                    <li><a href="#">Latest News</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li><a href="#">OUR TEAM</a></li>
                    <li><a href="#">OUR SPONSORS</a></li>

                    <li>
                        <a href="#" className='desktop-item'>UPDATES</a>
                        <input type="checkbox" id='showDrop-updates'/>
                        <label htmlFor="showDrop-updates" className='mobile-item'>UPDATES</label>
                        <ul className="drop-menu">
                            <li><a href="#">Latest Updates</a></li>
                            <li><a href="#">Events</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#" className='desktop-item'>MORE</a>
                        <input type="checkbox" id='showDrop-more'/>
                        <label htmlFor="showDrop-more" className='mobile-item'>MORE</label>
                        <ul className="drop-menu">
                            <li><a href="#">Team Store</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </li>
                </ul>
                
            </div>
            <label htmlFor="menu-btn" className='btn menu-btn' ><img id="menu-img" src="src\assets\menu_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt="" draggable="false"/></label>
            
        </nav>
        
    );

}

export default Header