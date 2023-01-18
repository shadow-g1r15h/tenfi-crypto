import React from "react";    
import ten from '../assets/images/ten.jpeg'
export const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <img className="ten-logo" src={ten} alt="ten"></img>
            <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <div className="nav-link">STAKING <span className="staking"></span></div>
                </li>
                <li className="lending">
                  <div className="nav-link">LENDING</div>
                </li>
                <li className="yieldex">
                  <div className="nav-link">YIELDEX</div>
                </li>
                <li className="swap">
                  <div className="nav-link">SWAP</div>
                </li>
                <li className="ten-lots">
                  <div className="nav-link">TEN LOTS</div>
                </li>
                <li className="airdrop">
                  <div className="nav-link">AIRDROP</div>
                </li>
                <li className="nav-item dropdown">
                  <div className="nav-link dropdown-toggle" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</div>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <div className="dropdown-item">Action 1</div>
                    <div className="dropdown-item">Action 2</div>
                  </div>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <button className="btn standard-outline-button my-2 my-sm-0" type="submit">Login</button>
              </form>
            </div>
          </nav>    
    );
}