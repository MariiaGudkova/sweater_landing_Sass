import BestSellerCard from "../BestSellerCard/BestSellerCard";

function BestSellers(props) {
  const { lang } = props;
  return (
    <div className="bestsellers white dark-text">
      <h2 className="bestsellers__title">{lang.BEST_SELLERS}</h2>
      <div className="bestsellers__cards">
        {lang.cards.map((card) => {
          return <BestSellerCard card={card} key={card.id} />;
        })}
      </div>
    </div>
  );
}

export default BestSellers;
