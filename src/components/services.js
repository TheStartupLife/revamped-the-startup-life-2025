import React from "react";

const Services = () => {
  return (
    <section id="services" className="vc_row pt-80 pb-80">
      <div className="container">
        <div className="row">
          {/* Column 1 - Branded eCommerce */}
          <div className="lqd-column col-md-3 col-sm-8">
            <div
              className="lqd-parallax"
              data-parallax="true"
              data-parallax-from='{"translateY":100}'
              data-parallax-to='{"translateY":-170}'
              data-parallax-options='{"easing":"linear", "overflowHidden": false}'
              data-custom-animations="true"
              data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1200","delay":"150","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":35,"opacity":0},"animations":{"translateY":0,"opacity":1}}'
            >
              <header className="fancy-title">
                <h6 className="font-size-12 text-secondary font-weight-bold ltr-sp-025">01</h6>
                <h2 className="mb-25">Branded eCommerce</h2>
                <p className="mb-45">
                  Our eCommerce design starts and ends with a best-in-class experience strategy that builds brands and drives transactions.
                </p>
              </header>

              <ul className="reset-ul font-size-11 lh-15 font-weight-bold ltr-sp-1 text-dark">
                <li className="mb-15">BRAND EXPERIENCE</li>
                <li className="mb-15">PLATFORM & POSITIONING</li>
                <li className="mb-15">TRENDS & INSIGHTS</li>
                <li className="mb-15">MARKETING STRATEGY</li>
              </ul>
            </div>
          </div>

          {/* Column 2 - Digital Experience */}
          <div className="lqd-column col-md-4 col-sm-8 col-md-offset-1">
            <div className="row">
              <div className="lqd-column col-md-10 col-md-offset-1">
                <div
                  className="lqd-parallax"
                  data-parallax="true"
                  data-parallax-from='{"translateY":100}'
                  data-parallax-to='{"translateY":-100}'
                  data-parallax-options='{"easing":"linear", "overflowHidden": false}'
                  data-custom-animations="true"
                  data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1200","delay":"150","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":35,"opacity":0},"animations":{"translateY":0,"opacity":1}}'
                >
                  <header className="fancy-title">
                    <h6 className="font-size-12 text-secondary font-weight-bold ltr-sp-025">02</h6>
                    <h2 className="mb-25">Digital Experience</h2>
                    <p className="mb-45">
                      Through a deep understanding of our audience’s makeup and motivations, we design digital experiences that connect with people — all while providing you with the software solutions your business needs to optimize performance and scale.
                    </p>
                  </header>

                  <ul className="reset-ul font-size-11 lh-15 font-weight-bold ltr-sp-1 text-dark">
                    <li className="mb-15">WEB DESIGN</li>
                    <li className="mb-15">MOBILE APP DESIGN</li>
                    <li className="mb-15">ALEXA SKILL</li>
                    <li className="mb-15">UX / UI DESIGN</li>
                    <li className="mb-15">AWS CLOUD MIGRATION</li>
                    <li className="mb-15">DASHBOARD & TOOL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 - Branding Strategy */}
          <div className="lqd-column col-md-3 col-sm-8 col-md-offset-1">
            <div
              className="lqd-parallax"
              data-parallax="true"
              data-parallax-from='{"translateY":100}'
              data-parallax-to='{"translateY":-29}'
              data-parallax-options='{"easing":"linear", "overflowHidden": false}'
              data-custom-animations="true"
              data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1200","delay":"150","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":35,"opacity":0},"animations":{"translateY":0,"opacity":1}}'
            >
              <header className="fancy-title">
                <h6 className="font-size-12 text-secondary font-weight-bold ltr-sp-025">03</h6>
                <h2 className="mb-25">Branding Strategy</h2>
                <p className="mb-45">
                  We build and activate brands through cultural insight, strategic vision, and the power of emotion across every element of its expression.
                </p>
              </header>

              <ul className="reset-ul font-size-11 lh-15 font-weight-bold ltr-sp-1 text-dark">
                <li className="mb-15">COMMUNICATIONS</li>
                <li className="mb-15">LOGO & IDENTITY</li>
                <li className="mb-15">CONTENT MANAGEMENT</li>
                <li className="mb-15">SYSTEM & GUIDES</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
