import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        {/*generated code*/}
        <section id="resume" class="grey-section">
          <div className="row resume-timeline">
            <div className="col-twelve resume-header">
              <h2>Education</h2>
            </div>
            <div className="col-twelve">
              <div className="timeline-wrap">
                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i class="fa fa-graduation-cap"></i>
                  </div>
                  <div class="timeline-header">
                    <h3>B.S in Computer Science</h3>
                    <p>Expected: May 2021</p>
                  </div>
                  <div class="timeline-content">
                    <h4>Western Michigan University</h4>
                    <p>
                      Attended Western Michigan University from 2018 as a
                      Diether H. Haenicke scholar. Current GPA: 3.91
                    </p>
                  </div>
                </div>
                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i class="fa fa-graduation-cap"></i>
                  </div>
                  <div class="timeline-header">
                    <h3>B.S in Computer Science</h3>
                    <p>Aug 2017- May 2018</p>
                  </div>
                  <div class="timeline-content">
                    <h4>Norwich University</h4>
                    <p>Completed freshman year with a 4.0 GPA.</p>
                  </div>
                </div>

                {/*<h3>Western Michigan University</h3>
                  <p className="info">
                    B.S in Computer Science <span>•</span>{" "}
                    <em className="date">Expected: May 2021</em>
                  </p>
                  <h4> Relevant Coursework</h4>
                  <ul>
                    <li> Data Structures and Algorithms</li>
                    <li>Database Management</li>
                    <li> Web Technologies</li>
                    <li>Android Mobile App Design</li>
                    <li> Discrete Mathematics</li>
                    <li>Linear Algebra</li>
                  </ul>
                  </div>*/}
              </div>{" "}
              {/* item end */}
              {/* item end */}
            </div>{" "}
          </div>
          {/* main-col end */}
          {/* End Education */}
          {/* Work
      ----------------------------------------------- */}
          <div className="row resume-timeline">
            <div className="col-twelve resume-header">
              <h2>Work Experience</h2>
            </div>
            <div className="col-twelve">
              <div className="timeline-wrap">
                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i className="fa fa-briefcase"></i>
                  </div>
                  <div class="timeline-header">
                    <h3>CS Tutor</h3>
                    <p>August 2019 - Present</p>
                  </div>
                  <div class="timeline-content">
                    <h4>STEP Program- Western Michigan University</h4>
                    <p>
                      {" "}
                      Tutored introductory level Computer Science classes for
                      under-classmen at Western Michigan University. Helped
                      students to understand the concepts of object oriented
                      programming. Helped the students with basic programming
                      skills and collaborated with students to complete coding
                      assignments, and helped them debug their codes.
                    </p>
                  </div>
                </div>{" "}
                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i className="fa fa-briefcase"></i>
                  </div>
                  <div class="timeline-header">
                    <h3>Front-End Developer</h3>
                    <p>May 2020 - June 2020</p>
                  </div>
                  <div class="timeline-content">
                    <h4>Delovery</h4>
                    <p>
                      {" "}
                      Integrated HTML5,CSS and JavaScript to createresponsive
                      storefront. Modified existing codes on Shopify to align
                      with the existing user interface.
                    </p>
                  </div>
                </div>{" "}
                {/* item end */}
              </div>
            </div>
          </div>
          {/* End Work */}
          {/* Skills
      ----------------------------------------------- */}
        </section>
      </React.Fragment>
    );
  }
}
