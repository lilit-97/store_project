import React from "react";

import data from "./data"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Cards from "./components/card";
import CardItem from "./components/cardItem";

function App() {
  const {productItems} = data;
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Cards productItems={productItems}/>}/>
          <Route path="/product/:id" element={<CardItem/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;