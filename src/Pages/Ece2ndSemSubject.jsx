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
          <Hero head="IT" />
          <TopBar
            subject={["PHYSICS", "BEE", "M1"]}
            clicks={[clickk1, clickk2, clickk3]}
          />
          <div className={classes.subjectBoxes}>
            <Box
              reff={el1}
              subjectName="Physics"
              number={3}
              names={["Notes", "Books", "Previous year question papers"]}
              data1={[
                [
                  "Module-1 Teacher's Notes",
                  "Module-1 Handwritten Notes",
                  "Module-2 Teacher's Notes",
                  "Module-2 Handwritten Notes",
                  "Module-3 Teacher's Notes",
                  "Module-3 Handwritten Notes",
                  "Module-4 Teacher's Notes",
                  "Module-4 Handwritten Notes",
                ],
                [
                  "https://drive.google.com/file/d/1q2NAJpFQJyw_BtpnUiYp2mS1fixjadTZ/view",
                  "https://drive.google.com/file/d/1SpgrcmCfhfayvbAHu32y6Kf2eTYwoVse/view",
                  "https://drive.google.com/file/d/1RxMFPCtqYmkP2cTr6ZgtQ2Dc3TIzRrBM/view",
                  "https://drive.google.com/file/d/1Jwbrzo7YVdzYTMy8o9lK6HtrbxMZIZO_/view",
                  "https://drive.google.com/file/d/1ljJQN_ZBsFRW6S3dysv201kbDbnL56Wm/view",
                  "https://drive.google.com/file/d/1kV9VxNEw008TMLIOi1LsOUz6z-pRGHIh/view",
                  "https://drive.google.com/file/d/1N7KhJFjz5VqNwy9942SzaBzBjAHuWtKy/view",
                  "https://drive.google.com/file/d/1lZkVBtaZ6xLYEHgO_VWfX_CoASOe6jZk/view",
                ],
              ]}
              data2={[
                ["Book", "Free Electron Theory"],
                [
                  "https://drive.google.com/file/d/1qYAJynRk8yMLHZdEYCi4mt8ap8NrpnOn/view",
                  "https://drive.google.com/file/d/1f4r5-wB_G9JyCxHN8vR3dDGSj_Wrv3hg/view",
                ],
              ]}
              data3={[
                [
                  "MST-1 (2019)",
                  "MST-2 (2019)",
                  "Final Paper (2019)",
                  "Lords Sample Paper",
                ],
                [
                  "https://drive.google.com/file/d/1Tp-Z_TmTdlI7w1snl7rOHTzwAdClNlzE/view",
                  "https://drive.google.com/file/d/1NzCIvUdz0U-UbXnMMzPfcrfATNG97RCJ/view",
                  "https://drive.google.com/file/d/1q5a6kyF7K25sQL88RbrUc4UWHZapGjch/view",
                  "https://drive.google.com/file/d/1UyN1L_N9SNi9S0xfBcfO_W6FfcuYcZd1/view",
                ],
              ]}
            />
            <Box
              reff={el2}
              subjectName="BEE"
              number={3}
              names={["Notes", "Books", "Previous year question papers"]}
              data1={[
                [
                  "Module-1 Handwritten Notes ",
                  "Module-2 Handwritten Notes",
                  "Module-3 Handwritten Notes-1",
                  "Module-3 Handwritten Notes-2",
                  "Module-4 Handwritten Notes",
                  "Module-5 Handwritten Notes",
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
                  "Module-1 Book",
                  "Module-2 Book",
                  "Module-3 Book",
                  "Module-4 Book-1",
                  "Module-4 Book-2",
                  "Module-5 Book",
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
              subjectName="M2"
              number={1}
              names={["Books"]}
              data1={[
                [
                  "Chapter-1",
                  "Chapter-2",
                  "Chapter-3",
                  "Chapter-4",
                  "Chapter-5",
                  "Chapter-6",
                  "Chapter-7",
                  "Chapter-8",
                  "Chapter-9",
                ],
                [
                  "https://drive.google.com/file/d/1nPRVcpcHte0ahIM6_SeMCyKVb6bIdyEb/view",
                  "https://drive.google.com/file/d/13gSyoV9JeAOsR15l1BTha4-mn0SU7Eum/view",
                  "https://drive.google.com/file/d/1BTk4jV3clYv2N96XDSBUv8zn3aiudqRZ/view",
                  "https://drive.google.com/file/d/1Qv-58QTZyJZB8nPuritqipBxl0QAk9Nk/view",
                  "https://drive.google.com/file/d/1Nc2F7NqlAw9LIowtUBI89qZsO3zdQpo0/view",
                  "https://drive.google.com/file/d/14U3Jhj1cky0yAahpiYWcELbrzdPohG4Z/view",
                  "https://drive.google.com/file/d/1XBCzQQyRe6A-5WRjtHvBt8ktNwKwsM9G/view",
                  "https://drive.google.com/file/d/1LCWC2NdkETbOhEImRIUVRKnxEcQ0kr0v/view",
                  "https://drive.google.com/file/d/1jZh_r4vWNvO12nOuQ5hsQJYXv5vFekpK/view",
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
