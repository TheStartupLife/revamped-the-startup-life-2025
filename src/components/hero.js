import React from "react";

const Hero = () => {
  return (
    <section
      className="vc_row fullheight d-flex flex-wrap align-items-end mb-80"
      data-parallax="true"
      data-parallax-options='{"parallaxBG":true}'
      data-slideshow-bg="true"
      data-slideshow-options='{"delay":3000,"effect":"scale","opacity":27,"imageArray":["/assets/demo/bg/bg-31-compressed.png","/assets/demo/bg/bg-41-compressed.png"]}'
    >
      <span className="row-bg-loader">
        <span className="row-bg-loader-inner"></span>
      </span>

      <div className="container">
        <div className="row">
          <div
            className="lqd-column col-md-10 col-md-offset-1 text-center py-7"
            data-custom-animations="true"
            data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1200","delay":"150","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":31,"translateZ":-108,"opacity":0},"animations":{"translateY":0,"translateZ":0,"opacity":1}}'
          >
            <header className="fancy-title">
              <h6 className="text-uppercase font-weight-normal ltr-sp-2 text-white mb-5 mt-5">
                WE LOVE CREATING
              </h6>
              <h2 className="text-white lh-15 mb-4">
                <span className="font-size-3-3x lh-1">digital ideas</span>
              </h2>

              <div className="row">
                <div className="lqd-column col-md-8 col-md-offset-2">
                  <p className="text-white font-size-24 mb-1">
                    The Startup Life is a thriving creative digital media & software development consultancy based in Miami, FL.
                  </p>
                </div>
              </div>
            </header>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="#about"
              className="btn btn-solid text-uppercase circle btn-bordered border-thin font-size-16 font-weight-bold ltr-sp-05 px-2 bg-hover-white text-hover-black mb-2"
              data-localscroll="true"
              data-localscroll-options='{"scrollBelowSection":true}'
            >
              <span>
                <span className="btn-txt">Learn More</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-primary col-xs-12 px-0 py-4">
        <div className="container">
          <div className="row">
            <div className="lqd-column col-md-12">
              <div className="carousel-container carousel-nav-left carousel-nav-md carousel-dots-style1">
                <div
                  className="carousel-items row"
                  data-lqd-flickity='{"cellAlign":"left","prevNextButtons":false,"buttonsAppendTo":"self","pageDots":false,"groupCells":false,"wrapAround":true,"autoPlay":3000,"pauseAutoPlayOnHover":false}'
                >
                  {[
                    "ff-logo.png",
                    "xiexie logo special - 2.jpg",
                    "cfa-logo-color.png",
                    "Seal_of_Miami,_Florida (1).svg",
                    "medicalbae-logo.png",
                    "cfsf-logo.png",
                    "PrettyPenny.png",
                  ].map((filename, index) => (
                    <div
                      className="lqd-column carousel-item col-md-2 col-sm-3 col-xs-4"
                      key={index}
                    >
                      <figure className="text-center opacity-02 reset-opacity-onhover">
                        <img
                          loading="eager"
                          src={`/assets/demo/clients/${filename}`}
                          className="w-70"
                          alt={`Client-${index}`}
                        />
                      </figure>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
