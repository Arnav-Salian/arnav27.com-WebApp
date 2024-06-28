import './FSUK.css'
import fsukLogo from '/src/assets/favpng_logo-formula-student-formula-sae-brand-450x190.png'

function FSUK(){
    document.title = "Formula Student - arnav27.com"
    return(
        <>
            <div className="safe-space"></div>
            <div className="fsuk-wrapper">
                <div className="fsukLogo-container">
                    <a href="https://www.imeche.org/events/formula-student" target='_blank'>
                        <img src={fsukLogo} alt="" draggable="false"/>
                        </a>
                    
                </div>
            </div>
            <div className="fsuk-wrapper">
                <div className="fsuk-description-container">
                    <div className="fsuk-title">
                        <p className='fsuk-heading'>Formula <span id='stu-heading-text'>Student</span></p>
                    </div>
                    <div className="fsuk-description">
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

export default FSUK