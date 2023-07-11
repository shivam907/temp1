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
            subject={["FLAT", "SE", "CN", "DBMS", "WT"]}
            clicks={[clickk1, clickk2, clickk3, clickk4, clickk5]}
          />
          <div className={classes.subjectBoxes}>
            <Box
              reff={el1}
              subjectName="FLAT"
              number={2}
              names={["Notes", "Lords Sample Paper"]}
              data1={[
                ["Unit-1,2", "Unit-3", "Unit-4", "Unit-5"],
                [
                  "https://drive.google.com/file/d/1JBJDQE4T3C7poc5rfvu9BloDJC1bXgPF/view",
                  "https://drive.google.com/file/d/1eQpHaK-qjpVRS2fph9P_LDE3MF2KKesM/view",
                  "https://drive.google.com/file/d/1RqJmS9FOTiynJTYiLiJuI-unQZNBr0Xa/view",
                  "https://drive.google.com/file/d/1EZG3GO0Ni_AZPS_Bbue1ZkxdX5KU4EtI/view",
                ],
              ]}
              data2={[
                ["Sample Paper"],
                [
                  "https://drive.google.com/drive/folders/1ZjpQ22ctmloxgs5OJwn1hBJFrgnO8IiQ",
                ],
              ]}
            />
            <Box
              reff={el2}
              subjectName="SE"
              number={1}
              names={["Notes"]}
              data1={[
                ["Unit-1", "Unit-2", "Unit-3", "Unit-4,5"],
                [
                  "https://drive.google.com/file/d/1pEiTxS_npsHrIRSozCrtmqhc6TVjc_Uw/view",
                  "https://drive.google.com/file/d/1Qha4B92wnFEroW5R4IV7wRUgFZuWyjvd/view",
                  "https://drive.google.com/file/d/1U6HVT_32jvtJPzr-XYDQP9r6FMWkJTFL/view",
                  "https://drive.google.com/file/d/1D1ndh10WPLA_noF1sITguiUQN2-9cKyU/view",
                ],
              ]}
            />
            <Box
              reff={el3}
              subjectName="CN"
              number={2}
              names={["Notes", "Lords Sample Paper"]}
              data1={[
                ["Unit-1", "Unit-2", "Unit-3", "Unit-4"],
                [
                  "https://drive.google.com/file/d/19n7awn-2241M72AGCOoJO1dX3Zpm2t5J/view",
                  "https://drive.google.com/file/d/1usNE8NoRF251hj0AjaYn0F8lJpdmiG-W/view",
                  "https://drive.google.com/file/d/1MB6bqKmlj75OcXJUxrdvrX8Mf-23wZKr/view",
                  "https://drive.google.com/file/d/11q2ccgoDH6C3KMt8D_-wxXVd6dqSaZqy/view",
                ],
              ]}
              data2={[
                ["Sample Paper"],
                [
                  "https://drive.google.com/drive/folders/1ZjpQ22ctmloxgs5OJwn1hBJFrgnO8IiQ",
                ],
              ]}
            />
            <Box
              reff={el4}
              subjectName="DBMS"
              number={2}
              names={["Notes", "Lords Sample Paper"]}
              data1={[
                ["Unit-1", "Unit-2", "Unit-3", "Unit-4", "Unit-5", "Unit-6"],
                [
                  "https://drive.google.com/file/d/1sFNJzWgIWSLCxJeDFR9KVf5vMBtR4rHm/view",
                  "https://drive.google.com/file/d/1KS8mgHfy_2bBa95YL6DOAIPFWsDGIwDM/view",
                  "https://drive.google.com/file/d/1Vid21LPF88L9IHKdkqCQ4efmqMEfzZ4j/view",
                  "https://drive.google.com/file/d/1egEdK_MO28GPZsKpC_N1TiddCzzy6-B_/view",
                  "https://drive.google.com/file/d/1bOJLkBrYrMzU23kHOa-hzXKeSPRKlLGv/view",
                  "https://drive.google.com/file/d/15FCo3gmDM0Mo0nKZLs-dUvMLQ472Gxq6/view",
                ],
              ]}
              data2={[
                ["Sample Paper"],
                [
                  "https://drive.google.com/drive/folders/1ZjpQ22ctmloxgs5OJwn1hBJFrgnO8IiQ",
                ],
              ]}
            />
            <Box
              reff={el5}
              subjectName="WT"
              number={1}
              names={["Notes"]}
              data1={[
                ["Unit-1", "Unit-2", "Unit-3", "Unit-4", "Unit-5", "Unit-6"],
                [
                  "https://drive.google.com/file/d/1rU0uZhiSXRx2ra0NW77kFH5eRpVAEkf3/view",
                  "https://drive.google.com/file/d/1UhU4GOBnXuZvduhxv3qUWoKtqhpA5lVH/view",
                  "https://drive.google.com/file/d/10SUUyB3xVHq49pBK2FLxMuPiesxTCwSi/view",
                  "https://drive.google.com/file/d/1F3QYo5WZmx76JLekUSLGadSNaPT60oKT/view",
                  "https://drive.google.com/file/d/1uusEJVPT7Kn8AoVpLJiPB7F11J6QRI37/view",
                  "https://drive.google.com/file/d/1RfPndHJr9swuiLi5d8TIr_662sNq51rk/view",
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
