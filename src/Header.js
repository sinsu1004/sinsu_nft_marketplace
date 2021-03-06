import React from "react"


//이미지 리스트
import logo_white from './assets/images/logo/logo-white.png';
import logo_dark from './assets/images/logo/logo-dark.png';
import sun_01 from './assets/images/icons/sun-01.svg';
import vector from './assets/images/icons/vector.svg'; 
import boy_avater from './assets/images/icons/boy-avater.png'; 
import portfolio_07 from './assets/images/portfolio/portfolio-07.jpg'; 
import portfolio_01 from './assets/images/portfolio/portfolio-01.jpg'; 


const Header =(props)=>{


    return(
    <header className="rn-header haeder-default header--sticky">
        <div>
            <div className="container">
            <div className="header-inner">
                <div className="header-left"> 
                    <div className="logo-thumbnail logo-custom-css">
                        <a className="logo-light" href="https://localhost:3000"><img src={logo_white} alt="nft-logo"/></a>
                        <a className="logo-dark" href="https://localhost:3000"><img src={logo_dark} alt="nft-logo"/></a>
                    </div>
                    <div className="mainmenu-wrapper">
                        <nav id="sideNav" className="mainmenu-nav d-none d-xl-block">
                            {/* <!-- Start Mainmanu Nav --> */}
                            <ul className="mainmenu">
                                <li className="has-droupdown has-menu-child-item">
                                    <a href="https://localhost:3000">Home</a>
                                </li>
                                <li><a href="https://etherscan.io/">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="header-right">
                    <div className="setting-option header-btn rbt-site-header" id="rbt-site-header">
                        <div className="icon-box">
                            <a id="connectbtn" className="btn btn-primary-alta btn-small" href="https://localhost:3000">Wallet connect</a>
                        </div>
                    </div>
                    <div className="setting-option rn-icon-list notification-badge">
                        <div className="icon-box">
                            <a href="https://localhost:3000"><i className="feather-bell"></i><span className="badge">0</span></a>
                        </div>
                    </div>
                    <div className="header_admin" id="header_admin">
                        <div className="setting-option rn-icon-list user-account">
                            <div className="icon-box">
                                <a href="author.html"><img src={boy_avater} alt="Images"/></a>
                                <div className="rn-dropdown">
                                    <div className="rn-inner-top">
                                        <h4 className="title"><a href="product-details.html">Christopher William</a></h4>
                                        <span><a href="https://localhost:3000">Set Display Name</a></span>
                                    </div>
                                    <div className="rn-product-inner">
                                        <ul className="product-list">
                                            <li className="single-product-list">
                                                <div className="thumbnail">
                                                    <a href="product-details.html"><img src={portfolio_07} alt="Nft Product Images"/></a>
                                                </div>
                                                <div className="content">
                                                    <h6 className="title"><a href="product-details.html">Balance</a></h6>
                                                    <span className="price">25 ETH</span>
                                                </div>
                                                <div className="button"></div>
                                            </li>
                                            <li className="single-product-list">
                                                <div className="thumbnail">
                                                    <a href="product-details.html"><img src={portfolio_01} alt="Nft Product Images"/></a>
                                                </div>
                                                <div className="content">
                                                    <h6 className="title"><a href="product-details.html">Balance</a></h6>
                                                    <span className="price">25 ETH</span>
                                                </div>
                                                <div className="button"></div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="add-fund-button mt--20 pb--20">
                                        <a className="btn btn-primary-alta w-100" href="connect.html">Add Your More Funds</a>
                                    </div>
                                    <ul className="list-inner">
                                        <li><a href="author.html">My Profile</a></li>
                                        <li><a href="edit-profile.html">Edit Profile</a></li>
                                        <li><a href="connect.html">Manage funds</a></li>
                                        <li><a href="login.html">Sign Out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="setting-option mobile-menu-bar d-block d-xl-none">
                        <div className="hamberger">
                            <button className="hamberger-button">
                                <i className="feather-menu"></i>
                            </button>
                        </div>
                    </div>

                    <div id="my_switcher" className="my_switcher setting-option">
                        <ul>
                            <li>
                                <a href="https://localhost:3000" data-theme="light" className="setColor light">
                                    <img className="sun-image" src={sun_01} alt="Sun images"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://localhost:3000" data-theme="dark" className="setColor dark">
                                    <img className="Victor Image" src={vector} alt="Vector Images"/>
                                </a>
                            </li>
                        </ul>
                    </div>


                </div>
                </div>
            </div>
        </div>     
</header>
    );
};

export default Header;