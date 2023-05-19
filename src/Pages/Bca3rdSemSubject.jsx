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
          <TopBar subject={["CN", "DS", "PC", "PYTHON"]} />
          <div className={classes.subjectBoxes}>
            <Box
              subjectName="CN"
              number={4}
              names={["notes", "books"]}
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
              subjectName="DS"
              number={4}
              names={["notes"]}
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
              subjectName="PC"
              number={4}
              names={["notes", "books"]}
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
              subjectName="Python"
              number={4}
              names={["notes", "books"]}
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
