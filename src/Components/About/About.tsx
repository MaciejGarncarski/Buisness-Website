import { AiOutlineBarChart, AiOutlineExperiment, AiOutlineCalendar } from 'react-icons/ai';
import { Container } from './About.styles';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Card } from './Card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { useReducedMotion } from 'framer-motion';
import { Anchor } from '../../types/types';
import { data } from '../../data/cards';
import { variants } from '../../assets/animations/about';
const About = function ({ id }: Anchor) {
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
            <SwiperSlide key={idx}>
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
