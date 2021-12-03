import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Container from './ContactSection.styles';

const ContactSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Container id={id}>
      <MapContainer
        style={{ width: '100%', height: '100%' }}
        center={[50.05083, 21.40989]}
        zoom={16}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[50.05083, 21.40989]}>
          <Popup>Siedziba żula</Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
};

export default ContactSection;
