import './SecondarySch.css'
import amsLogo from '/src/assets/amsLogo.png'

function SecondarySch(){
    document.title = "Secondary Education - arnav27.com"
    return(
        <>
            <div className="safe-space"></div>

            <div className="secondarysch-wrapper">
                <div className="secondarysch-ams-logo-container">
                    <a href="https://www.amershamschool.org.uk/">
                        <img className="secondarysch-amsLogo-img" src={amsLogo} alt="" draggable="false" />
                    </a>
                </div>
            </div>

            <div className="secondarysch-wrapper">
                <div className="secondarysch-description-container">
                    <div className="secondarysch-title">
                    <p className='secondarysch-heading'>Secondary <span id='edu-title-txt'>Education</span></p>
                    </div>

                    <div className="secondarysch-description">
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

export default SecondarySch