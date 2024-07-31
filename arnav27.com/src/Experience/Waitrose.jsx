import './Waitrose.css'
import waitroseLogo from '/src/assets/waitrose.jpeg'

function Waitrose() {
    document.title = "Waitrose & Partners - arnav27.com";
    return (
        <>
            <div className="safe-space"></div>
            <div className="waitrose-wrapper">
                <div className="waitroseLogo-container">
                    <a href="https://www.waitrose.com/" target="_blank">
                        <img src={waitroseLogo} alt="Waitrose Logo" draggable="false" />
                    </a>
                </div>
            </div>
            <div className="waitrose-wrapper">
                <div className="waitrose-description-container">
                    <div className="waitrose-title">
                        <p className="waitrose-heading">Waitrose <span id="website-heading-text">& Partners</span></p>
                    </div>
                    <div className="waitrose-description">
                    During my mandatory school work experience at Waitrose & Partners, I played a key role in Stock Control operations, focusing on maintaining inventory accuracy and ensuring efficient stock replenishment processes. A significant part of my responsibilities involved optimizing the delivery of click-and-collect services, where I worked diligently to streamline the process and enhance customer satisfaction. <br />
                    <br />
                    Additionally, I underwent comprehensive training to effectively handle customer inquiries and provide prompt assistance, gaining valuable insights into customer service practices within a retail environment. My experience at Waitrose & Partners not only strengthened my organizational and logistical skills but also underscored the importance of delivering high-quality service in a fast-paced setting.


                    </div>
                </div>
            </div>
            <div className="safe-space"></div>
        </>
    );
}

export default Waitrose;
