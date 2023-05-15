// SyncU is Best
import "./App.css";
import React from "react";
import SubjectPage from "./Pages/Subjects";
import LandingPage from "./Pages/Landing";
import SelectSemester from "./Pages/SelectSemester";
import Loader from "./UI/Loader.jsx";

function App() {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

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
      {loading ? (
        <Loader />
      ) : (
        <>
          <LandingPage />
          <SelectSemester />
          <SubjectPage />
        </>
      )}
    </>
  );
}

export default App;
