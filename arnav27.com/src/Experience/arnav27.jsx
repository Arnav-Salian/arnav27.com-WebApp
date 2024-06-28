import './arnav27.css'
import arnav27Logo from '/src/assets/arnav27logo.png'

function Arnav27(){
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
                        <p className='arnav27-heading'>arnav27.com <span id='tm-heading-text'>™</span></p>
                    </div>
                    <div className="arnav27-description">
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

export default Arnav27