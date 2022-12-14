import React from "react";
import { Routes, Route } from "react-router-dom";
import Mitm from "./containers/mitm/mitm";
import Phishing from "./containers/phishing/phishing";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function MainRoutes() {
  //this excludes quiz from rendering footer
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mitm" element={<Mitm />} />
        <Route path="/phishing" element={<Phishing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default MainRoutes;
