import './FSUK.css'
import fsukLogo from '/src/assets/favpng_logo-formula-student-formula-sae-brand-450x190.png'

function FSUK(){
    window.scrollTo(0, 0)
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
                    In October 2023, I became a Team Member of Formula Student, representing the University of Leicester Racing Team (UoL Racing). Formula Student, Europe’s premier educational engineering competition, celebrated its 25th anniversary that year with support from industry figures like Patron Ross Brawn OBE. The competition is designed to cultivate enterprising and innovative young engineers and inspire more individuals to pursue careers in engineering. With over 100 university teams participating annually, Formula Student projects are integral to degree-level coursework and are highly regarded as a benchmark for engineering graduates entering the workforce. <br />
                    <br />
                    UoL Racing achieved an impressive 7th place finish in the UK in 2023, underscoring our commitment and collaborative spirit. I was particularly eager to join the team to gain insights into the dynamics of teamwork, engineering innovation, and the competitive spirit required to excel in such a prestigious competition. Each year, all Formula Student teams converge at Silverstone for the national event, a cornerstone of the competition where teams engage in diverse engineering challenges. This event not only provides a platform for showcasing practical engineering prowess but also fosters skills in business planning and project management, offering invaluable real-world experience and networking opportunities.


                    </div>
                </div>
            </div>
            <div className="safe-space"></div>
        </>

    );
}

export default FSUK