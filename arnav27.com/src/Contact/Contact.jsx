import './Contact.css';
import linkedinIcon from '/src/assets/icons8-linkedin.svg';

function Contact() {
    window.scrollTo(0, 0)
    document.title = "Contact - arnav27.com"
    return (
        <>
            <div className="safe-space"></div>

            <div className="contact-container">
                <div className="contact-form-container">
                    
                    <p className='contact-form-title'>Contact <span id='me-title-text'>Me</span>
                    </p>

                    <button className="linkedin-btn">
                        <a href="https://www.linkedin.com/in/arnavs27/">
                            <img src={linkedinIcon} alt="" draggable="false" />
                        </a>
                    </button>

                    <div className="contact-forms">
                        <form action="/submit" method="POST" id="form" data-netlify="true">
                            <label htmlFor="fname">First Name:</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your first name.." required />

                            <label htmlFor="lname">Last Name:</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." required />

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Your email.." required />

                            <label htmlFor="subject">Subject:</label>
                            <input type="text" id="subject" name="subject" placeholder="Subject.." required />

                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" placeholder="Write something.." style={{height: '200px'}} required></textarea>

                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="safe-space"></div>
        </>
    );
}

export default Contact;
