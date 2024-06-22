import './PrimarySch.css'
import woodsideLogo from '/src/assets/woodsideLogo.jpg'
import sfsLogo from '/src/assets/sfsLogo.png'

function PrimarySch(){

    return(
        <>
            <div className="safe-space"></div>
            
            <div className="primary-wrapper">
                <div className="primary-logo-container">
                    <div className="woodside-logo-container primary-logo-grid-items">
                        <a href="https://www.woodsidejunior.co.uk/" target='_blank'>
                            <img src={woodsideLogo} alt="" draggable="false"/>
                        </a>

                    </div>
                    <div className="sfs-logo-container primary-logo-grid-items">
                        <a href="https://www.sfsborivali.com/" target='_blank'>
                            <img src={sfsLogo} alt="" draggable="false"/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="primary-wrapper">
            <div className="primarysch-description-container">
                    <div className="primarysch-title">
                    <p className='primarysch-heading'>Primary <span id='primaryedu-title-txt'>Education</span></p>
                    </div>

                    <div className="primarysch-description">
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

export default PrimarySch