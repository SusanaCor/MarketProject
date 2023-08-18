import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import FormPage from "../pages/FormPage";
import NavBar from "../components/NavBar";
import DetailsPage from "../pages/DetailsPage";
import AddTasks from "../pages/addTask";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/" element={<HomePage />} />
        <Route index element={<HomePage />} />
        <Route path="DetailsPage/:id" element={<DetailsPage />} />
        <Route path="AddTasks" element={<AddTasks />} />
      </Route>
      <Route path="FormPage" element={<FormPage />} />
    </Routes>
  );
};
