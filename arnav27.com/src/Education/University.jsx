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
                    In August 2023, after completing my A Levels at Amersham Sixth Form, I accepted the firm offer extended by the University of Leicester to pursue a Bachelor of Science in Computer Science. This marked a significant milestone in my academic journey, as I embarked on a rigorous three-year program aimed at deepening my understanding of computer systems and software development.<br/>
                    <br/>
                    Throughout my first year at the University of Leicester, I engaged passionately with courses that delved into foundational principles of programming, algorithms, and computer architecture. This experience not only sharpened my technical skills but also broadened my perspective on the potential applications of computer science in solving real-world challenges.<br/>
                    <br/>
                    Looking ahead, I am enthusiastic about continuing to explore advanced topics in data analytics, domain and database, and software engineering. My commitment to academic excellence and my aspiration to contribute meaningfully to the field of computer science drive my pursuit of knowledge and growth at the University of Leicester.<br/>


                    </div>
                </div>
            </div>
            <div className="year1-wrapper">
                <div className="year1-container">
                    <div className="year1-title">
                        <p className='year1-heading'>First <span id='year1-heading-text'>Year</span></p>
                    </div>
                    <p>In September 2023, following orientation at the University of Leicester, I commenced BSc in Computer Science. Throughout the academic year, I completed eight mandatory modules that provided a solid foundation in software engineering principles and technologies. This included intensive study of Python and Java programming languages using development environments like IntelliJ IDEA, PyCharm, and Visual Studio Code. Additionally, the curriculum covered essential topics such as web development, computer architecture, and the theory of computation, enriching my understanding of modern processor architectures.
                    </p>
                </div>


            </div>
            <div className="safe-space"></div>
        </>

    );
}

export default University