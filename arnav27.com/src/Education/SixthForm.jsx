import './SixthForm.css'
import amsLogo from '/src/assets/amsLogo.png'

function SixthForm(){
    window.scrollTo(0, 0)
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
                    In September 2021, I enrolled at Amersham Sixth Form following my successful completion of GCSEs at the same school. I chose Mathematics as it was essential for my future Computer Science studies at university, and Biology because of my genuine interest in the subject. Initially considering Physics and Psychology, I ultimately decided on Chemistry. Throughout Year 12, I maintained strong academic performance, particularly excelling in internal assessments. <br />
                    <br />
                    In Year 13, I applied to UCAS and received offers from all five universities, including my first-choice University of Leicester for Computer Science. Recognizing my dedication and hard work, I was honored with both the Student of the Term and Student of the Year awards. In June 2023, I completed my A Levels, including the practical endorsements, solidifying my decision to pursue further education at the University of Leicester.


                    </div>
                </div>
            </div>
            <div className="sixthform-achievements-wrapper">
                <div className="sixthform-achievements-container">
                    <div className="sixthform-achievements-title">
                        <p className='sixthform-achievements-heading'>Achievements</p>
                    </div>
                    <p>
                        <ul className='achievement-list'>
                            <li>Student of the Year (2023)</li>
                            <li>Student of the Term (2023)</li>
                        </ul>
                        
                    </p>
                </div>

            </div>

            <div className="safe-space"></div>
        </>
    );
}

export default SixthForm