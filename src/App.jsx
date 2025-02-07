import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TicTacToe from "./TicTacToe";
import Icon from "./Icon";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <TicTacToe></TicTacToe>
      <Footer></Footer>
    </>
  );
}

export default App;
