import History from "../History/History";
import BestSellers from "../BestSellers/BestSellers";
import Links from "../Links/Links";
import Promo from "../Promo/Promo";
import MoreInfo from "../MoreInfo/MoreInfo";

function Main(props) {
  const { lang } = props;
  return (
    <main className="main-container">
      <History lang={lang} />
      <BestSellers lang={lang} />
      <Links lang={lang} />
      <Promo lang={lang} />
      <MoreInfo lang={lang} />
    </main>
  );
}

export default Main;
