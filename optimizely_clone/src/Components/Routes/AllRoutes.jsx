import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Partners from "../Pages/Partners";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partnres" element={<Partners />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
