import React from "react";
import Global from "./styles/global";
import Header from "./componentes/Header";
import Resumo from "./componentes/Resume/Resumo";

const App = () => {
  return (
    <>
      <Header />
      <Resumo />
      <Global />
    </>
  );
};

export default App;
