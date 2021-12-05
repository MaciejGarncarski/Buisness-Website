import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore, { Navigation } from 'swiper';
import { AiOutlineBarChart, AiOutlineExperiment, AiOutlineCalendar } from 'react-icons/ai';
import Container from './AboutSection.styles';
import Card from '../Card/Card';
import CardTilt from '../CardContainer/CardContainer';
import useReducedMotion from '../../hooks/useReducedMotion';

SwiperCore.use([Navigation]);

import { TypeId } from '../../types/types';

const About = function ({ id }: TypeId) {
  const usesReducedMotion = useReducedMotion();

  let sliderSpeed = 0;
  const checkSliderSpeed = () => {
    if (!usesReducedMotion) {
      sliderSpeed = 600;
    }
  };
  checkSliderSpeed();

  return (
    <Container id={id}>
      <Swiper navigation speed={sliderSpeed} effect="flip" autoplay>
        <SwiperSlide>
          <CardTilt bg="green" border="blue">
            <Card
              label="1"
              heading="About"
              icon={<AiOutlineBarChart />}
              description="Our Company is one of the best in the world. We provide best customer experience in Poland."
            />
          </CardTilt>
        </SwiperSlide>
        <SwiperSlide>
          <CardTilt bg="darkYellow" border="green">
            <Card
              label="2"
              heading="Products"
              icon={<AiOutlineExperiment />}
              description="Products from our company are tested by multiple quality testers."
            />
          </CardTilt>
        </SwiperSlide>
        <SwiperSlide>
          <CardTilt bg="green" border="blue">
            <Card
              label="3"
              heading="CO-OP"
              icon={<AiOutlineCalendar />}
              description="We are opened to cooperation with other companies. Just call us."
            />
          </CardTilt>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default About;
