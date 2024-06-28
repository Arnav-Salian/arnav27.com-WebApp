import './Portfolio.css'
import portfolioLogo from '/src/assets/arnav27logo.png'

function Portfolio(){
    document.title = "Portfolio - arnav27.com"
    return(
        <>
            <div className="safe-space"></div>
            <div className="portfolio-wrapper">
                <div className="portfolioLogo-container">
                    <a href="https://arnav27.com" target='_blank'>
                        <img src={portfolioLogo} alt="" draggable="false"/>
                        </a>
                    
                </div>
            </div>
            <div className="portfolio-wrapper">
                <div className="portfolio-description-container">
                    <div className="portfolio-title">
                        <p className='portfolio-heading'>Portfolio <span id='website-heading-text'>Website</span></p>
                    </div>
                    <div className="portfolio-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reprehenderit voluptas nisi voluptatibus quod inventore aperiam quisquam unde eum provident nulla quis eaque laudantium, aliquid fugiat. Totam minus iure ducimus. <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut obcaecati maiores aliquid doloremque, dolore provident nihil? Magnam asperiores quos, laboriosam numquam voluptate, assumenda tempora cumque officiis rem neque ratione. <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut obcaecati maiores aliquid doloremque, dolore provident nihil? Magnam asperiores quos, laboriosam numquam voluptate, assumenda tempora cumque officiis rem neque ratione. <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut obcaecati maiores aliquid doloremque, dolore provident nihil? Magnam asperiores quos, laboriosam numquam voluptate, assumenda tempora cumque officiis rem neque ratione.
                    </div>
                </div>
            </div>
            <div className="safe-space"></div>
        </>

    );
}

export default Portfolio