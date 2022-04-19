const Hotelcard = ({ image, name, starts, amenities, price }) => {
  return (
    <div className="card">
      <img src="" alt="" />
      <div>
        <h2>{name}</h2>
        <div>Starts</div>
        <div>Icons</div>
      </div>
      <div>
        <p>Precio por noche por habitacion</p>
        <p>$precio</p>
        <button>VER HOTEL</button>
      </div>
    </div>
  );
}

export default Hotelcard;