import React from "react";
import Slider from "react-slick";

import { useState, useRef, useEffect } from "react";

import "../Carousel/carousel.css";
import image1 from "../Assets/images/Snacks_1.jpg";
import image2 from "../Assets/images/Snacks_2.jpg";
import image3 from "../Assets/images/Snacks_3.jpg";
import image4 from "../Assets/images/Snacks_4.jpg";
import image5 from "../Assets/images/Snacks_5.jpg";
import image6 from "../Assets/images/Snacks_6.jpg";
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

// function Carousel() {
//   const [nav2, setNav2] = useState("");
//   let sliderRef = useRef(null);

//   useEffect(() => {
//     setNav2(sliderRef);
//   }, []);
//   return (
//     <div className="slider-container">
//       <Slider asNavFor={nav2} ref={(slider) => (sliderRef = slider)}>
//         <div>
//           <img src={image1} />
//         </div>
//         <div>
//           <img src={image2} />
//         </div>
//         <div>
//           <img src={image3} />
//         </div>
//         <div>
//           <img src={image4} />
//         </div>
//         <div>
//           <img src={image5} />
//         </div>
//         <div>
//           <img src={image6} />
//         </div>
//       </Slider>
//     </div>
//   );
// }

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <img src={image2} alt="" />
        </div>
        <div>
          <img src={image3} alt="" />
        </div>
        <div>
          <img src={image4} alt="" />
        </div>
        <div>
          <img src={image5} alt="" />
        </div>
        <div>
          <img src={image6} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
