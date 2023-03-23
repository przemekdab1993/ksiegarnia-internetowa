import React from "react";
import './App.css';
import HeaderSection from "./componets/UserInterface/TopSection/HeaderSection";
import Books from "./componets/Books/Books";
import Footer from "./componets/UserInterface/BottomSection/Footer";

const App = () => {
  return (
    <div>
      <HeaderSection>
      </HeaderSection>

      <Books></Books>

      <Footer></Footer>


    </div>
  );
}

export default App;
