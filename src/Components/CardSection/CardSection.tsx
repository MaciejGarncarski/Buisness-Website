import { AiOutlineBarChart, AiOutlineExperiment, AiOutlineCalendar } from 'react-icons/ai';
import useReducedMotion from '../../Hooks/useReducedMotion';
import Container from './CardSection.styles';
import loadable from '@loadable/component';
import { TypeId } from '../../Types/types';
import { data } from './Cards.data';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
SwiperCore.use([Navigation]);
const Card = loadable(() => import('../Card/Card'));
const CardTilt = loadable(() => import('../CardContainer/CardContainer'));

const CardSection = function ({ id }: TypeId) {
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
      opacity: 1,
      transition: {
        duration: 1.4,
        ease: 'backInOut',
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <Container id={id} variants={variants} initial="hidden" whileInView="visible">
      <Swiper navigation speed={sliderSpeed}>
        <SwiperSlide>
          <CardTilt bg="green" border="blue">
            <Card
              label={data[0].label}
              heading={data[0].heading}
              icon={<AiOutlineBarChart />}
              description={data[0].description}
            />
          </CardTilt>
        </SwiperSlide>
        <SwiperSlide>
          <CardTilt bg="darkYellow" border="green">
            <Card
              label={data[1].label}
              heading={data[1].heading}
              icon={<AiOutlineExperiment />}
              description={data[1].description}
            />
          </CardTilt>
        </SwiperSlide>
        <SwiperSlide>
          <CardTilt bg="green" border="blue">
            <Card
              label={data[2].label}
              heading={data[2].heading}
              icon={<AiOutlineCalendar />}
              description={data[2].description}
            />
          </CardTilt>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default CardSection;
