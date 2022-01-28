/* eslint-disable import/no-unassigned-import */
/* eslint-disable import/no-unresolved */
import { useReducedMotion } from 'framer-motion';
import { AiOutlineBarChart, AiOutlineExperiment, AiOutlineCalendar } from 'react-icons/ai';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { variants } from '../../Assets/animations/about';
import { data } from '../../Data/cards';
import { SectionTitle } from '../SectionTitle/SectionTitle';

import { Container } from './About.styles';
import { Card } from './Card/Card';

import 'swiper/css';
import 'swiper/css/navigation';

type Anchor = {
  id?: string;
};

const About = ({ id }: Anchor) => {
  const usesReducedMotion = useReducedMotion();
  let sliderSpeed = 0;
  if (!usesReducedMotion) {
    sliderSpeed = 500;
  }

  const icons = [AiOutlineBarChart, AiOutlineExperiment, AiOutlineCalendar];

  return (
    <Container id={id} variants={variants} initial="hidden" whileInView="visible">
      <SectionTitle labelText="About us" />
      <Swiper navigation modules={[Navigation]} speed={sliderSpeed}>
        {data.map(({ bg, border, label, heading, description }, idx) => {
          const Icon = icons[idx];
          return (
            <SwiperSlide key={label}>
              <Card
                bg={bg}
                border={border}
                Icon={<Icon />}
                heading={heading}
                description={description}
                label={label}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export { About };
