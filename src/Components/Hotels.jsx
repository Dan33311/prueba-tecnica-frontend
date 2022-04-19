import api from '../api/api.json'
import Hotelcard from './HotelCard';


const Hotels = () => {
  return (
    <>
      {api.map((hotel) => (
        <Hotelcard 
          name={hotel.name}
        />
      ))}
    </>
  );
}

export default Hotels;