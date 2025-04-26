import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MakeContact from "../components/MakeContact";
import EditeContact from "../components/EditeContact";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/make-contact" element={<MakeContact />} />
      <Route path="/edite-contact" element={<EditeContact />} />
    </Routes>
  );
};

export default Router;
