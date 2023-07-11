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
            subject={["WC", "CN", "MAE", "C Sharp", "OFC"]}
            clicks={[clickk1, clickk2, clickk3, clickk4, clickk5]}
          />
          <div className={classes.subjectBoxes}>
            <Box
              reff={el1}
              subjectName="WC"
              number={1}
              names={["Notes"]}
              data1={[
                [
                  "Unit-1 Notes",
                  "Unit-1 PPT",
                  "Unit-2 Notes",
                  "Unit-2 PPT",
                  "Unit-3-4 PPT",
                  "Unit-4 Notes",
                  "Unit-5 Notes",
                ],
                [
                  "https://drive.google.com/file/d/1IddWKVbjWFzmb72SSwP9CgEysSvXriG4/view",
                  "https://drive.google.com/file/d/1UBC00gdGeKSHdZ3L2KQB1HIsrOppRU8w/view",
                  "https://drive.google.com/file/d/1o7xonKWkpJCf7lmUkspWerrELhHjIxo6/view",
                  "https://drive.google.com/file/d/1wffNapXtHq752DrIByUBZ4hl_t-1ipZI/view",
                  "https://drive.google.com/file/d/1e5M8hTbkQaJpnzDooGzMsNhuaNX8tS2y/view",
                  "https://drive.google.com/file/d/1Hn4emr1t8lT7lWm0ng50M-U3JpLgI87U/view",
                  "https://drive.google.com/file/d/18dtm3TMIGJ9kx71CTURx5wQ2614Fzg_5/view",
                ],
              ]}
            />
            <Box
              reff={el2}
              subjectName="CN"
              number={1}
              names={["Notes"]}
              data1={[
                ["Unit-1", "Unit-2", "Unit-3", "Unit-4"],
                [
                  "https://drive.google.com/file/d/19n7awn-2241M72AGCOoJO1dX3Zpm2t5J/view",
                  "https://drive.google.com/file/d/1usNE8NoRF251hj0AjaYn0F8lJpdmiG-W/view",
                  "https://drive.google.com/file/d/1MB6bqKmlj75OcXJUxrdvrX8Mf-23wZKr/view",
                  "https://drive.google.com/file/d/11q2ccgoDH6C3KMt8D_-wxXVd6dqSaZqy/view",
                ],
              ]}
            />
            <Box
              reff={el3}
              subjectName="MAE"
              number={1}
              names={["Notes"]}
              data1={[
                ["Unit-1", "Unit-2", "Unit-3", "Unit-4"],
                [
                  "https://drive.google.com/file/d/1cEevnz_cH4ey9rsCuddDbLj4Tilqx1T1/view",
                  "https://drive.google.com/file/d/1GABX83Dzd-A9QXY7YwLBjSzeubr0xTr8/view",
                  "https://drive.google.com/file/d/1rIEyEbwXcUvueUQnne8NcdWHzZsAY807/view",
                  "https://drive.google.com/file/d/17tHqVy-ZExaE84bDTppA3sghImPE8I1D/view",
                ],
              ]}
            />
            <Box
              reff={el4}
              subjectName="C Sharp"
              number={1}
              names={["Notes"]}
              data1={[
                ["Unit-1", "Unit-2", "Unit-3", "Unit-4"],
                [
                  "https://drive.google.com/file/d/1KnPJJnTS7b3iWMF2K4w3a9Umnmk-r04a/view",
                  "https://drive.google.com/file/d/1Kjui3lsiYXaDSyR4aqzg6cct8Z0fmtO1/view",
                  "https://drive.google.com/file/d/1GFVdeAk97SJDMAFpYg_HRVV69cb8L5Kl/view",
                  "https://drive.google.com/file/d/1zzQI9emuedbPV28cPRAMf1yYU8WCt84D/view",
                ],
              ]}
            />
            <Box
              reff={el5}
              subjectName="OFC"
              number={1}
              names={["Notes"]}
              data1={[
                ["Unit-1", "Unit-2", "Unit-3-4", "Unit-5"],
                [
                  "https://drive.google.com/file/d/1me4JD-xI__TupjKG7-vwrWQiuLc1lTlH/view",
                  "https://drive.google.com/file/d/1b74flpuGfU3yDs9tAaWuOLkEiJuKARdZ/view",
                  "https://drive.google.com/file/d/18vx3Y3oJi1WXoVp8vgXckG0cxTUKTkbw/view",
                  "https://drive.google.com/file/d/18HhKfF13zKlLtVTkweZeZUAZss0gQvIB/view",
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
