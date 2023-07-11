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
            subject={["DM", "OS", "DAA", "UHV2", "COA"]}
            clicks={[clickk1, clickk2, clickk3, clickk4, clickk5]}
          />
          <div className={classes.subjectBoxes}>
            <Box
              reff={el1}
              subjectName="Discrete Mathematics"
              number={4}
              names={[
                "notes",
                "books",
                "previous year question papers",
                "important topics",
              ]}
              data1={[
                [
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-2 Handwritten Notes",
                  "CEC Module-3 Handwritten Notes",
                  "CEC Module-4 Handwritten Notes",
                  "CEC Module-5 Handwritten Notes",
                  "CEC Module-6 Handwritten Notes",
                  "CEC Module-7 Handwritten Notes",
                  "CEC Module-8 Handwritten Notes",
                ],
                [
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                ],
              ]}
              data2={[
                [
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                ],
                [
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                ],
              ]}
              data3={[
                [
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                ],
                [
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                ],
              ]}
              data4={[
                [
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                ],
                [
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                ],
              ]}
            />
            <Box
              reff={el2}
              subjectName="Discrete Mathematics"
              number={4}
              names={[
                "notes",
                "books",
                "previous year question papers",
                "important topics",
              ]}
              data1={[
                [
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-2 Handwritten Notes",
                  "CEC Module-3 Handwritten Notes",
                  "CEC Module-4 Handwritten Notes",
                  "CEC Module-5 Handwritten Notes",
                  "CEC Module-6 Handwritten Notes",
                  "CEC Module-7 Handwritten Notes",
                  "CEC Module-8 Handwritten Notes",
                ],
                [
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                ],
              ]}
              data2={[
                [
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                ],
                [
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                ],
              ]}
              data3={[
                [
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                ],
                [
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                ],
              ]}
              data4={[
                [
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                ],
                [
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                ],
              ]}
            />
            <Box
              reff={el3}
              subjectName="Discrete Mathematics"
              number={4}
              names={[
                "notes",
                "books",
                "previous year question papers",
                "important topics",
              ]}
              data1={[
                [
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-2 Handwritten Notes",
                  "CEC Module-3 Handwritten Notes",
                  "CEC Module-4 Handwritten Notes",
                  "CEC Module-5 Handwritten Notes",
                  "CEC Module-6 Handwritten Notes",
                  "CEC Module-7 Handwritten Notes",
                  "CEC Module-8 Handwritten Notes",
                ],
                [
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                ],
              ]}
              data2={[
                [
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                ],
                [
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                ],
              ]}
              data3={[
                [
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                ],
                [
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                ],
              ]}
              data4={[
                [
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                ],
                [
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                ],
              ]}
            />
            <Box
              reff={el4}
              subjectName="Discrete Mathematics"
              number={4}
              names={[
                "notes",
                "books",
                "previous year question papers",
                "important topics",
              ]}
              data1={[
                [
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-2 Handwritten Notes",
                  "CEC Module-3 Handwritten Notes",
                  "CEC Module-4 Handwritten Notes",
                  "CEC Module-5 Handwritten Notes",
                  "CEC Module-6 Handwritten Notes",
                  "CEC Module-7 Handwritten Notes",
                  "CEC Module-8 Handwritten Notes",
                ],
                [
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                ],
              ]}
              data2={[
                [
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                ],
                [
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                ],
              ]}
              data3={[
                [
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                ],
                [
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                ],
              ]}
              data4={[
                [
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                ],
                [
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                ],
              ]}
            />
            <Box
              reff={el5}
              subjectName="Discrete Mathematics"
              number={4}
              names={[
                "notes",
                "books",
                "previous year question papers",
                "important topics",
              ]}
              data1={[
                [
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-2 Handwritten Notes",
                  "CEC Module-3 Handwritten Notes",
                  "CEC Module-4 Handwritten Notes",
                  "CEC Module-5 Handwritten Notes",
                  "CEC Module-6 Handwritten Notes",
                  "CEC Module-7 Handwritten Notes",
                  "CEC Module-8 Handwritten Notes",
                ],
                [
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                ],
              ]}
              data2={[
                [
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                  "COE Module-1 Handwritten Notes",
                ],
                [
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                ],
              ]}
              data3={[
                [
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                  " Module-1 Handwritten Notes",
                ],
                [
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                ],
              ]}
              data4={[
                [
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                  "CEC Module-1 Handwritten Notes",
                ],
                [
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
                  "https://shivamkaushal.in",
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
