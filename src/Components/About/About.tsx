import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";
import { Container } from "./About.styles";
import Card from "../Card/Card";
import CardTilt from "../CardTilt/CardTilt";

SwiperCore.use([Navigation]);

const About: React.FC = function () {
  return (
    <Container id="about">
      <Swiper navigation>
        <SwiperSlide>
          <CardTilt bg="green" border="blue">
            <Card label="1" heading="About us" />
          </CardTilt>
        </SwiperSlide>
        <SwiperSlide>
          <CardTilt bg="blue" border="green">
            <Card label="2" heading="Our products" />
          </CardTilt>
        </SwiperSlide>
        <SwiperSlide>
          <CardTilt bg="green" border="blue">
            <Card label="3" heading="Firm" />
          </CardTilt>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default About;
