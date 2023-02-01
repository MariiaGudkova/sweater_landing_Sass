import LinkCard from "../LinkCard/LinkCard";

function Links(props) {
  const { lang } = props;
  return (
    <div className="links">
      {lang.linksCards.map((card, index) => {
        return <LinkCard card={card} key={index} />;
      })}
    </div>
  );
}

export default Links;
