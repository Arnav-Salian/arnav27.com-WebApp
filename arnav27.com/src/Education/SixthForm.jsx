import './SixthForm.css'
import amsLogo from '/src/assets/amsLogo.png'

function SixthForm(){
    document.title = "Sixth Form - arnav27.com"
    return(
        <>
            <div className="safe-space"></div>

            <div className="sixthform-wrapper">
                <div className="ams-logo-container">
                    <a href="https://www.amershamschool.org.uk/">
                        <img className="amsLogo-img" src={amsLogo} alt="" draggable="false" />
                    </a>
                </div>
            </div>

            <div className="sixthform-wrapper">
                <div className="sixthform-description-container">
                    <div className="sixthform-title">
                    <p className='sixthform-heading'>Sixth <span id='form-heading-txt'>Form</span></p>
                    </div>

                    <div className="sixthform-description">
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
            <div className="sixthform-achievements-wrapper">
                <div className="sixthform-achievements-container">
                    <div className="sixthform-achievements-title">
                        <p className='sixthform-achievements-heading'>Achievements</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nemo asperiores, iusto ullam porro quo alias iure, soluta atque eligendi ipsam illo, repellat vitae molestiae nam pariatur unde ex natus.</p>
                </div>

            </div>

            <div className="safe-space"></div>
        </>
    );
}

export default SixthForm