import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore, { Navigation } from 'swiper';
import { AiOutlineBarChart, AiOutlineExperiment, AiOutlineCalendar } from 'react-icons/ai';
import Container from './CardSection.styles';
import useReducedMotion from '../../Hooks/useReducedMotion';

import loadable from '@loadable/component';

const Card = loadable(() => import('../Card/Card'));
const CardTilt = loadable(() => import('../CardContainer/CardContainer'));

SwiperCore.use([Navigation]);

import { TypeId } from '../../Types/types';

const CardSection = function ({ id }: TypeId) {
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
              heading="Services"
              icon={<AiOutlineExperiment />}
              description="Courses from our company are tested by multiple quality testers and have got"
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

export default CardSection;
