import React from "react";

const HowWeWork = () => {
  return (
    <section className="vc_row pt-50 pb-65">
      <div className="container">
        <div className="row">
          {/* Parallax Image (Left) */}
          <div className="lqd-column col-lg-8 col-md-6">
            <figure
              className="stretch-to-left"
              data-parallax="true"
              data-parallax-from='{"translateY":89}'
              data-parallax-to='{"translateY":-100}'
              data-parallax-options='{"overflowHidden":false,"easing":"linear"}'
            >
              <img src="/assets/demo/misc/xiexie-compressed.jpg" alt="Parallax Image" />
            </figure>
          </div>

          {/* Text Content (Right) */}
          <div
            className="lqd-column col-lg-4 col-md-6 pt-7"
            data-custom-animations="true"
            data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1200","startDelay":"350","delay":"150","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":28,"opacity":0},"animations":{"translateY":0,"opacity":1}}'
          >
            <header className="fancy-title mb-md-9 text-center">
              <h2
                className="mb-md-7"
                data-fittext="true"
                data-fittext-options='{ "compressor": 0.5, "maxFontSize": 65, "minFontSize": 35 }'
              >
                <span className="font-size-1x">How We Work</span>
              </h2>
              <h6 className="font-size-24 font-weight-normal font-style-italic pr-5">
                “Our mission is to produce the highest quality work for every client, on every project”
              </h6>
            </header>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
