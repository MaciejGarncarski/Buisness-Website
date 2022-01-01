import { Container, Frame } from './Map.styles';
const Map = () => {
  return (
    <Container>
      <Frame src="https://www.openstreetmap.org/export/embed.html?bbox=21.404639482498172%2C50.04930973983964%2C21.413598060607914%2C50.05245804078455&zoom=12&amp;layer=mapnik" />
    </Container>
  );
};

export { Map };
