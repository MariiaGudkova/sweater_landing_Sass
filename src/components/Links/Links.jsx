import LinkCard from "../LinkCard/LinkCard";
import { linksCard } from "../../utils/constants";

function Links() {
  return (
    <div className="links">
      {linksCard.map((card, index) => {
        return <LinkCard card={card} key={index} />;
      })}
    </div>
  );
}

export default Links;
