import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Row, Col } from "react-bootstrap";
import company1 from '../assets/img/company1.png';
import company2 from '../assets/img/company2.png';
import company3 from '../assets/img/company3.png';

const images = [
  company1,
  company2,
  company3,
  // Add more images as needed
];

export const WorkedWith = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Container>
        <Row>
            <Col>
            <div className="worked-with-container">
      <div className="heading-container">
        <h2>Companies We Have Worked With</h2>
      </div>
      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image} alt={`company-${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
            </Col>
        </Row>
    </Container>
   
  );
};

