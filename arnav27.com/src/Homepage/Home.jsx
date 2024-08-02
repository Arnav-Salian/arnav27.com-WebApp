import './Home.css';
import profileImg from '/src/assets/signal-2023-08-17-095053_002.jpeg';

function Home() {
    window.scrollTo(0, 0)
    document.title = "Home - arnav27.com"
    return (
        <>
            <div className="safe-space"></div>
            <div className="home-wrapper">
                <div className="home-container">
                    <div className="home-grid-items profile-select">
                        <div className="profile-container">
                            <div className="profile-img-section">
                                <img src={profileImg} alt="Profile" draggable="false" />
                            </div>
                            <div className="profile-info-section">
                                <p className="pfp-name">ARNAV SALIAN</p>
                                <p className="pfp-coursename">BSC COMPUTER SCIENCE STUDENT</p>
                                <p className="pfp-university">University of Leicester</p>
                            </div>
                        </div>
                    </div>
                    <div className="home-grid-items">
                        <div className="welcome-container">
                            <div className="description-container">
                                <p className="about-me-heading"> About <span id='me-heading-text'>Me</span> </p>
                                <p className='about-me-description-text'>
                                Welcome to my website! I’m a second-year BSc Computer Science student at the University of Leicester. <br />
                                <br />
                                Besides my studies, I’m interested in technology, web design, and development, as well as IT administration. I enjoy blending academic knowledge with hands-on experiences, whether it’s creating websites or navigating IT systems. These interests drive my personal growth and commitment to making a meaningful impact in the digital landscape. Check out my portfolio to see some of my projects.<br />
                                <br />
                                Outside of academics, I am passionate about learning full stack development. Currently, I am focusing on React.js, MongoDB, MySQL, and Tailwind CSS. In my free time, I’m a Formula 1 enthusiast, supporting Red Bull Racing, and a proud fan of the Indian cricket team. These interests add excitement to my downtime and inspire my aspirations in the motorsport technology industry. Feel free to explore my website and reach out if you’d like to collaborate.<br />


                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="safe-space"></div>
        </>
    );
}

export default Home;
