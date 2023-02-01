function MoreInfo(props) {
  const { lang } = props;
  return (
    <div className="more-info white-text">
      <div className="more-info__content">
        <h2 className="more-info__title">{lang.MORE_INFO_TITLE}</h2>
        <p className="more-info__text">{lang.MORE_INFO_TEXT}</p>
        <ul className="more-info__links">
          <p className="more-info__links-title">.{lang.READ_MORE}</p>
          <li className="more-info__item">
            <a className="more-info__link white-text" href="#">
              {lang.OUR_HERITAGE}
            </a>
          </li>
          <li className="more-info__item">
            <a className="more-info__link white-text" href="#">
              {lang.DEVOLD_OF_NORWAY}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MoreInfo;
