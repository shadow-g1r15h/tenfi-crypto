import React from "react";
import AdBanner from '../assets/images/addBanner.gif';

const TotalTVL: React.FC = () => {
    return (
        <div className="row mb-3">
            <div className="total-ad-container col-md-8">
            <div className="image-container" style={{overflow:"hidden"}}>
                <img src={AdBanner} alt="Ad Banner" className="h-100 img-fluid" />
            </div>
            </div>
            <div className="total-tenfi-container col-md-4 py-md-0 py-2 px-md-2">
            <div className="jumbotron p-1 px-2 d-flex justify-content-center align-items-start flex-column">
                <div className="total-tenfi-staked">
                Total TENFI Staked <span className="white-text">85.20%</span>
                </div>
                <div className="total-tenfi-tvl">
                TVL <span className="white-text">$ 4,401,383.97</span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default TotalTVL;