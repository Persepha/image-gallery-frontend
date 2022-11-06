import React, { FC } from "react";
import { Navbar } from "../components";
import { Outlet } from "react-router-dom";

export const Root: FC = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
