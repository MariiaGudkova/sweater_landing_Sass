import React from "react";
import Header from "../Header/Header";
import MobileHeader from "../MobileHeader/MobileHeader";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { langEn, langRu } from "../../utils/constants";

function App() {
  const [isLanguagesSelectOpen, setIsLanguagesSelectOpen] =
    React.useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);
  const [pageLanguage, setPageLanguage] = React.useState("EN");

  return (
    <div className={!isBurgerMenuOpen ? "container" : "container_active"}>
      <div className={!isBurgerMenuOpen ? "overlay" : "overlay_active"} />
      <Header
        isLanguagesSelectOpen={isLanguagesSelectOpen}
        setIsLanguagesSelectOpen={setIsLanguagesSelectOpen}
        pageLanguage={pageLanguage}
        setPageLanguage={setPageLanguage}
        lang={pageLanguage === "EN" ? langEn : langRu}
      />
      <MobileHeader
        isBurgerMenuOpen={isBurgerMenuOpen}
        setIsBurgerMenuOpen={setIsBurgerMenuOpen}
        isLanguagesSelectOpen={isLanguagesSelectOpen}
        setIsLanguagesSelectOpen={setIsLanguagesSelectOpen}
        pageLanguage={pageLanguage}
        setPageLanguage={setPageLanguage}
        lang={pageLanguage === "EN" ? langEn : langRu}
      />
      <Main lang={pageLanguage === "EN" ? langEn : langRu} />
      <Footer lang={pageLanguage === "EN" ? langEn : langRu} />
    </div>
  );
}

export default App;
