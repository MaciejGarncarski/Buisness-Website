import { css } from 'styled-components';

const LeafletStyles = css`
  .leaflet-popup-content-wrapper {
    box-shadow: -0.5em 0.5em ${({ theme }) => theme.blue};
    border-radius: 0;
    border: 2px solid ${({ theme }) => theme.black};
  }
  .leaflet-popup-tip {
    border: 2px solid ${({ theme }) => theme.black};
  }
  .leaflet-container a.leaflet-popup-close-button {
    color: ${({ theme }) => theme.blue};
  }
  .leaflet-popup-content {
    color: ${({ theme }) => theme.black};
  }
  .leaflet-touch .leaflet-control-layers,
  .leaflet-touch .leaflet-bar {
    border: 2px solid ${({ theme }) => theme.blue};
  }
`;

export { LeafletStyles };
