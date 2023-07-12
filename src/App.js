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
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /> */}

              <title>Document</title>
            </head>
            <body>
              <LandingPage />
              <SelectSemester />
              <SubjectPage />
            </body>
          </html>
        </>
      )}
    </>
  );
}

export default App;
