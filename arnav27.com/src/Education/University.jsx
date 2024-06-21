import './University.css'
import uolLogo from '/src/assets/uol-logo.png'

function University(){

    return(
        <>
            <div className="safe-space"></div>
            <div className="uni-wrapper">
                <div className="uni-container">
                    <div className="top-section">
                        
                        <a className="uol-logo-link-container" href="https://le.ac.uk" target='_blank'>
                            <div className="uol-logo-container"><img className="uol-logo-class" src={uolLogo} alt="" draggable='false'/>
                            </div>
                        </a>
                        
                        

                    </div>
                    <div className="bottom-section">
                        <div className="uni-description-container">
                            <div className="title-container">
                                <p className='uni-title'>University <span id='edu-title'>Education</span></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="safe-space"></div>
        </>

    );
}

export default University