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
          <Hero head="IT" />
          <TopBar subject={["PHYSICS", "BEE", "M1"]} />
          <div className={classes.subjectBoxes}>
            <Box
              subjectName="Physics"
              number={4}
              names={["notes", "books", "previous year question papers"]}
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
                  "MST-1 (2019)",
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
