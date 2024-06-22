import './University.css'
import uolLogo from '/src/assets/uol-logo.png'

function University(){

    return(
        <>
            <div className="safe-space"></div>
            <div className="uni-wrapper">
                <div className="uolLogo-container">
                    <a href="https://le.ac.uk" target='_blank'>
                        <img src={uolLogo} alt="" draggable="false"/>
                        </a>
                    
                </div>
            </div>
            <div className="uni-wrapper">
                <div className="uni-description-container">
                    <div className="uni-title">
                        <p className='uni-heading'>Further <span id='edu-heading-text'>Education</span></p>
                    </div>
                    <div className="uni-description">
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

export default University