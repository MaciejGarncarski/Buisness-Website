import { Container, Frame } from './Map.styles';

const Map = () => {
  return (
    <Container>
      <Frame
        title="company location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2561.885245148878!2d21.409462133326258!3d50.05098095833682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2spl!4v1641290095615!5m2!1sen!2spl"
      />
    </Container>
  );
};

export { Map };
