import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>
              {/* portfolio-wrapper */}
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01" title>
                      <img alt="" src="images/portfolio/brain.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Brain Trainer</h5>
                          <p>Android Development</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-02" title>
                      <img alt="" src="images/portfolio/tele.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Teleshop Nepal</h5>
                          <p>Web Development</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-03" title>
                      <img alt="" src="images/portfolio/Coronavirus.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>CoronaVirus_Tracker</h5>
                          <p>Andriod Development</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-04" title>
                      <img alt="" src="images/portfolio/resume.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Resume Builder</h5>
                          <p>Web Development</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-05" title>
                      <img alt="" src="images/portfolio/farmerboy.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>WhereUAt??</h5>
                          <p>Andriod Development</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                {/* <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-06" title>
                      <img alt="" src="images/portfolio/girl.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Girl</h5>
                          <p>Photography</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end 
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-07" title>
                      <img alt="" src="images/portfolio/origami.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Origami</h5>
                          <p>Illustrration</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end 
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-08" title>
                      <img alt="" src="images/portfolio/retrocam.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Retrocam</h5>
                          <p>Web Development</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
              </div>{" "}
              {/* portfolio-wrapper end */}
            </div>{" "}
            {/* twelve columns end */}
            {/* Modal Popup
            --------------------------------------------------------------- */}
            <div id="modal-01" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/m-brain.png"
                alt=""
              />
              <div className="description-box">
                <h4>Brain Trainer</h4>
                <p>
                  A mathematical brain teaser game to solve problems as much as
                  you can in 30 secs.
                </p>
              </div>
              <div className="link-box">
                <a href="images/portfolio/modals/brain_trainer.gif"> Demo</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-01 End */}
            <div id="modal-02" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/m-tele.png"
                alt=""
              />
              <div className="description-box">
                <h4>Teleshop Nepal</h4>
                <p>
                  A website for E-Commerce platform for buying variety of
                  products.
                </p>
              </div>
              <div className="link-box">
                <i className="fa fa-globe" />{" "}
                <a href="http://teleshop-n.epizy.com/">Live Demo</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-02 End */}
            <div id="modal-03" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/Coronavirus.jpg"
                alt=""
              />
              <div className="description-box">
                <h4>CoronaVirus_Tracker</h4>
                <p>
                  An android application where people can view the global
                  statistics of corona-virus cases as well as of the individual
                  countries.
                </p>
              </div>
              <div className="link-box">
                <a href="https://github.com/pratiksha16/Coronavirus_Tracker">
                  <i className="fa fa-github fa-2x"></i>
                </a>{" "}
                <a href="https://drive.google.com/file/d/1HoundcOovRTVetsZOIPu6vit1VVxmVVY/view?usp=sharing">
                  Demo Video
                </a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-03 End */}
            <div id="modal-04" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/resume.jpg"
                alt=""
              />
              <div className="description-box">
                <h4>Resume Builder</h4>
                <p>
                  A website that builds resume for you using the automatic
                  Resume templates.
                </p>
              </div>
              <div className="link-box">
                <a href="https://github.com/jshresth/Resume_Builder">
                  {" "}
                  <i className="fa fa-github fa-2x"></i>
                </a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-04 End */}
            <div id="modal-05" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/m-farmerboy.jpg"
                alt=""
              />
              <div className="description-box">
                <h4>WhereUAt??</h4>
                <p>
                  An andriod application to track the location of your friend in
                  case of emergencies.
                </p>
              </div>
              <div className="link-box">
                <a href="https://github.com/pratiksha16/FindMyFriends">
                  {" "}
                  <i className="fa fa-github fa-2x"></i>
                </a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-05 End */}
            <div id="modal-06" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/m-girl.jpg"
                alt=""
              />
              <div className="description-box">
                <h4>Girl</h4>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Photography
                </span>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-06 End */}
            <div id="modal-07" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/m-origami.jpg"
                alt=""
              />
              <div className="description-box">
                <h4>Origami</h4>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Branding, Illustration
                </span>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-07 End */}
            <div id="modal-08" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/m-retrocam.jpg"
                alt=""
              />
              <div className="description-box">
                <h4>Retrocam</h4>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Webdesign, Photography
                </span>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-01 End */}
          </div>{" "}
          {/* row End */}
        </section>
      </React.Fragment>
    );
  }
}
