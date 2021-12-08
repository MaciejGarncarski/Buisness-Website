import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  return (
    <MapContainer center={[50.05083, 21.40989]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[50.05083, 21.40989]}>
        <Popup>Siedziba żula</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
