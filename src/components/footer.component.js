import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/footer.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footerbackground text-white pt-2 pb-4">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold footernamecolor">
                Queen City Tours
              </h5>
              <p className="footerlinkscolor">
                Welcome to Queen City! A wonderful place to explore attractions.
                View our page and find attractions that fit you!
              </p>
              <div className="">
                <div className="col-md-7 col-lg-12">
                  <ul className="list-unstyled list-inline ">
                    <li
                      className="list-inline-item"
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <a
                        href="https://facebook.com"
                        className="btn-floating btn-sm footerlinkscolor"
                      >
                        <FontAwesomeIcon icon={faFacebook} className="fa-2xl" />
                      </a>
                      <a
                        href="https://twitter.com"
                        className="btn-floating btn-sm footerlinkscolor"
                      >
                        <FontAwesomeIcon icon={faTwitter} className="fa-2xl" />
                      </a>
                      <a
                        href="https://instagram.com"
                        className="btn-floating btn-sm footerlinkscolor"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="fa-2xl"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold footernamecolor">
                Pritum Debnath
              </h5>
              <p>
                <a
                  href="https://www.linkedin.com/in/pritum-debnath-140766104/"
                  className="footerlinkscolor"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/pritumdebnath"
                  className="footerlinkscolor"
                >
                  Github
                </a>
              </p>
              <p>
                <a
                  href="https://pritumdebnath.github.io/portfolio/"
                  className="footerlinkscolor"
                >
                  Portfolio
                </a>
              </p>
              <p>
                <a
                  href="mailto:pritumdebnath@gmail.com"
                  className="footerlinkscolor"
                >
                  Email
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold footernamecolor">
                Gideon Asante
              </h5>
              <p>
                <a
                  href="https://www.linkedin.com/in/gideonasanteacheampong/"
                  className="footerlinkscolor"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/kwameasannte42"
                  className="footerlinkscolor"
                >
                  Github
                </a>
              </p>
              <p>
                <a
                  href="https://kwameasannte42.github.io/portfolio-with-bootstrap/"
                  className="footerlinkscolor"
                >
                  Portfolio
                </a>
              </p>
              <p>
                <a
                  href="mailto:kwameasante42@gmail.comgit"
                  className="footerlinkscolor"
                >
                  Email
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold footernamecolor">
                Ibrahim Abdi
              </h5>
              <p>
                <a
                  href="https://www.linkedin.com/in/ibrahim-abdi-1b9001260/"
                  className="footerlinkscolor"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/IbrahimAbdi2003"
                  className="footerlinkscolor"
                >
                  Github
                </a>
              </p>
              <p>
                <a
                  href="https://ibrahimabdi2003.github.io/portFolio/"
                  className="footerlinkscolor"
                >
                  Portfolio
                </a>
              </p>
              <p>
                <a
                  href="mailto:ibrahimabdi2367@gmail.com"
                  className="footerlinkscolor"
                >
                  Email
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold footernamecolor">
                Douglas Easterling
              </h5>
              <p>
                <a
                  href="https://www.linkedin.com/in/douglas-e-67051b15b/"
                  className="footerlinkscolor"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/Holimon86"
                  className="footerlinkscolor"
                >
                  Github
                </a>
              </p>
              <p>
                <a
                  href="https://holimon86.github.io/portfolio/"
                  className="footerlinkscolor"
                >
                  Portfolio
                </a>
              </p>
              <p>
                <a
                  href="mailto:douglaseasterling@yahoo.com"
                  className="footerlinkscolor"
                >
                  Email
                </a>
              </p>
            </div>
            {/* <hr className="mb-4"/> */}
            {/* <div className=" align-items-center">
                <div className="col-md-7 col-lg-8">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item">
                            <a href="https://facebook.com" className="btn-floating btn-sm text-white">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://twitter.com" className="btn-floating btn-sm text-white">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://instagram.com" className="btn-floating btn-sm text-white">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div> */}
          </div>
        </div>
      </footer>
    );
  }
}
