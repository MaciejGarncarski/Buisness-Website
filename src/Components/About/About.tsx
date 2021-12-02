import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";
import {
  AiOutlineBarChart,
  AiOutlineExperiment,
  AiOutlineCalendar,
} from "react-icons/ai";
import { Container } from "./About.styles";
import Card from "../Card/Card";
import CardTilt from "../CardTilt/CardTilt";
import useReducedMotion from "../../hooks/useReducedMotion";

SwiperCore.use([Navigation]);

const About: React.FC = function () {
  const usesReducedMotion = useReducedMotion();

  let sliderSpeed = 0;
  const checkSliderSpeed = () => {
    if (!usesReducedMotion) {
      sliderSpeed = 600;
    }
  };
  checkSliderSpeed();

  return (
    <Container id="about">
      <Swiper navigation speed={sliderSpeed} effect="flip" autoplay>
        <SwiperSlide>
          <CardTilt bg="green" border="blue">
            <Card
              label="1"
              heading="About"
              icon={<AiOutlineBarChart />}
              description="Nasza firma coś coś tego typu"
            />
          </CardTilt>
        </SwiperSlide>
        <SwiperSlide>
          <CardTilt bg="darkYellow" border="green">
            <Card
              label="2"
              heading="Products"
              icon={<AiOutlineExperiment />}
              description="Jakieś informacje ...."
            />
          </CardTilt>
        </SwiperSlide>
        <SwiperSlide>
          <CardTilt bg="green" border="blue">
            <Card
              label="3"
              heading="CO-OP"
              icon={<AiOutlineCalendar />}
              description="Do uzupełnienia !!!"
            />
          </CardTilt>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default About;
