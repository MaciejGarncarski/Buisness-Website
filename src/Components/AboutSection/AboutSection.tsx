import { AiOutlineBarChart, AiOutlineExperiment, AiOutlineCalendar } from 'react-icons/ai';
import { useReducedMotion } from '../../Hooks/useReducedMotion';
import { Container } from './AboutSection.styles';
import { CardTilt } from '../CardContainer/CardContainer';
import { TypeId } from '../../Types/types';
import { data } from './Cards.data';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { SectionLabel } from '../SectionLabel/SectionLabel';
SwiperCore.use([Navigation]);

const AboutSection = function ({ id }: TypeId) {
  const usesReducedMotion = useReducedMotion();
  let sliderSpeed = 0;
  const checkSliderSpeed = () => {
    if (!usesReducedMotion) {
      sliderSpeed = 600;
    }
  };
  checkSliderSpeed();

  const variants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
    hidden: {
      x: -100,
      opacity: 0,
    },
  };

  return (
    <Container id={id} variants={variants} initial="hidden" whileInView="visible">
      <SectionLabel labelText="About us" />
      <Swiper navigation speed={sliderSpeed}>
        <SwiperSlide>
          <CardTilt
            bg="green"
            border="blue"
            label={data[0].label}
            heading={data[0].heading}
            icon={<AiOutlineBarChart />}
            description={data[0].description}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTilt
            bg="darkYellow"
            border="green"
            label={data[1].label}
            heading={data[1].heading}
            icon={<AiOutlineExperiment />}
            description={data[1].description}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTilt
            bg="green"
            border="blue"
            label={data[2].label}
            heading={data[2].heading}
            icon={<AiOutlineCalendar />}
            description={data[2].description}
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export { AboutSection };
