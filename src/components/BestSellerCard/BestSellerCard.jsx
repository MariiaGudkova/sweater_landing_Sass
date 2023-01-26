function BestSellerCard(props) {
  const { card } = props;
  return (
    <div className="card">
      <a className="card__link" href="#">
        <img className="card__img" src={card.image} alt={card.title} />
      </a>
      <div className="card__info">
        <p className="card__title">{card.title}</p>
        <p className="card__price">{card.price}</p>
      </div>
      <div className="card__material">
        {card.material.map((item, index) => {
          return (
            <p className="card__addInfo-item" key={index}>
              {item}
            </p>
          );
        })}
      </div>
      <div className="card__sizes">
        {card.sizes.map((item, index) => {
          return (
            <p
              className={
                item.availability ? "card__size" : "card__size_notAvailable"
              }
              key={index}
            >
              {item.title}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default BestSellerCard;
