import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        {/*generated code*/}
        <section id="about">
          <div className="row section-intro">
            <div className="col-twelve">
              <h5>About</h5>
              <h1>Let me introduce myself.</h1>
              <div className="intro-info">
                <img src="images/profilepic.jpg" alt="Profile Picture" />
                <p className="lead">
                  Hi all, I am Pratiksha. I am a senior at Western Michigan
                  University. I am an aspiring software developer. I am
                  interested in full stack and mobile app development. I like
                  reading books during my free time.
                </p>
              </div>
            </div>
          </div>{" "}
          {/* /section-intro */}
          <div className="row about-content">
            <div className="col-four tab-full">
              <h3>Contact Details</h3>
              <ul className="info-list">
                <li>
                  <span>Pratiksha Adhikari</span>
                </li>
                <li>
                  <span>839B W Walnut St</span>
                </li>
                <li>
                  <span>Kalamazoo, MI, 49007</span>
                </li>
                <li>
                  <span>646-409-5933</span>
                </li>
                <li>
                  <span>pratiksha.adhikari@wmich.edu</span>
                </li>
              </ul>{" "}
              {/* /info-list */}
            </div>
            <div className="col-eight tab-full">
              <h3>Skills</h3>
              <button>Data Structure and Algorithm</button>{" "}
              <button>React</button> <button>Android Development</button>{" "}
              <button>Linux</button> <button>Windows</button>{" "}
              <button>MacOS</button> <button>MySQL</button> <button>Git</button>{" "}
              <ul className="skill-bars">
                <li>
                  <div className="progress percent90">
                    <span>90%</span>
                  </div>
                  <strong>Java</strong>
                </li>
                <li>
                  <div className="progress percent85">
                    <span>85%</span>
                  </div>
                  <strong>Python</strong>
                </li>
                <li>
                  <div className="progress percent80">
                    <span>80%</span>
                  </div>
                  <strong>HTML,CSS,PHP</strong>
                </li>
                <li>
                  <div className="progress percent70">
                    <span>70%</span>
                  </div>
                  <strong>JavaScript</strong>
                </li>
              </ul>{" "}
              {/* /skill-bars */}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
