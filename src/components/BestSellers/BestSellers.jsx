import Card from "../Card/Card";
import { cards } from "../../utils/constants";

function BestSellers() {
  return (
    <div className="bestsellers white dark-text">
      <h2 className="bestsellers__title">O.A.D. Best Selling knitwear</h2>
      <div className="bestsellers__cards">
        {cards.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </div>
    </div>
  );
}

export default BestSellers;
