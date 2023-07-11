import React from "react";
import Hero from "../UI/Hero";
import TopBar from "../Components/Subjects/TopBar";
import Box from "../Components/Subjects/SubjectBox";
import classes from "../Components/Subjects/SubjectBox.module.css";
import Loader from "../UI/Loader";
function Subject() {
  const el1 = React.useRef();
  const el2 = React.useRef();
  const el3 = React.useRef();
  const el4 = React.useRef();
  const el5 = React.useRef();
  const el6 = React.useRef();
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  function clickk1(e) {
    console.log(el1.current);
    el1.current.scrollIntoView({ behavior: "smooth" });
  }
  function clickk2(e) {
    el2.current.scrollIntoView({ behavior: "smooth" });
  }
  function clickk3(e) {
    el3.current.scrollIntoView({ behavior: "smooth" });
  }
  function clickk4(e) {
    // let element = el1.current;
    console.log(e);
    e.target.scrollIntoView({ behavior: "smooth" });
  }
  function clickk5(e) {
    // let element = el1.current;
    el5.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Hero head="BCA" />
          <TopBar
            subject={["C LANGUAGE", "ENGLISH", "HUMAN VALUES", "IT", "MATHS"]}
            clicks={[clickk1, clickk2, clickk3, clickk4, clickk5]}
          />
          <div className={classes.subjectBoxes}>
            <Box
              reff={el1}
              subjectName="C Language"
              number={1}
              names={["Notes"]}
              data1={[
                ["Handwritten Notes"],
                [
                  "https://drive.google.com/file/d/1jwvoSb08RDOv0K6gTEXp6bolj5VjSxMq/view",
                ],
              ]}
            />
            <Box
              reff={el2}
              subjectName="English"
              number={1}
              names={["Notes"]}
              data1={[
                [" Handwritten Notes"],
                [
                  "https://drive.google.com/file/d/1fG5e13p8sWiU40zQ1ItJnPO_156gNcih/view",
                ],
              ]}
            />
            <Box
              reff={el3}
              subjectName="Human Values"
              number={1}
              names={["Notes"]}
              data1={[
                ["Handwritten Notes"],
                [
                  "https://drive.google.com/file/d/1jwvoSb08RDOv0K6gTEXp6bolj5VjSxMq/view",
                ],
              ]}
            />
            <Box
              reff={el4}
              subjectName="IT"
              number={1}
              names={["Notes"]}
              data1={[
                ["Handwritten Notes"],
                [
                  "https://drive.google.com/file/d/1zpXbej3NlrZBRBC3rWDfdnAY74XbBw6X/view",
                ],
              ]}
            />
            <Box
              reff={el5}
              subjectName="Maths"
              number={1}
              names={["Notes"]}
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
