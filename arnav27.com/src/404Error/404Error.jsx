import './404Error.css'
import Error404Img from '/src/assets/Error404Img.png'

function Error404(){

    return(
        <>
            <div className="safe-space"></div>
            <div className="error-wrapper">
                <div className="error-container">
                    <div className="error-img">
                        <img src={Error404Img} alt="" draggable="false"/>
                    </div>
                </div>
            </div>
            <div className="safe-space"></div>
        </>
    );
}

export default Error404