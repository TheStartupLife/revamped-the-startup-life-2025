import React from "react";

const Footer = () => {
  return (
    <footer className="main-footer pt-90">
      <section className="bt-fade-white-015 pt-100 pb-60">
        <div className="container">
          <div className="row d-flex flex-wrap align-items-center">
            {/* Logo */}
            <div className="lqd-column col-md-4 col-xs-6">
              <figure className="mb-60 mb-md-0">
                <img src="/assets/img/Logos/Logo-trans-bg-tsl.png" width="202" alt="The Startup Life Logo" />
              </figure>
            </div>

            {/* Copyright */}
            <div className="lqd-column col-md-4 col-xs-6 text-right text-md-center">
              <p className="font-size-14 mb-60 mb-md-0">
                © {new Date().getFullYear()}{" "}
                <span className="font-weight-bold text-secondary">The Startup Life LLC</span>. All Rights Reserved.
              </p>
            </div>

            {/* Social Icons */}
            <div className="lqd-column col-md-4 col-xs-12 text-center text-md-right">
              <ul className="social-icon branded-text social-icon-md">
                <li><a href="https://facebook.com/startuplifellc" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/startuplifellc" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
                <li><a href="https://instagram.com/startuplifellc" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                <li><a href="https://linkedin.com/company/thestartuplife" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="https://medium.com/@thestartuplife" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium"></i></a></li>
                <li><a href="https://youtube.com/thestartuplife" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
