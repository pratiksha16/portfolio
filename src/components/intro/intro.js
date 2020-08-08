import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        {/*generated code*/}
        <section id="intro">
          <div className="intro-overlay" />
          <div className="intro-content">
            <div className="row">
              <div className="col-twelve">
                <h5>Hello, World.</h5>
                <h1>I'm Pratiksha Adhikari.</h1>

                <a className="button stroke smoothscroll" href="#about">
                  More About Me
                </a>
              </div>
            </div>
          </div>{" "}
          {/* /intro-content */}
          <ul className="intro-social">
            <li>
              <a
                href="https://www.linkedin.com/in/pratiksha-a-678051108/"
                title="LinkedIn "
              >
                <i className="fa fa-linkedin" />
              </a>
            </li>

            <li>
              <a href="https://github.com/pratiksha16" title="Github">
                <i className="fa fa-github" />
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1yACSJlK1O3xGxb2XJqtwfa_SW43udlAo/view?usp=sharing"
                title="Resume"
              >
                <i className="fa fa-file-pdf-o" />
              </a>
            </li>
          </ul>
          {/* /intro-social */}
        </section>
        ;
      </React.Fragment>
    );
  }
}
