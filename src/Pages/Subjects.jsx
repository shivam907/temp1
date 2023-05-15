import React from "react";
import Hero from "../UI/Hero";
import SubjectBox from "../Components/Subjects/SubjectBoxes";
import TopBar from "../Components/Subjects/TopBar";
import Loader from "../UI/Loader";
function Subject() {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Hero />
          <TopBar />
          <SubjectBox />
        </>
      )}
    </>
  );
}

export default Subject;
