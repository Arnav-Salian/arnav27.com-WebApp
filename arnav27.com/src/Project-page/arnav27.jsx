import './arnav27.css'
import arnav27Logo from '/src/assets/arnav27logo.png'

function Arnav27(){
    window.scrollTo(0, 0)
    document.title = "arnav27.com"
    return(
        <>
            <div className="safe-space"></div>
            <div className="arnav27-wrapper">
                <div className="arnav27Logo-container">
                    <a href="https://arnav27.com" target='_blank'>
                        <img src={arnav27Logo} alt="" draggable="false"/>
                        </a>
                    
                </div>
            </div>
            <div className="arnav27-wrapper">
                <div className="arnav27-description-container">
                    <div className="arnav27-title">
                        <p className='arnav27-heading'>arnav27.com <span id='tm-heading-text'></span></p>
                    </div>
                    <div className="arnav27-description">
                    In December 2023, I launched my personal website, arnav27.com, as a comprehensive platform to document my achievements, experiences, and educational journey. The domain name was inspired by my favourite number, 27. <br /><br />

                    Prior to arnav27.com, I gained valuable experience creating websites such as WebDesignerPro.co.uk in 2019 and TrueNewsX.co.uk in 2020. These projects were instrumental in my early learning stages of web development, providing hands-on experience and fostering my passion for technology and design. <br />
                    <br />
                    arnav27.com not only archives my professional accomplishments but also serves as a dynamic space where I publish posts detailing my work experiences and insights gained along the way. It reflects my dedication to continuous learning and growth in the field of web development and beyond.


                    </div>
                </div>
            </div>
            <div className="safe-space"></div>
        </>

    );
}

export default Arnav27