



const Hotelcard = ({ image, name, stars, amenities, price }) => {

  const priceToUSDollars = (price) => {
    const newPrice = price * 0.0088
    const priceDollars = newPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD', currencyDisplay: 'code', minimumFractionDigits: 2})
    return priceDollars
  }

  return (
    <div className="card">

      <div className="card-img">
        <img src={`../../src/assets/images/hotels/${image}`} alt="" />
      </div>
      {/* <div className="cover" style={{ backgroundImage: `../../src/assets/images/hotels/${image}` }}></div> */}


      {/* <div className="card-body"> */}
        <div className="card-content">

          <h3 className="override">{name}</h3>

          <div className="card-stars">
            {[...Array(stars)].map((svg, index) => (
              <img key={index} className="img-svg" src={`../../src/assets/icons/filters/star.svg`} />
            ))}
          </div>

          <div className="card-amenities">
            {amenities.map((svg, index) => (
              <img key={index} className="img-svg" src={`../../src/assets/icons/amenities/${svg}.svg`} />
            ))}
          </div>
        </div>

        <div className="card-price">
          <p className="card-price-desc override">Precio por noche por habitacion</p>
          {/* <p className="card-price-value override">USD {price * 0.0088}</p> */}
          <p className="card-price-value override">{priceToUSDollars(price)}</p>
          <button className="override">VER HOTEL</button>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Hotelcard;