import './UoLRacing.css'
import uolracingLogo from '/src/assets/uolracinglogowhite.png'

function UoLRacing(){
    window.scrollTo(0, 0)
    document.title = "UoL Racing - arnav27.com"
    return(
        <>
            <div className="safe-space"></div>
            <div className="uolracing-wrapper">
                <div className="uolracingLogo-container">
                    <a href="https://uolracing.le.ac.uk" target='_blank'>
                        <img src={uolracingLogo} alt="" draggable="false"/>
                        </a>
                    
                </div>
            </div>
            <div className="uolracing-wrapper">
                <div className="uolracing-description-container">
                    <div className="uolracing-title">
                        <p className='uolracing-heading'>UOL <span id='racing-heading-text'>Racing</span></p>
                    </div>
                    <div className="uolracing-description">
                    I revamped the outdated static website of UoL Racing into an interactive and responsive platform, which can be visited at (<a id="uol-racing-link" href='https://uolracing.arnav27.com' target='_blank'><b>UoL Racing Website</b></a>). My goal was to appeal to young engineers and potential sponsors by enhancing the site’s appeal and functionality. I integrated an online store using PayPal for selling team kits and managed inventory alongside posting regular social media content to engage our audience effectively. <br />
                    <br />

                    Implementing a user-friendly content management system with WordPress, I ensured that team members could easily update and maintain the site, even in my absence. Through strategic SEO improvements, I successfully boosted the site’s visibility, transforming it from being unlisted on Google to having a prominent online presence. This effort significantly increased merchandise sales and strengthened the team’s visibility. <br />
                    <br />

                    In addition to website management, I actively pursued new sponsorships, securing valuable partnerships to support UoL Racing. I was also honored by the team with the Team Member Highlight award for my contributions that benefited the team. Additionally, I designed multiple liveries for the LR03 2024 Race Car, aiming to combine technological innovation with aesthetic excellence. These efforts laid a robust foundation for scalable technology solutions, ensuring ongoing growth and success for UoL Racing in the future. <br />
                    <br />

                    I left the UoL Racing team to pursue and learn full stack web development, eager to expand my skills and contribute further to the field.
                    </div>
                </div>
            </div>
            <div className="safe-space"></div>
        </>

    );
}

export default UoLRacing