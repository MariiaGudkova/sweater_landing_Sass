function Promo(props) {
  const { lang } = props;
  return (
    <div className="promo grey dark-text">
      <p className="promo__text">{lang.PROMO}</p>
      <p className="promo__text">{lang.PROMO_TEXT}</p>

      <form className="promo__form" action="" name="promoForm">
        <button className="promo__button dark-text" type="button">
          {lang.SIGN_UP}
        </button>
        <label className="promo__label" htmlFor="promoCheckbox">
          <input
            className="promo__checkbox"
            type="checkbox"
            name="promoCheckbox"
            required
          />
          {lang.PRIVACY_POLICY}
        </label>
      </form>
    </div>
  );
}

export default Promo;
