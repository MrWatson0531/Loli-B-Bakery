import React from "react";
import Slider from "react-slick";
import "../Carousel/carousel.css";

function Carousel() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div className="slider-container">
      <h2>Slider Syncing (Carousel)</h2>
      <h4>First Slider</h4>
      <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
        <div>
          <image src="">1</image>
        </div>
        <div>
          <image>2</image>
        </div>
        <div>
          <image>3</image>
        </div>
        <div>
          <image>4</image>
        </div>
        <div>
          <image>5</image>
        </div>
        <div>
          <image>6</image>
        </div>
      </Slider>
      <h4>Second Slider</h4>
      <Slider
        asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}
}

export default Carousel;
