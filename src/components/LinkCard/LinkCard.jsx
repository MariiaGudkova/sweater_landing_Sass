function LinkCard(props) {
  const { card } = props;
  return (
    <div className="link-card">
      <a className="link-card__link" href="#">
        <img className="link-card__img" src={card.image} alt="woman/man" />
        <p className="link-card__title light-text">{card.title}</p>
      </a>
    </div>
  );
}

export default LinkCard;
