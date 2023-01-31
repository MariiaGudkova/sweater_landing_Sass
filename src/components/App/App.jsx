import React from "react";
import Header from "../Header/Header";
import MobileHeader from "../MobileHeader/MobileHeader";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  const [isLanguagesSelectOpen, setIsLanguagesSelectOpen] =
    React.useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);

  return (
    <div className={!isBurgerMenuOpen ? "container" : "container_active"}>
      <div className={!isBurgerMenuOpen ? "overlay" : "overlay_active"} />
      <Header
        isLanguagesSelectOpen={isLanguagesSelectOpen}
        setIsLanguagesSelectOpen={setIsLanguagesSelectOpen}
      />
      <MobileHeader
        isBurgerMenuOpen={isBurgerMenuOpen}
        setIsBurgerMenuOpen={setIsBurgerMenuOpen}
        isLanguagesSelectOpen={isLanguagesSelectOpen}
        setIsLanguagesSelectOpen={setIsLanguagesSelectOpen}
      />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
