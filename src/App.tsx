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
  NewImagePage,
  UpdateImagePage,
  PersonalProfilePage,
  UserProfilePage,
  UsersPage,
  UpdateUserProfilePage,
} from "./routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="" element={<GalleryPage />} />
        <Route path="images/create" element={<NewImagePage />} />
        <Route path="images/:slug" element={<ImageDetailPage />} />
        <Route path="images/:slug/update" element={<UpdateImagePage />} />

        <Route path="about" element={<div>about</div>} />

        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<RegistrationPage />} />

        <Route path="profile" element={<PersonalProfilePage />} />
        <Route path="profile/update" element={<UpdateUserProfilePage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:slug" element={<UserProfilePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
