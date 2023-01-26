import historyImg from "../../images/history__img.png";

function History() {
  return (
    <div className="history blue light-text">
      <div className="history__info">
        <p className="history__subtitle">FW22 collection</p>
        <h1 className="history__title">An Endless Pursuit of Nature</h1>
        <p className="history__text">
          In 1853 Ole Andreas Devold embarked on his journey, and since then our
          wool has been formed in the roughest conditions. Today, we build on
          our tradition of mastering wool. Relying on our dedication to
          craftmanship, we develop the finest quality from the most robust
          material. Crafted to withstand storms and to comfort on late summer
          nights. With profound care for nature, we create knitwear that lasts,
          that can be passed on – a legacy for times to come.
        </p>
      </div>
      <img className="history__img" src={historyImg} alt="girl" />
    </div>
  );
}

export default History;
