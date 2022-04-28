import api from '../api/api.json'
import Hotelcard from './HotelCard';


const Hotels = () => {
  return (
    <div className="app-content">
      {api.map((hotel) => (
        <Hotelcard 
          key={hotel.id}
          name={hotel.name}
          image={hotel.image}
          price={hotel.price}
          amenities={hotel.amenities}
          stars={hotel.stars}
        />
      ))}
    </div>
  );
}

export default Hotels;