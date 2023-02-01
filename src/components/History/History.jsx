import historyImg from "../../images/history__img.png";

function History(props) {
  const { lang } = props;
  return (
    <div className="history blue light-text">
      <div className="history__info">
        <p className="history__subtitle">{lang.COLLECTION_NUMBER}</p>
        <h1 className="history__title">{lang.BREND_LOSUNG}</h1>
        <p className="history__text">{lang.BREND_HISTORY}</p>
      </div>
      <img className="history__img" src={historyImg} alt="girl" />
    </div>
  );
}

export default History;
