// SyncU is Best
import "./App.css";

import SubjectPage from "./Pages/Subjects";
import LandingPage from "./Pages/Landing";
import SelectSemester from "./Pages/SelectSemester";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}>
             <Route index element={<LandingPage />} /> 
            <Route path="/subject" element={<SubjectPage />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      <LandingPage />
      <SubjectPage />
      <SelectSemester />
    </>
  );
}

export default App;
