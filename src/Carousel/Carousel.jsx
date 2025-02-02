import React from "react";
import "./Carousel.css";
import { slides } from "../utils/constants";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react";

function Carousel ( {data} ) {
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill />
      {data.map((slides, carousel) => {
        return (
          <img
            src={slides.url}
            alt={slides.alt}
            key={carousel}
            className="carousel__slides"
          />
        );
      })}
      <BsArrowRightCircleFill />
    </div>
  );
};

export default Carousel