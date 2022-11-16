import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  NotFoundPage,
  Root,
  GalleryPage,
  ImageDetailPage,
  LoginPage,
  RegistrationPage,
} from "./routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="" element={<GalleryPage />} />
        <Route path="images/:slug" element={<ImageDetailPage />} />
        <Route path="about" element={<div>about</div>} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<RegistrationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
