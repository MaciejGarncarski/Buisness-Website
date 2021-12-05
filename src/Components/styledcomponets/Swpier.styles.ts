import { css } from 'styled-components';

const SwiperStyles = css`
  :root {
    --swiper-theme-color: ${({ theme }) => theme.black};
    --swiper-navigation-size: 3em;
  }
  .swiper {
    width: 100%;
    height: 100%;
    padding: 3em 0;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3em 0;
  }
`;

export default SwiperStyles;
