import React from "react";

import "./assets/Common/Global.scss";
import { Routes, Route } from "react-router-dom";

import {
  Header,
  Home,
  MovieDetails,
  WrongPage404,
  Footer,
} from "./components/index";

import "./style.scss";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/movie/:imdbID" element={<MovieDetails />} />

            <Route path="*" element={<WrongPage404 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
