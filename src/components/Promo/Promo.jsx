function Promo() {
  return (
    <div className="promo grey dark-text">
      <p className="promo__text">GET 10% OFF ON YOUR NEXT ONLINE ORDER.</p>
      <p className="promo__text">
        JOIN OUR NEWSLETTER TO RECEIVE UPDATES ON O.A.D. COLLECTIONS, EVENTS AND
        NEW ARRIVALS.
      </p>

      <form className="promo__form" action="" name="promoForm">
        <button className="promo__button dark-text" type="button">
          SIGN UP
        </button>
        <label className="promo__label" htmlFor="promoCheckbox">
          <input
            className="promo__checkbox"
            type="checkbox"
            name="promoCheckbox"
            required
          />
          I ACCEPT THE O.A.D. PRIVACY POLICY.
        </label>
      </form>
    </div>
  );
}

export default Promo;
