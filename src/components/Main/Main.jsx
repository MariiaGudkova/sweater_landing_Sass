import History from "../History/History";
import BestSellers from "../BestSellers/BestSellers";
import Links from "../Links/Links";
import Promo from "../Promo/Promo";
import MoreInfo from "../MoreInfo/MoreInfo";

function Main() {
  return (
    <main className="main-container">
      <History />
      <BestSellers />
      <Links />
      <Promo />
      <MoreInfo />
    </main>
  );
}

export default Main;
