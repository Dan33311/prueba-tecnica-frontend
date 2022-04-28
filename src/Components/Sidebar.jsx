const Sidebar = () => {
  return (
    <div  className="side">
      <p className="filters override">Filtros</p>
      <div className="sidebar">

        <div className="hotel-name-section">

          <div className="hotel-title">
            <p className="hotel-name override">Buscar por nombre del hotel</p>
          </div>

          <div className="hotel-search">
            <img className="search-icon img-svg" src={`../../src/assets/icons/filters/search.svg`} />
            <div className="hotel-input">
              <input 
                type="text"
                placeholder="Nombre del hotel" />
            </div>
          </div>
        </div>


        <div className="hotel-stars">

          <div className="hotels-stars-section">
            <img className="star-icon img-svg" src={`../../src/assets/icons/filters/star.svg`} />
            <p className="stars-title">Estrellas</p>
          </div>

          <div className="stars-check">
            <form action="">
              <input type="checkbox" />
              <label htmlFor="">
                <img className="star-icon img-svg" src={`../../src/assets/icons/filters/star.svg`} />
              </label><br />
              <input type="checkbox" />
              <label htmlFor="">
                <img className="star-icon img-svg" src={`../../src/assets/icons/filters/star.svg`} />
                <img className="star-icon img-svg" src={`../../src/assets/icons/filters/star.svg`} />
              </label><br />
              <input type="checkbox" />
              <label htmlFor="">
                <img className="star-icon img-svg" src={`../../src/assets/icons/filters/star.svg`} />
                <img className="star-icon img-svg" src={`../../src/assets/icons/filters/star.svg`} />
                <img className="star-icon img-svg" src={`../../src/assets/icons/filters/star.svg`} />
              </label><br />
              <input type="checkbox" />
              <label htmlFor="">
                <img className="star-icon img-svg" src={`../../src/assets/icons/filters/star.svg`} />
                <img className="star-icon img-svg" src={`../../src/assets/icons/filters/star.svg`} />
                <img className="star-icon img-svg" src={`../../src/assets/icons/filters/star.svg`} />
                <img className="star-icon img-svg" src={`../../src/assets/icons/filters/star.svg`} />
              </label><br />
              <input type="checkbox" />
              <label htmlFor="">
                <img className="star-icon img-svg" src={`../../src/assets/icons/filters/star.svg`} />
                <img className="star-icon img-svg" src={`../../src/assets/icons/filters/star.svg`} />
                <img className="star-icon img-svg" src={`../../src/assets/icons/filters/star.svg`} />
                <img className="star-icon img-svg" src={`../../src/assets/icons/filters/star.svg`} />
                <img className="star-icon img-svg" src={`../../src/assets/icons/filters/star.svg`} />
              </label><br />
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;