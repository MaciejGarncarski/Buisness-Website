import { Container, Frame } from './Map.styles';
const Map = () => {
  return (
    <Container>
      <Frame data="https://www.openstreetmap.org/export/embed.html?bbox=21.400605440139774%2C50.04776306995946%2C21.418522596359253%2C50.0540596682347&amp;layer=mapnik&amp;marker=50.05091147236601%2C21.40956401824951" />
    </Container>
  );
};

export { Map };
