import React from "react";
import Header from "../Header/Header";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  return <Header isOpen={isOpen} setIsOpen={setIsOpen} />;
}

export default App;
