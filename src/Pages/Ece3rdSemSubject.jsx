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
            subject={["DSD", "ED", "EMW", "NT", "M3"]}
            clicks={[clickk1, clickk2, clickk3, clickk4, clickk5]}
          />
          <div className={classes.subjectBoxes}>
            <Box
              reff={el1}
              subjectName="DSD"
              number={1}
              names={["Notes"]}
              data1={[
                ["Unit -1", "Unit -2", "Unit -3", "Unit -4"],
                [
                  "https://drive.google.com/file/d/1pJ086bbn8dqBwD4ndKhIyo0nudibIr0u/view",
                  "https://drive.google.com/file/d/11DzB6IZ2SiXic_0aD5E4wYeq-JIIQGgW/view",
                  "https://drive.google.com/file/d/1F3GJl2SMskJ84YuNgufwIOLqiCNHT5E6/view",
                  "https://drive.google.com/file/d/1GmdrPz3GWrVFTOnbXHi2R-qwPQ9elG2f/view",
                ],
              ]}
            />

            <Box
              reff={el2}
              subjectName="ED"
              number={1}
              names={["Notes"]}
              data1={[
                ["Unit -1", "Unit -2", "Unit -3", "Unit -4"],
                [
                  "https://drive.google.com/file/d/1d6HyH0jIBElQfVfak8PUj-vGgiNpOQbZ/view",
                  "https://drive.google.com/file/d/1bw90izKvKjVPoEUkYk71gRWF7dYW1YlH/view",
                  "https://drive.google.com/file/d/1Oojk-X3HPmzgBAhbq2cH7PP8jwAdic5j/view",
                  "https://drive.google.com/file/d/1O5DSXbynFY2y4B2m0FQMnjLu89erGkD0/view",
                ],
              ]}
            />

            <Box
              reff={el3}
              subjectName="EMW"
              number={1}
              names={["Notes"]}
              data1={[
                ["Unit -1", "Unit -2", "Unit -3", "Unit -4"],
                [
                  "https://drive.google.com/file/d/1r4MqxJ9y7960bCiWzA0VGjYackPD0h1t/view",
                  "https://drive.google.com/file/d/1pamrgZuW2D3C_7NzQZbC0bynhB7VLvrS/view",
                  "https://drive.google.com/file/d/1nqrq9omBPQU8iT6YeizVaChii5Vm_iJX/view",
                  "https://drive.google.com/file/d/1xz5eC9RAzzTZOKWSeO0jXN4CQBc0qF2O/view",
                ],
              ]}
            />

            <Box
              reff={el4}
              subjectName="NT"
              number={1}
              names={["Notes"]}
              data1={[
                ["Unit -1", "Unit -2", "Unit -3", "Unit -4"],
                [
                  "https://drive.google.com/file/d/1JN32MydyPLSBx0ipmHqL0fnWJXIge6l8/view",
                  "https://drive.google.com/file/d/11ctesOxK_G_C4rBc3gQhd_kniMCMssIp/view",
                  "https://drive.google.com/file/d/1wkDvfidbbJmAWJRSePQIj_ASKgcGBBfN/view",
                  "https://drive.google.com/file/d/1N57WMgI9ruLFCvUD0DsOoEd71FzsfpHT/view",
                ],
              ]}
            />

            <Box
              reff={el5}
              subjectName="M3"
              number={1}
              names={["Notes"]}
              data1={[
                ["Unit -1", "Unit -2", "Unit -3", "Unit -4"],
                [
                  "https://drive.google.com/file/d/1Wj07FLezJXu9n2Yx2bf8J0on5yzrjZl_/view",
                  "https://drive.google.com/file/d/1dPqItsVKKxyBZmkcSLLUgfQL7tOxA-Ze/view",
                  "https://drive.google.com/file/d/18dBlECRORXBjFvjDili5yxUDHZnYJiLm/view",
                  "https://drive.google.com/file/d/1rUmq0byUsRGnjd79ZKkb6iYF3CGSmZAJ/view",
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
