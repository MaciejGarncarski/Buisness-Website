import { AiOutlineBarChart, AiOutlineExperiment, AiOutlineCalendar } from 'react-icons/ai';
import { Container } from './CardSection.styles';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { Card } from '../Card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { useReducedMotion } from 'framer-motion';
import { Anchor } from '../../Types/types';
import { data } from './Cards.data';

const CardSection = function ({ id }: Anchor) {
  const usesReducedMotion = useReducedMotion();
  let sliderSpeed = 0;
  if (!usesReducedMotion) {
    sliderSpeed = 500;
  }

  const variants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const icons = [AiOutlineBarChart, AiOutlineExperiment, AiOutlineCalendar];

  return (
    <Container id={id} variants={variants} initial="hidden" whileInView="visible">
      <SectionHeading labelText="About us" />
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

export { CardSection };
