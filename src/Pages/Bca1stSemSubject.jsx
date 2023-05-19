import React from "react";
import Hero from "../UI/Hero";
import TopBar from "../Components/Subjects/TopBar";
import Box from "../Components/Subjects/SubjectBox";
import classes from "../Components/Subjects/SubjectBox.module.css";
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
          <Hero head="BCA" />
          <TopBar
            subject={["C LANGUAGE", "ENGLISH", "HUMAN VALUES", "IT", "MATHS"]}
          />
          <div className={classes.subjectBoxes}>
            <Box
              subjectName="C Language"
              number={4}
              names={["notes"]}
              data1={[
                ["Handwritten Notes"],
                [
                  "https://drive.google.com/file/d/1jwvoSb08RDOv0K6gTEXp6bolj5VjSxMq/view",
                ],
              ]}
            />
            <Box
              subjectName="English"
              number={4}
              names={["notes"]}
              data1={[
                [" Handwritten Notes"],
                [
                  "https://drive.google.com/file/d/1fG5e13p8sWiU40zQ1ItJnPO_156gNcih/view",
                ],
              ]}
            />
            <Box
              subjectName="Human Values"
              number={4}
              names={["notes"]}
              data1={[
                ["Handwritten Notes"],
                [
                  "https://drive.google.com/file/d/1jwvoSb08RDOv0K6gTEXp6bolj5VjSxMq/view",
                ],
              ]}
            />
            <Box
              subjectName="IT"
              number={4}
              names={["notes"]}
              data1={[
                ["Handwritten Notes"],
                [
                  "https://drive.google.com/file/d/1zpXbej3NlrZBRBC3rWDfdnAY74XbBw6X/view",
                ],
              ]}
            />
            <Box
              subjectName="Maths"
              number={4}
              names={["notes"]}
              data1={[
                ["Handwritten Notes"],
                [
                  "https://drive.google.com/file/d/1TImJrA7wjPAcIcFakRBGouv_YxJZSiH_/view",
                ],
              ]}
            />
          </div>
        </>
      )}
    </>
  );
}

export default Subject;
