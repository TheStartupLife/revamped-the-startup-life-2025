import React from "react";

const OurWork = () => {
  return (
    <section className="vc_row pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="lqd-column col-md-12">
            <div className="carousel-container carousel-nav-circle carousel-nav-bordered carousel-nav-sm" data-filterable-carousel="true">
              <div className="row">
                {/* Title and Filters */}
                <div className="lqd-column col-xs-12">
                  <div className="liquid-filter-items align-items-end justify-content-between mb-7" id="portfolio-carousel-1">
                    <div className="liquid-filter-items-inner">
                      <span className="liquid-filter-items-label size-xxl font-weight-bold my-0">Our Work</span>
                      <ul className="filter-list text-uppercase ltr-sp-1 filter-list-inline size-sm font-weight-bold">
                        <li className="active" data-filter="*"><span>All Categories</span></li>
                        <li data-filter=".ecommerce"><span>Ecommerce</span></li>
                        <li data-filter=".digital"><span>Digital Experience</span></li>
                        <li data-filter=".branding"><span>Branding Strategy</span></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Carousel Items */}
                <div className="lqd-column col-xs-12">
                  <div
                    className="carousel-items row pf-carousel-equal-height"
                    data-lqd-flickity='{"equalHeightCells": true, "filters": "#portfolio-carousel-1", "prevNextButtons": true, "navArrow": 6, "fullwidthSide": true, "buttonsAppendTo": "#portfolio-carousel-1"}'
                    data-custom-animations="true"
                    data-ca-options='{"triggerHandler":"inview","animationTarget":".ld-pf-item","animateTargetsWhenVisible":"true","duration":"1000","delay":100,"easing":"easeOutQuint","initValues":{"translateX":36,"opacity":0},"animations":{"translateX":0,"opacity":1}}'
                  >

                    {/* Example Project: GetHousing */}
                    <div className="carousel-item col-lg-8 col-md-6 col-xs-12 digital">
                      <div className="ld-pf-item pf-hover-shadow pf-details-visible pf-details-full title-size-48">
                        <div className="ld-pf-inner">
                          <div className="ld-pf-image">
                            <figure style={{ backgroundImage: "url(/assets/demo/portfolio/portfolio-3-compressed.jpg)" }}>
                              <img src="/assets/demo/portfolio/portfolio-3-compressed.jpg" alt="GetHousing" />
                            </figure>
                          </div>
                          <div className="ld-pf-bg bg-gradient-black-transparent-bt"></div>
                          <div className="ld-pf-details">
                            <div className="ld-pf-details-inner">
                              <h3 className="ld-pf-title h4 font-weight-semibold">GetHousing City of Miami Housing Project</h3>
                              <p className="ld-pf-category ld-pf-category-lined">
                                <span className="ld-pf-category-item font-style-italic">UI/UX R&D</span>
                                <span className="read-more color-primary text-uppercase font-weight-bold ltr-sp-05 text-primary font-size-14 ml-2">Discover More</span>
                              </p>
                            </div>
                          </div>
                          <a href="#" className="liquid-overlay-link" aria-label="Project Link"></a>
                        </div>
                      </div>
                    </div>

                    {/* Example Project: MedicalBae */}
                    <div className="carousel-item col-lg-4 col-md-6 col-xs-12 ecommerce">
                      <div className="ld-pf-item pf-hover-shadow pf-details-visible pf-details-full title-size-48">
                        <div className="ld-pf-inner">
                          <div className="ld-pf-image">
                            <figure style={{ backgroundImage: "url(/assets/demo/portfolio/medicalbae-compressed.jpg)" }}>
                              <img src="/assets/demo/portfolio/medicalbae-compressed.jpg" alt="MedicalBae" />
                            </figure>
                          </div>
                          <div className="ld-pf-bg bg-gradient-black-transparent-bt"></div>
                          <div className="ld-pf-details">
                            <div className="ld-pf-details-inner">
                              <h3 className="ld-pf-title h4 font-weight-semibold">MedicalBae - Web Design</h3>
                              <p className="ld-pf-category ld-pf-category-lined">
                                <span className="ld-pf-category-item font-style-italic">R&D</span>
                                <span className="read-more color-primary text-uppercase font-weight-bold ltr-sp-05 text-primary font-size-14 ml-2">Discover More</span>
                              </p>
                            </div>
                          </div>
                          <a href="#" className="liquid-overlay-link" aria-label="Project Link"></a>
                        </div>
                      </div>
                    </div>

                    {/* Example Project: Pretty Penny */}
                    <div className="carousel-item col-lg-5 col-md-6 col-xs-12 branding">
                      <div className="ld-pf-item pf-hover-shadow pf-details-visible pf-details-full title-size-48">
                        <div className="ld-pf-inner">
                          <div className="ld-pf-image">
                            <figure style={{ backgroundImage: "url(/assets/demo/portfolio/prettypenny-compressed.jpg)" }}>
                              <img src="/assets/demo/portfolio/prettypenny-compressed.jpg" alt="Pretty Penny" />
                            </figure>
                          </div>
                          <div className="ld-pf-bg bg-gradient-black-transparent-bt"></div>
                          <div className="ld-pf-details">
                            <div className="ld-pf-details-inner">
                              <h3 className="ld-pf-title h4 font-weight-semibold">Pretty Penny rebranding</h3>
                              <p className="ld-pf-category ld-pf-category-lined">
                                <span className="ld-pf-category-item font-style-italic">Brand strategy</span>
                                <span className="read-more color-primary text-uppercase font-weight-bold ltr-sp-05 text-primary font-size-14 ml-2">Discover More</span>
                              </p>
                            </div>
                          </div>
                          <a href="#" className="liquid-overlay-link" aria-label="Project Link"></a>
                        </div>
                      </div>
                    </div>

                    {/* Add more projects here as needed... */}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
