import React from "react";
import Context from "./Component/Context";
import Header from "./Component/Header";
import Main from "./Component/Main";
import Sidebar from "./Component/Sidebar";

function App() {
  return (
    <>
      <Context>
        <Header />
        <Main />
        <Sidebar />
      </Context>
    </>
  );
}

export default App;
