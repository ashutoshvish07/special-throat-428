import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Partners from "../Pages/Partners";
import Plans from "../Pages/Plans";
import Signup from "../Pages/Signup";

const AllRoutes = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partnres" element={<Partners />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/plans" element={<Plans/>} />

      </Routes>
    </div>
  );
};

export default AllRoutes;
