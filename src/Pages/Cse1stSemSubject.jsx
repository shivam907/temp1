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
          <Hero head="CSE" />
          <TopBar
            subject={["PHYSICS", "BEE", "M1"]}
            clicks={[clickk1, clickk2, clickk3]}
          />
          <div className={classes.subjectBoxes}>
            <Box
              reff={el1}
              subjectName="Physics"
              number={3}
              names={["Notes", "Books", "Previous Year Question Papers"]}
              data1={[
                [
                  "Unit-1 Teachers Notes",
                  "Unit-1 Handwritten Notes",
                  "Unit-2 Teachers Notes",
                  "Unit-2 Handwritten Notes",
                  "Unit-3 Teachers Notes",
                  "Unit-3 Handwritten Notes",
                  "Unit-4 Teachers Notes",
                  "Unit-4 Handwritten Notes",
                ],
                [
                  "https://drive.google.com/file/d/1q2NAJpFQJyw_BtpnUiYp2mS1fixjadTZ/view",
                  "https://drive.google.com/file/d/1SpgrcmCfhfayvbAHu32y6Kf2eTYwoVse/view",
                  "https://drive.google.com/file/d/1RxMFPCtqYmkP2cTr6ZgtQ2Dc3TIzRrBM/view?usp=sharing",
                  "https://drive.google.com/file/d/1kV9VxNEw008TMLIOi1LsOUz6z-pRGHIh/view",
                  "https://drive.google.com/file/d/1ljJQN_ZBsFRW6S3dysv201kbDbnL56Wm/view",
                  "https://drive.google.com/file/d/1kV9VxNEw008TMLIOi1LsOUz6z-pRGHIh/view",
                  "https://drive.google.com/file/d/1N7KhJFjz5VqNwy9942SzaBzBjAHuWtKy/view",
                  "https://drive.google.com/file/d/1lZkVBtaZ6xLYEHgO_VWfX_CoASOe6jZk/view",
                ],
              ]}
              data2={[
                ["Physics Book", "Free Electron Theory"],
                [
                  "https://drive.google.com/file/d/1qYAJynRk8yMLHZdEYCi4mt8ap8NrpnOn/view",
                  "https://drive.google.com/file/d/1f4r5-wB_G9JyCxHN8vR3dDGSj_Wrv3hg/view",
                ],
              ]}
              data3={[
                [" Lords Sample Papers"],
                [
                  "https://drive.google.com/file/d/1UyN1L_N9SNi9S0xfBcfO_W6FfcuYcZd1/view",
                ],
              ]}
            />
            <Box
              reff={el2}
              subjectName="BEE"
              number={3}
              names={["Notes", "Book", "Previous Year Question Papers"]}
              data1={[
                [
                  "A.C. Circuit (Handwritten)",
                  "D.C. Circuit (Handwritten)",
                  "Transformer (Handwritten-2)",
                  "Transformer (Handwritten-1)",
                  "Elecrical Mechanics (Handwritten)",
                  "Elecrical Installation (Handwritten)",
                ],
                [
                  "https://drive.google.com/file/d/1irOqs-cgFNbe_wjufYhamg0ddVZdbVdl/view",
                  "https://drive.google.com/file/d/1BiEfsoq3GaEYYTHxtB_Nw1eYZnO7Y8tE/view",
                  "https://drive.google.com/file/d/1ix1H15mFj6FnpFlNMZSYOdOQQTO-XcJG/view",
                  "https://drive.google.com/file/d/1qMUDvZFaXAMqcvNExrYLR6uneoFamZw5/view",
                  "https://drive.google.com/file/d/1ym4MsEjHyrilZBzsUotu3dpGvqBHzOG7/view",
                  "https://drive.google.com/file/d/14t_kiprg3qhSg4MplZt8tYLda8_-Tou4/view",
                ],
              ]}
              data2={[
                [
                  "A.C. Circuit (Book)",
                  "D.C. Circuit (Book)",
                  "Transformer (Book)",
                  "Elecrical Mechanics (Book-1)",
                  "Elecrical Mechanics (Book-2)",
                  "Elecrical Installation (Book)",
                ],
                [
                  "https://drive.google.com/file/d/1X1ZYjCLZuKZy9uUuBpDRCkCQa0TO_TWE/view",
                  "https://drive.google.com/file/d/1lU7yLUw29wmejLJYUxuL8i1MjiTcEMKL/view",
                  "https://drive.google.com/file/d/1XQbmO2cokFvI9Cog780VdFy-kI9E3yW7/view",
                  "https://drive.google.com/file/d/1EbcnnM2rDemipQ-rmO5rqxiR0Zv9WZ2Q/view",
                  "https://drive.google.com/file/d/1dlTm-7ReCDtBka6o8jk2ygTyorRlpOwO/view",
                  "https://drive.google.com/file/d/1nm845HuG2GgRtBkftodr7paNJwIbFsmg/view",
                ],
              ]}
              data3={[
                ["MST-1 (2019)", "MST-2 (2019)", "Final Paper (2019)"],
                [
                  "https://drive.google.com/file/d/17xPqbgZBvllenPuzc9NXgcqGIvLNs5Rm/view",
                  "https://drive.google.com/file/d/1skDOp0JVnAxD3_woxbKwh7hYcGZMEUpc/view",
                  "https://drive.google.com/file/d/1iGwGUPm1IOho68j0A23zCT6Wwc01mv33/view",
                ],
              ]}
            />
            <Box
              reff={el3}
              subjectName="M1"
              number={3}
              names={["Notes", "Books", "Previous Year Question Papers"]}
              data1={[
                [
                  "Beta and Gamma-1",
                  "Matrices -1",
                  "Improper Integral",
                  "Linear Algebra",
                  "Volume and Surface ",
                  "Linear Dependence Or Independence",
                  "Beta and Gamma -2",
                  "Vector Space",
                  "Matrices -2",
                ],
                [
                  "https://drive.google.com/file/d/1-vDeIDgMbbh6eoaJx13jqRF-Z8GcSzHf/view",
                  "https://drive.google.com/file/d/1kW6S40T6-qD9O6u2rxmFFbP5lI8NmnI7/view",
                  "https://drive.google.com/file/d/11IzupfIVZHKoHKDuoFZd2rOaWpvN_oZw/view",
                  "https://drive.google.com/file/d/1ZjknHIFMTrVcu7LsW4lPZkZcBAgidB1_/view",
                  "https://drive.google.com/file/d/1a6_6idLYmKe6T2q4p_DrxSJc98D2RkOu/view",
                  "https://drive.google.com/file/d/1jhCH0MN4uENs0q-CPBfXKICKRL3DBkDh/view",
                  "https://drive.google.com/file/d/1sPLszbiGZYlgGgWGMv84O6b3uw0GV0RI/view",
                  "https://drive.google.com/file/d/1LOdShubr9u-XjvPcxAtGxyvqcT_PpNbL/view",
                  "https://drive.google.com/file/d/1FPOJ9V-03vUmH2Czh-95Ad5q8B9yvvRd/view",
                ],
              ]}
              data2={[
                [
                  "General Theorms",
                  "Intermediate Form",
                  "Maxima and Minima",
                  "Definite and Indefinite",
                  "Volume And Surfaces",
                  "Eigen Value and Vector",
                  "Beta and Gamma",
                  "Vector Space",
                  "Matrices",
                ],
                [
                  "https://drive.google.com/file/d/1QVbXeb3B-vxv_lZantjvToBgYZ85YySA/view",
                  "https://drive.google.com/file/d/1HhaGC3O7PEkCVnRourm0fz0oXR7oG801/view",
                  "https://drive.google.com/file/d/1maSe7YgxMcjXIwLYHW5TAL6H6wheL9JV/view",
                  "https://drive.google.com/file/d/1coDIkwOpG876xVkJd0_TkwGy8UJZhzMD/view",
                  "https://drive.google.com/file/d/1aS89VbSljLTvTAXBrzXg0ZFZMxAlOWA-/view",
                  "https://drive.google.com/file/d/1BKXHio5Iu337-s8blfuom-jpWknFRLNT/view",
                  "https://drive.google.com/file/d/1NO_5esnI6v0OJXrJcJ2dz3IB-8hUl8sT/view",
                  "https://drive.google.com/file/d/1teYTl_pLZDBMhzc8KJ08x1MegOF5Tvq4/view",
                  "https://drive.google.com/file/d/1DNW2bIvx1tfphrjAyLcaQHHXUjqWksqR/view",
                ],
              ]}
              data3={[
                [" Sample Paper"],
                [
                  "https://drive.google.com/file/d/1jsx2raKIbRGlC8H8wxeKSh03ng2pjfHw/view",
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
