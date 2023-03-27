import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image4 from "../assets/soccer.png";
import image5 from "../assets/reds.png";
import image6 from "../assets/bengals.png";
import "../components/style/home.style.css";
import { Helmet } from 'react-helmet';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGif: false,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({ showGif: true });
  }

  render() {
    const TITLE = 'Home';
    return (
      <>
      <Helmet>
          <title>{ TITLE }</title>
      </Helmet>
      <div id="home-section" style={{ position: "relative" }}>
        <h2 className="text-center pride">Pride of Cincinnati!</h2>
        <hr />
        <section className="destinations container my-5">
          <div className="row text-center">
            <div className="col-lg-4 col-sm-4 text-center">
              <h5 className="p-3 hhh">FC Cincinnati</h5>
              <img className="home-images img-fluid" src={image4} alt="responsive" />
            </div>
            <div className="col-lg-4 col-sm-4 text-center">
              <h5 className="p-3 hhh" onClick={this.handleButtonClick}>Reds</h5>
              {this.state.showGif && (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <img
                    src="https://i.gifer.com/28g6.gif"
                    alt="Fireworks"
                    style={{ width: '100%', height: 'auto', position: 'absolute', top: 0, left: 0 }}
                  />
                  <div  style={{ position: 'relative', top: '200px' }}>
                  <marquee behavior="scroll" direction="left">
                    <img
                      src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1034da38251751.575a73ca2a072.gif"
                      alt="Marching Band"
                      style={{ width: '200px', height: '200px' }}
                    />
                    </marquee>
                  </div>
                  <div scrollamount='50' style={{ position: 'relative', top: '200px' }}>
                  <marquee behavior="scroll" direction="left">
                    <img
                      src="https://spng.pngfind.com/pngs/s/680-6803351_sad-cat-meme-banana-hd-png-download.png"
                      alt="jojo bannana cat"
                      style={{ width: '200px', height: '200px' }}
                    />
                    </marquee>
                  </div>
                </div>
              )}
              <img className="home-images img-fluid" src={image5} alt="Responsive" />
            </div>
            <div className="col-lg-4 col-sm-4 text-center">
              <h5 className="p-3 hhh">Bengals</h5>
              <img className="home-images img-fluid" src={image6} alt="Responsive" />
            </div>
          </div>
        </section>
      </div>
      </>
    );
  }
}
