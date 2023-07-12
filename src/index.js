// SyncU is Best
import React from "react";
// import SubjectPage from "./Pages/Subjects";
import LandingPage from "./Pages/Landing";
import SelectAiSemester from "./Pages/AIMLDS";
import SelectCseSemester from "./Pages/SelectCseSemester";
import SelectEceSemester from "./Pages/EceSelectSem.jsx";
import SelectMeSemester from "./Pages/MeSelectSem";
import SelectItSemester from "./Pages/ItSelectSem";
import SelectBcaSemester from "./Pages/BcaSelectSem";
import Me1stSemSubject from "./Pages/Me1stSemSubject";
import CSE1stSem from "./Pages/Cse1stSemSubject";
import CSE2ndSem from "./Pages/Cse2ndSemSubject";
import CSE3rdSem from "./Pages/Cse3rdSemSubject";
import Bca1stSem from "./Pages/Bca1stSemSubject";
import Bca3rdSem from "./Pages/Bca3rdSemSubject";
import CSE4thSem from "./Pages/Cse4thSemSubject";
import CSE5thSem from "./Pages/Cse5thSemSubject";
import CSE6thSem from "./Pages/Cse6thSemSubject";
import CSE7thSem from "./Pages/Cse7thSemSubject";
import IT1stSem from "./Pages/It1stSemSubject";
import IT2ndSem from "./Pages/It2ndSemSubject";
import IT3rdSem from "./Pages/It3rdSemSubject";
import IT4thSem from "./Pages/It4thSemSubject";
import IT5thSem from "./Pages/It5thSemSubject";
import IT6thSem from "./Pages/It6thSemSubject";
import IT7thSem from "./Pages/It7thSemSubject";
import Ece1stSem from "./Pages/Ece1stSemSubject";
import Ece2ndSem from "./Pages/Ece2ndSemSubject";
import Ece3rdSem from "./Pages/Ece3rdSemSubject";
import Ece4thSem from "./Pages/Ece4thSemSubject";
import Ece5thSem from "./Pages/Ece5thSemSubject";
import Ece6thSem from "./Pages/Ece6thSemSubject";
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
    path: "selectCseSemester",
    element: <SelectCseSemester />,
  },
  {
    path: "selectAiMLDsSemester",
    element: <SelectAiSemester />,
  },
  {
    path: "selectEceSemester",
    element: <SelectEceSemester />,
  },
  {
    path: "selectMeSemester",
    element: <SelectMeSemester />,
  },
  {
    path: "selectItSemester",
    element: <SelectItSemester />,
  },
  {
    path: "selectBcaSemester",
    element: <SelectBcaSemester />,
  },
  {
    path: "ME1stSem",
    element: <Me1stSemSubject />,
  },
  {
    path: "CSE1stSem",
    element: <CSE1stSem />,
  },
  {
    path: "Bca1stSem",
    element: <Bca1stSem />,
  },
  {
    path: "Bca3rdSem",
    element: <Bca3rdSem />,
  },
  {
    path: "CSE2ndSem",
    element: <CSE2ndSem />,
  },
  {
    path: "CSE3rdSem",
    element: <CSE3rdSem />,
  },
  {
    path: "CSE4thSem",
    element: <CSE4thSem />,
  },
  {
    path: "CSE5thSem",
    element: <CSE5thSem />,
  },
  {
    path: "CSE6thSem",
    element: <CSE6thSem />,
  },
  {
    path: "CSE7thSem",
    element: <CSE7thSem />,
  },
  {
    path: "IT1stSem",
    element: <IT1stSem />,
  },
  {
    path: "IT2ndSem",
    element: <IT2ndSem />,
  },
  {
    path: "IT3rdSem",
    element: <IT3rdSem />,
  },
  {
    path: "IT4thSem",
    element: <IT4thSem />,
  },
  {
    path: "IT5thSem",
    element: <IT5thSem />,
  },
  {
    path: "IT6thSem",
    element: <IT6thSem />,
  },
  {
    path: "IT7thSem",
    element: <IT7thSem />,
  },
  {
    path: "Ece1stSem",
    element: <Ece1stSem />,
  },
  {
    path: "Ece2ndSem",
    element: <Ece2ndSem />,
  },
  {
    path: "Ece3rdSem",
    element: <Ece3rdSem />,
  },
  {
    path: "Ece4thSem",
    element: <Ece4thSem />,
  },
  {
    path: "Ece5thSem",
    element: <Ece5thSem />,
  },
  {
    path: "Ece6thSem",
    element: <Ece6thSem />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

reportWebVitals();
