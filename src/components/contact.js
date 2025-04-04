import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="vc_row pt-110 pb-120 mt-40"
      style={{ backgroundImage: "url(/assets/demo/bg/1920x904.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
      data-parallax="true"
      data-parallax-options='{ "parallaxBG": true }'
    >
      <div className="container">
        <div className="row">
          <div
            className="lqd-column col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center"
            data-custom-animations="true"
            data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1200","delay":"160","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":52,"translateZ":-142,"rotateX":-64,"opacity":0},"animations":{"translateY":0,"translateZ":0,"rotateX":0,"opacity":1}}'
          >
            <header className="fancy-title">
              <h2
                className="mt-0 mb-4 text-white"
                data-fittext="true"
                data-fittext-options='{ "compressor": 0.65, "maxFontSize": 72, "minFontSize": 30 }'
              >
                We are optimists who love to work together
              </h2>
              <p className="mb-60 font-size-24 text-white px-4">
                Let’s collaborate and make an impact with our cross-discipline approach to design and development.
              </p>
            </header>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://yi9w2vn5pmo.typeform.com/to/Ijtk7Xpa"
              className="btn btn-solid text-uppercase circle btn-bordered border-thin font-size-16 font-weight-bold ltr-sp-05 px-2"
            >
              <span>
                <span className="btn-txt">Get Started</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
