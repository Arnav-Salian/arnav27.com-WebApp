import './PrimarySch.css'
import woodsideLogo from '/src/assets/woodsideLogo.jpg'
import sfsLogo from '/src/assets/sfsLogo.png'

function PrimarySch(){
    window.scrollTo(0, 0)
    document.title = "Primary Education - arnav27.com"
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
                    In September 2014, I embarked on the final stages of my primary education at Woodside Junior School, where I spent two pivotal years in Years 5 and 6. During this period, I successfully completed the mandatory SATs exams, marking a significant academic milestone. <br />
                    <br />
                    Beyond academics, I actively engaged in extracurricular activities. One standout achievement was receiving the Man of the Tournament award in dodgeball at a prestigious multi-school event hosted by Amersham School. This experience not only highlighted my athletic prowess but also fostered my development in teamwork and leadership at a young age.
                    </div>
                </div>
            </div>

            <div className="safe-space"></div>
        </>
    );
}

export default PrimarySch