import './University.css'
import uolLogo from '/src/assets/uol-logo.png'

function University(){
    document.title = "University - arnav27.com"
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
            <div className="year1-wrapper">
                <div className="year1-container">
                    <div className="year1-title">
                        <p className='year1-heading'>First <span id='year1-heading-text'>Year</span></p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum labore nesciunt iure officia, aliquid libero commodi consectetur velit soluta totam cum sed deserunt nemo cupiditate voluptatibus, distinctio maxime assumenda esse! <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum labore nesciunt iure officia, aliquid libero commodi consectetur velit soluta totam cum sed deserunt nemo cupiditate voluptatibus, distinctio maxime assumenda esse!
                    </p>
                </div>


            </div>
            <div className="safe-space"></div>
        </>

    );
}

export default University