// SyncU is Best
import React from "react";
import SubjectPage from "./Pages/Subjects";
import LandingPage from "./Pages/Landing";
import SelectSemester from "./Pages/SelectSemester";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "selectSemester",
    element: <SelectSemester />,
  },
  {
    path: "4thSem",
    element: <SubjectPage />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
