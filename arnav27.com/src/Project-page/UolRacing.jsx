import './UoLRacing.css'
import uolracingLogo from '/src/assets/uolracinglogowhite.png'

function UoLRacing(){

    return(
        <>
            <div className="safe-space"></div>
            <div className="uolracing-wrapper">
                <div className="uolracingLogo-container">
                    <a href="https://uolracing.le.ac.uk" target='_blank'>
                        <img src={uolracingLogo} alt="" draggable="false"/>
                        </a>
                    
                </div>
            </div>
            <div className="uolracing-wrapper">
                <div className="uolracing-description-container">
                    <div className="uolracing-title">
                        <p className='uolracing-heading'>UOL <span id='racing-heading-text'>Racing</span></p>
                    </div>
                    <div className="uolracing-description">
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

export default UoLRacing