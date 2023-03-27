import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/about.style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import image7 from "../assets/pritum.jpeg";
import image8 from "../assets/doug.jpeg";
import image9 from "../assets/abdi.jpeg";
import image10 from "../assets/gid.jpg";
import { Helmet } from "react-helmet";

export default class About extends Component {
  render() {
    const TITLE = "About";
    return (
      <>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <div className=" container-fluid about-middle text-center text-white">
          <h2 className="m-3">About Cincinnati</h2>
          <p className="container cinci">
            Cincinnati, city, seat of Hamilton county, southwestern Ohio, U.S.
            It lies along the Ohio River opposite the suburbs of Covington and
            Newport, Kentucky, 15 miles (24 km) east of the Indiana border and
            about 50 miles (80 km) southwest of Dayton. Cincinnati is Ohio’s
            third largest city, after Columbus and Cleveland. Other suburban
            communities include Norwood and Forest Park in Ohio and Florence in
            Kentucky. Picturesquely situated between the Little Miami and Great
            Miami rivers at their confluences with the Ohio, it is encircled by
            hills rising 400–600 feet (120–180 metres) above the river. It is
            the hub of a metropolitan area that includes portions of Ohio,
            Indiana, and Kentucky. Inc. town, 1802; city, 1819. Area city, 80
            square miles (206 square km). Pop. (2010) 296, 943;
            Cincinnati-Middletown Metro Area, 2,130,151; (2020) 309,317;
            Cincinnati Metro Area, 2,256,884.
          </p>
        </div>

        <div className="team">
          <br />
          <br />
          <h3 className="hhh text-center">The A-Team</h3>

          <div className="container team-cards">
            <div className="row">
              <div className="col-lg-3 col-md-6 p-2">
                <div className="card profile-card-1">
                  <img
                    src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb"
                    alt="profile-sample1"
                    className="background"
                  />
                  <img src={image7} alt="pritum" className="profile" />
                  <div className="card-content">
                    <h2>
                      Pritum Debnath<small>"Hannibal"</small>
                    </h2>
                    <small>
                      Web Developer
                    </small>
                    <div className="icon-block">
                      <a href="https://www.linkedin.com/in/pritum-debnath-140766104/">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="pritum@hotmail.com">
                        {" "}
                        <i className="bi bi-envelope-at-fill"></i>
                      </a>
                      <a href="https://github.com/pritumdebnath">
                        {" "}
                        <i className="bi bi-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 p-2">
                <div className="card profile-card-1">
                  <img
                    src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb"
                    alt="profile-sample1"
                    className="background"
                  />
                  <img src={image8} alt="Doug" className="profile" />
                  <div className="card-content">
                    <h2>
                      Douglas Easterling<small>"Faceman"</small>
                    </h2>
                    <small>
                      Web Developer
                    </small>
                    <div className="icon-block">
                      <a href="https://www.linkedin.com/in/douglas-e-67051b15b/">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="douglaseasterling@yahoo.com">
                        {" "}
                        <i className="bi bi-envelope-at-fill"></i>
                      </a>
                      <a href="https://github.com/Holimon86">
                        {" "}
                        <i className="bi bi-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 p-2">
                <div className="card profile-card-1">
                  <img
                    src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb"
                    alt="profile-sample1"
                    className="background"
                  />
                  <img src={image10} alt="Gideon" className="profile" />
                  <div className="card-content">
                    <h2>
                      Gideon Asante<small>"B.A."</small>
                    </h2>
                    <small>
                      Web Developer
                    </small>
                    <div className="icon-block">
                      <a href="https://www.linkedin.com/in/gideonasanteacheampong/">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="kwameasante42@gmail.com">
                        {" "}
                        <i className="bi bi-envelope-at-fill"></i>
                      </a>
                      <a href="https://github.com/kwameasannte42">
                        {" "}
                        <i className="bi bi-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 p-2">
                <div className="card profile-card-1">
                  <img
                    src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb"
                    alt="profile-sample1"
                    className="background"
                  />
                  <img src={image9} alt="Ibrahim" className="profile" />
                  <div className="card-content">
                    <h2>
                      Ibrahim Abdi<small>"Howling Mad"</small>
                    </h2>
                    <small>
                      Web Developer
                    </small>
                    <div className="icon-block">
                      <a href="https://www.linkedin.com/in/ibrahim-abdi-1b9001260/">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="ibrahimabdi2367@gmail.com">
                        {" "}
                        <i className="bi bi-envelope-at-fill"></i>
                      </a>
                      <a href="https://github.com/IbrahimAbdi2003">
                        {" "}
                        <i className="bi bi-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>

        <div className="container-fluid text-center text-white about-top">
          <p className="container cinci">
            Our website development project is led by a team of four talented
            graduates from a web development bootcamp. Our front-end expert is
            skilled in HTML, CSS, and JavaScript, while our back-end specialist
            excels in languages like Python and Ruby on Rails. Our full-stack
            developer seamlessly integrates features and functionalities, and
            our quality assurance and testing specialist ensures that the
            website meets the highest standards of quality. Together, we are
            committed to creating a beautiful and functional website that
            exceeds our clients' expectations.
          </p>
        </div>
      </>
    );
  }
}
