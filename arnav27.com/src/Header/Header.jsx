import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import './Header.css';
import aboutMenuImg from '/src/assets/About-Menu-IMG.jpeg';
import cancelButtonImg from '/src/assets/cancel_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import menuButtonImg from '/src/assets/menu_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import { useRef } from 'react';

function Header() {
    const menuBtnRef = useRef(null);
    const cancelBtnRef = useRef(null);

    const handleClick = () => {
        if (menuBtnRef.current) menuBtnRef.current.checked = false;
        if (cancelBtnRef.current) cancelBtnRef.current.checked = false;
    };

    return (
        <nav>
            <div className="wrapper">
                <div className="logo"><a href="https://arnav27.com" target='_blank'>arnav27.com</a></div>

                <input type="radio" name="slide" id="menu-btn" ref={menuBtnRef} />
                <input type="radio" name="slide" id="cancel-btn" ref={cancelBtnRef} />

                <ul className="nav-links">
                    <label htmlFor="cancel-btn" className='btn cancel-btn'><img src={cancelButtonImg} alt="" draggable="false"/></label>
                    <li><Link to="" onClick={handleClick}>HOME</Link></li>
                    <li>
                        <Link to="#" className='desktop-item'>ABOUT</Link>
                        <input type="checkbox" id="showMega" />
                        <label htmlFor="showMega" className='mobile-item'>ABOUT</label>
                        <div className="mega-box">
                            <div className="content">
                                <div className="row">
                                    <img src={aboutMenuImg} alt="" draggable="false"/>
                                </div>
                                <div className="row">
                                    <header>EDUCATION</header>
                                    <ul className="mega-links">
                                        <li><Link to="/university" onClick={handleClick}>University</Link></li>
                                        <li><Link to="/sixthform" onClick={handleClick}>Sixth Form</Link></li>
                                        <li><Link to="/secondary" onClick={handleClick}>Secondary School</Link></li>
                                        <li><Link to="/primary" onClick={handleClick}>Primary School</Link></li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <header>WORK EXPERIENCE</header>
                                    <ul className="mega-links">
                                        
                                        <li><Link to="/fsuk" onClick={handleClick}>Formula Student</Link></li>
                                        <li><Link to="/waitrose" onClick={handleClick}>Waitrose & Partners</Link></li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <header>PROJECTS</header>
                                    <ul className="mega-links">
                                        <li><Link to="/arnav27" onClick={handleClick}>arnav27.com</Link></li>
                                        <li><Link to="/uolracing" onClick={handleClick}>UoL Racing</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
{/* 
                    <li>
                        <Link to="#" className='desktop-item'>UPDATES</Link>
                        <input type="checkbox" id='showDrop-updates'/>
                        <label htmlFor="showDrop-updates" className='mobile-item'>UPDATES</label>
                        <ul className="drop-menu">
                            <li><Link to="/blog" onClick={handleClick}>Blog</Link></li>
                            <li><Link to="/feed" onClick={handleClick}>Live Feed</Link></li>
                        </ul>
                    </li> */}

                    <li><Link to="/contact" onClick={handleClick}>CONTACT</Link></li>
                </ul>
            </div>
            <label htmlFor="menu-btn" className='btn menu-btn'><img id="menu-img" src={menuButtonImg} alt="" draggable="false"/></label>
        </nav>
    );
}

export default Header;
