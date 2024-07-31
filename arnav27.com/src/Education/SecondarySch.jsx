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
                    In September 2016, I began my secondary education journey at Amersham School. During my time there, I completed 12 GCSE qualifications, the most in my year cohort, consisting of 4 optional GCSEs in Year 10 and 8 mandatory GCSEs in Year 11. I was honored to receive the Student of the Term award twice for my outstanding commitment. Additionally, I received an award for Academic Excellence in Computer Science, recognizing my exceptional performance in the subject. <br />
                    <br />
                    Beyond academics, I actively contributed to the Hockey Team, serving as captain and leading our team to victory in our inaugural match against Dr Challoner’s Grammar School. In May 2021, I achieved the Duke of Edinburgh Bronze Award by completing the expedition requirement, which involved three months of volunteering, three months of physical activity, and six months of skill development.


                    </div>
                </div>
            </div>

            <div className="secondary-achievements-wrapper">
                <div className="secondary-achievements-container">
                    <div className="secondary-achievements-title">
                        <p className='secondary-achievements-heading'>Achievements</p>
                    </div>
                    <p>
                    <ul className='achievement-list-secondary'>
                        <li>Academic Excellence in Computer Science (2022)</li>
                        <li>Duke of Edinburgh Bronze Award (2021)</li>
                        <li>Student of the Term (2020)</li>
                        <li>Student of the Term (2018)</li>
                        <li>Elected Vice-Captain (2018)</li>
                        <li>Led Hockey Team to Victory as Captain in Inaugural Match (2018)</li>
                    </ul>

                    </p>
                </div>

            </div>

            <div className="safe-space"></div>
        </>
    );
}

export default SecondarySch