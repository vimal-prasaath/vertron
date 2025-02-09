import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

import i13 from "assets/images/cars/aston-martin-1.svg";
import i2 from "assets/images/cars/audi-11.svg";
import i3 from "assets/images/cars/bentley.svg";
import i4 from "assets/images/cars/bmw-2.svg";
import i5 from "assets/images/cars/bugatti-2.svg";
import i6 from "assets/images/cars/chevrolet-10.svg";
import i7 from "assets/images/cars/ferrari-ges.svg";
import i8 from "assets/images/cars/fiat-3.svg";
import i9 from "assets/images/cars/ford-8.svg";
import i10 from "assets/images/cars/jaguar-cars.svg";
import i11 from "assets/images/cars/jeep-7.svg";
import i12 from "assets/images/cars/kia.svg";
import i1 from "assets/images/cars/lamborghini.svg";
import i14 from "assets/images/cars/lexus-2.svg";
import i15 from "assets/images/cars/mercedes-benz-9.svg";
import i16 from "assets/images/cars/mitsubishi.svg";
import i17 from "assets/images/cars/nissan-6.svg";
import i18 from "assets/images/cars/opel-6.svg";
import i19 from "assets/images/cars/porsche-6.svg";
import i20 from "assets/images/cars/rolls-royce.svg";
import i21 from "assets/images/cars/skoda-6.svg";
import i22 from "assets/images/cars/suzuki.svg";
import i23 from "assets/images/cars/tesla-motors.svg";
import i24 from "assets/images/cars/toyota-1.svg";
import i25 from "assets/images/cars/volkswagen-10.svg";
import i26 from "assets/images/cars/land-rover-2.svg";

function Logos() {
  const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 9,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,

    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  const logos = [
    i1,
    i2,
    i3,
    i4,
    i5,
    i6,
    i7,
    i8,
    i9,
    i10,
    i11,
    i12,
    i13,
    i14,
    i15,
    i16,
    i17,
    i18,
    i19,
    i20,
    i21,
    i22,
    i23,
    i24,
    i25,
    i26,
  ];
  return (
    <Box className="slider-container" bgcolor={"black"}>
      <Slider {...settings}>
        {logos.map((i, index) => (
          <Box
            key={index}
            height={"10rem"}
            py={4}
            px={4}
            display={"inline-flex !important"}
            alignItems={"center"}
          >
            <img
              src={i}
              alt={`logo-${index + 1}`}
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "contain" }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default Logos;
