import React from "react";

const Header = () => {
  return (
    <header className="main-header main-header-overlay">
      <div className="mainbar-wrap">
        <div className="megamenu-hover-bg"></div>
        <div className="container-fluid mainbar-container">
          <div className="mainbar">
            <div className="row mainbar-row align-items-lg-stretch px-4">
              <div className="col pr-5">
                <div className="navbar-header">
                  <a className="navbar-brand" href="/" rel="home">
                    <span className="navbar-brand-inner">
                      <img
                        className="mobile-logo-default"
                        src="/assets/img/Logos/trans-bg-tsl.png"
                        alt="logo"
                      />
                      <img
                        className="logo-default"
                        width="202"
                        src="/assets/img/Logos/Logo-trans-bg-tsl.png"
                        alt="logo"
                      />
                    </span>
                  </a>
                  <button
                    type="button"
                    className="navbar-toggle collapsed nav-trigger style-mobile"
                    data-toggle="collapse"
                    data-target="#main-header-collapse"
                    aria-expanded="false"
                    data-changeclassnames='{ "html": "mobile-nav-activated overflow-hidden" }'
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="bars">
                      <span className="bar"></span>
                      <span className="bar"></span>
                      <span className="bar"></span>
                    </span>
                  </button>
                </div>
              </div>

              <div className="col">
                <div
                  className="collapse navbar-collapse"
                  id="main-header-collapse"
                >
                  <ul
                    id="primary-nav"
                    className="main-nav main-nav-hover-underline-1 nav align-items-lg-stretch justify-content-lg-center"
                    data-submenu-options='{ "toggleType":"fade", "handler":"mouse-in-out" }'
                    data-localscroll="true"
                  >
                    <li className="is-active">
                      <a href="#content">
                        <span className="txt">Home</span>
                      </a>
                    </li>
                    <li>
                      <a href="#about">
                        <span className="txt">About</span>
                      </a>
                    </li>
                    <li>
                      <a href="#services">
                        <span className="txt">Services</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://yi9w2vn5pmo.typeform.com/to/Ijtk7Xpa">
                        <span className="txt">Get Started</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col text-right">
                <div className="header-module">
                  <ul className="social-icon social-icon-sm scheme-white font-size-16">
                    <li>
                      <a
                        href="https://facebook.com/thestartuplifeio"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/startuplifeio"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/startuplife.io"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com/company/thestartuplife"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://medium.com/@thestartuplife"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-medium"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtube.com/thestartuplife"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
