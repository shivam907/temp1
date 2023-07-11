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
          <Hero head="ECE" />
          <TopBar
            subject={["ADC", "DSP", "PM"]}
            clicks={[clickk1, clickk2, clickk3]}
          />
          <div className={classes.subjectBoxes}>
            <Box
              reff={el1}
              subjectName="ADC"
              number={3}
              names={["Notes", "Books", "Previous Year Question Papers"]}
              data1={[
                [
                  "Unit-1 (Handwritten Notes)",
                  "Unit-2 (Handwritten Notes)",
                  "Unit-3 (Handwritten Notes)",
                  "Unit-4 (Handwritten Notes)",
                ],
                [
                  "https://drive.google.com/file/d/1jCsrpR4xvpL8H3WYe-AG71YfozG1H5GH/view",
                  "https://drive.google.com/file/d/1u2_n22LtqawnlLcsiV3SOHNyJ_twBgDg/view",
                  "https://drive.google.com/file/d/1UGQFeyMnQIgnjVQ96VyYLWOJBt-9gIe9/view",
                  "https://drive.google.com/file/d/1iy74eARdVk2hIOmbNhXwtkPVO972-bY1/view",
                ],
              ]}
              data2={[
                ["ADC Book"],
                [
                  "https://drive.google.com/file/d/1c2cfXLRurdj_JFx7_QNEhRqXvKcDe1it/view",
                ],
              ]}
              data3={[
                [" Previous Year"],
                [
                  "https://drive.google.com/file/d/1_NtW-g6zC599ALFYsACDJTi3WYHKLQoZ/view",
                ],
              ]}
            />

            <Box
              reff={el2}
              subjectName="DSP"
              number={3}
              names={["Notes", "Books", "Previous Year Question Papers"]}
              data1={[
                [
                  "Unit-1 (Handwritten Notes)",
                  "Unit-2 (Handwritten Notes)",
                  "Unit-3 (Handwritten Notes)",
                  "Unit-4 (Handwritten Notes)",
                ],
                [
                  "https://drive.google.com/file/d/1twyP0N7lzKIRwYYZf-jFASaUzoaW1qdy/view",
                  "https://drive.google.com/file/d/1sbcgVmbYt0Rr5pDjjmMq6PVXzHLI62Kg/view",
                  "https://drive.google.com/file/d/1HbW9M4nzgSoAW2b320BXGTxgFnnX97AL/view",
                  "https://drive.google.com/file/d/15WvyJseWjtC-_W7cJ3YoMUYWNwpDIlb3/view",
                ],
              ]}
              data2={[
                ["DSP Book"],
                [
                  "https://drive.google.com/file/d/1UAM4gVi9snst-dJKoX5q3mrffjNVKIDj/view",
                ],
              ]}
              data3={[
                [" Previous Year"],
                [
                  "https://drive.google.com/file/d/1_NtW-g6zC599ALFYsACDJTi3WYHKLQoZ/viewhttps://drive.google.com/file/d/162dorgQiTIu7lt0bBuvJKrVEfzkvUsf7/view",
                ],
              ]}
            />

            <Box
              reff={el3}
              subjectName="PM"
              number={3}
              names={["Notes", "Books", "Previous Year Question Papers"]}
              data1={[
                [
                  "Unit-1 (PPT)",
                  "Unit-2 (PPT)",
                  "Unit-3 (PPT)",
                  "Unit-4 (PPT)",
                ],
                [
                  "https://drive.google.com/file/d/1KEGMJPS76WS_MeG2Ly0jNbF14MAXhaYz/view",
                  "https://drive.google.com/file/d/1ARZj0Ry4g4X1qgacGpfd0H7Tza7ZiPqe/view",
                  "https://drive.google.com/file/d/17bUjv2vsV7zyhdFap9L_tUHat9GLa1u9/view",
                  "https://drive.google.com/file/d/1Yj15IWaI9Z99a5Xcmst334l_pftopqCk/view",
                ],
              ]}
              data2={[
                ["PM Book"],
                [
                  "https://drive.google.com/file/d/11OkRYPrRYQJy7FEt1cx-9IkSkJq7gOak/view",
                ],
              ]}
              data3={[
                [" Previous Year"],
                [
                  "https://drive.google.com/file/d/1DCSzo75J0PU747dhfv-nmdKFzvhRe2_e/view",
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
