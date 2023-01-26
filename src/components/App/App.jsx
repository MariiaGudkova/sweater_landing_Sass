import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Main />
    </>
  );
}

export default App;
