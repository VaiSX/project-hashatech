import React from "react";
import Slider from "react-slick";
import './clients.scss';

const Clientsc = () => {
  var settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024, // Large devices
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768, // Medium devices
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="clients">
      <h1>OUR CLIENTS</h1>
      <div className="slider-main">
        <Slider {...settings}>
          <div>
            <img src="logo1.png" alt="Company Logo 1" />
          </div>
          <div>
            <img src="logo2.png" alt="Company Logo 2" />
          </div>
          <div>
            <img src="logo3.png" alt="Company Logo 3" />
          </div>
          <div>
            <img src="logo4.png" alt="Company Logo 4" />
          </div>
          <div>
            <img src="logo5.png" alt="Company Logo 5" />
          </div>
          <div>
            <img src="logo6.png" alt="Company Logo 6" />
          </div>
          <div>
            <img src="logo6.png" alt="Company Logo 6" />
          </div>
          <div>
            <img src="logo6.png" alt="Company Logo 6" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Clientsc;
