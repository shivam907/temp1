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
            subject={["CN", "DS", "PC", "PYTHON"]}
            clicks={[clickk1, clickk2, clickk3, clickk4]}
          />
          <div className={classes.subjectBoxes}>
            <Box
              reff={el1}
              subjectName="CN"
              number={2}
              names={["Notes", "Books"]}
              data1={[
                [
                  "Section A",
                  "Section B(1)",
                  "Section B(2)",
                  "Section B(3)",
                  "Section C",
                  "Section D",
                ],
                [
                  "https://drive.google.com/file/d/1VlS0wtDI6BSjgyfbgUfUYAaM0mBmmVjx/view",
                  "https://drive.google.com/file/d/1K1oP1EelOXaXT0w95JKwoNtvZNY3Pqu_/view",
                  "https://drive.google.com/file/d/1JAuU9WnWy4S60sjqthrsUhDNk_-4oa-0/view",
                  "https://drive.google.com/file/d/1m74cfa6yD5lzsef__IzrsZi1qrGqHSTh/view",
                  "https://drive.google.com/file/d/1CTl-s7RzN0RlL6Eqer7IrnAFddwb2Dq4/view",
                  "https://drive.google.com/file/d/1Fi6BDKRXaqiqPeUcafYofxyebHfb5m8t/view",
                ],
              ]}
              data2={[
                ["Book"],
                [
                  "https://drive.google.com/file/d/1N7V1834LPD8GtRTnKkGiuQmcFRk4WGB1/view",
                ],
              ]}
            />
            <Box
              reff={el2}
              subjectName="DS"
              number={1}
              names={["Notes"]}
              data1={[
                ["Section A", "Section B", "Section C", "Section D"],
                [
                  "https://drive.google.com/file/d/1iYo9wSHY708QQuJPdxhVDtbAc7rqfgOs/view",
                  "https://drive.google.com/file/d/1hvhVovKmfDYKZe8Si_B64CkN3oAAW4rp/view",
                  "https://drive.google.com/file/d/1qVH4levN_vAXw2_0XyooFHiVYhig0ZTf/view",
                  "https://drive.google.com/file/d/1EnQttdJQHC1sCv4XebUsrDPdJqVbibtQ/view",
                ],
              ]}
            />
            <Box
              reff={el3}
              subjectName="PC"
              number={2}
              names={["Notes", "Books"]}
              data1={[
                ["Section A-B", "Section C", "Section D"],
                [
                  "https://drive.google.com/file/d/1r598HuzyuZTQv66vxJkYs6YkPZQ3s0SV/view",
                  "https://drive.google.com/file/d/12XUHGmdXfe8gcwqcHpY11EktA6wZKkXg/view",
                  "https://drive.google.com/file/d/1QY0slMieNu2_ZzTzwn1H_R43hfKcGhr4/view",
                ],
              ]}
              data2={[
                ["Book"],
                [
                  "https://drive.google.com/file/d/1sQlNiLX2XSCcPZHnq8l9b8eEQDq-3CZ-/view",
                ],
              ]}
            />
            <Box
              reff={el4}
              subjectName="Python"
              number={2}
              names={["Notes", "Books"]}
              data1={[
                [
                  "Section A",
                  "Section B(1)",
                  "Section B(2)",
                  "Section C",
                  "Section D",
                ],
                [
                  "https://docs.google.com/document/d/1Ong80XouVFOuacDV5OdlePJrHuZmtESP/edit",
                  "https://drive.google.com/file/d/18queXNZecnx-DzK5fHUtrAsiuRFAqFbu/view",
                  "https://drive.google.com/file/d/1I9pJsV709yrPneryJbAwXRMafsfdC9js/view",
                  "https://docs.google.com/document/d/1Her366L-4WqbYRLJbUhoWeZ4aTEn3_Du/edit",
                  "https://docs.google.com/document/d/17EhBUlm1b4Eep72ucbo5D5IqKIXDwugG/edit",
                ],
              ]}
              data2={[
                ["Book"],
                [
                  "https://drive.google.com/file/d/1SF5hmPcDWMK7ffZKfnrkjCaDjvPjNvEc/view",
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
