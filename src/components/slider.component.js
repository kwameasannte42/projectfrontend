import React from "react";
import image1 from "../assets/cinci1.jpg";
import image2 from "../assets/cinci2.jpg";
import image3 from "../assets/cinci3.jpg";
import image4 from "../assets/tql1.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";

const Slider = () => {
  return (
    <div id="carouselExampleIndicators" class="carousel slide container">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div class="carousel-inner rounded-4">
        <div class="carousel-item active">
          <img src={image1} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={image2} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={image3} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={image4} class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
