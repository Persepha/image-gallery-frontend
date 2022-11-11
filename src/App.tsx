import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage, Root, GalleryPage, ImageDetailPage } from "./routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="" element={<GalleryPage />} />
        <Route path="images/:slug" element={<ImageDetailPage />} />
        <Route path="about" element={<div>about</div>} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
