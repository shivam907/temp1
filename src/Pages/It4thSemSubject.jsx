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
  function clickk6(e) {
    // let element = el1.current;
    el6.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Hero head="IT" />
          <TopBar
            subject={["DAA", "EVS", "M4", "UHV", "COA", "OS"]}
            click={[clickk1, clickk2, clickk3, clickk4, clickk5, clickk6]}
          />
          <div className={classes.subjectBoxes}>
            <Box
              reff={el1}
              subjectName="DAA"
              number={3}
              names={[
                "Notes",
                "Book and Lab file",
                "previous year question papers",
              ]}
              data1={[
                [
                  "Module-1 CEC Notes",
                  "Module-1 COE Notes",
                  "Module-1 Handwritten Notes",
                  "Module-2 CEC Notes",
                  "Module-2 COE Notes",
                  "Module-2 Handwritten Notes",
                  "Module-3 COE Notes",
                  "Module-3 Handwritten Notes",
                  "Module-4 COE Notes",
                  "Module-4 Handwritten Notes",
                  "Module-5 COE Notes",
                  "Module-5 Handwritten Notes",
                ],
                [
                  "https://drive.google.com/file/d/1gzsRxjPyVw2HAZT9mx4yliHViUA2Ji5C/view",
                  "https://drive.google.com/file/d/1w4FmXsCSgYJLuQOR6UIVeSuQPyUOKfwv/view",
                  "https://drive.google.com/file/d/1znq7pejtE6n7GP2DgI47hztJl5xfKrxr/view",
                  "https://drive.google.com/file/d/1akae4M7WbWXf3j0J9v_EJaYHs6fAEzgT/view",
                  "https://drive.google.com/file/d/1YmQMq9ldyU2srWWYqeU28q1uoCxug2SS/view",
                  "https://drive.google.com/file/d/1STdnCVzGzGM2cpwK003IkiQQ8iPxqYrH/view",
                  "https://drive.google.com/file/d/1HdTKdI6JstaQc0gCL5FeG0V0gozT-Lri/view",
                  "https://drive.google.com/file/d/1IB0p1Ma0QLrw-t4APeSrqYk3oXFb1QxB/view",
                  "https://drive.google.com/file/d/1whJEkyAUIJ4SxS9G7ksAi_x5QBB_2IS6/view",
                  "https://drive.google.com/file/d/1_uZ5WDq1LN7ZvgtfQg9LB56Y9daH8uUl/view",
                  "https://drive.google.com/file/d/1v7DoOOeLTX1rWqZlPK7j3DORLMGlxFSS/view",
                  "https://drive.google.com/file/d/1VvL0K1g-ivcEnNbE_RRZCA83R7LytElG/view",
                ],
              ]}
              data2={[
                ["Book", "Lab File"],
                [
                  "https://drive.google.com/file/d/1d3qde7JB1KxyAausFlnepa-kVaJlguB-/view",
                  "https://docs.google.com/document/d/1Wc4jGYvfy-kkPHh-RKObWZONJ3m1waUy/edit?rtpof=true&sd=true",
                ],
              ]}
              data3={[
                ["Lords Sample Paper", "Question Bank"],
                [
                  "https://drive.google.com/file/d/1-rnADGRvMI6VOQtaKfVecIHMwdXjZda7/view",
                  "https://drive.google.com/file/d/1R50u2aKET_faZ-b6ywytVmeq0ByPXJAx/view",
                ],
              ]}
            />
            <Box
              reff={el2}
              subjectName="EVS"
              number={1}
              names={["Notes"]}
              data1={[
                [
                  "Module-1 CEC Notes",
                  "Module-1 COE Notes",
                  "Module-2 CEC Notes",
                  "Module-2 COE Notes",
                  "Module-3 CEC Notes",
                  "Module-4 COE Notes",
                ],
                [
                  "https://drive.google.com/file/d/12yEMSMsEoTzN1mq5xe0vLxhSNzkKCDoa/view",
                  "https://drive.google.com/file/d/16DJHspFAsNns4UNiAZKR5Jt5R5RyyxRL/view",
                  "https://drive.google.com/file/d/16zP8QFqnhNm1Ir_VJKLGgxbUPkuNVlkF/view",
                  "https://drive.google.com/file/d/1_RQ9v4rbUyGi5vyA4_VM8YiobxHAmbwM/view",
                  "https://drive.google.com/file/d/1fG2HmRcJHyXRi2ko5AWmjIopSsOjDeVA/view",
                  "https://drive.google.com/file/d/1VPyGSIPvO9EKm4ZBTxn0WPikI6a_dpfW/view",
                ],
              ]}
            />
            <Box
              reff={el3}
              subjectName="M4"
              number={3}
              names={["Notes", "Books", "Lords Sample Paper"]}
              data1={[
                [
                  "Module-1 Handwritten Notes",
                  "Module-2 Handwritten Notes",
                  "Module-3 Handwritten Notes",
                  "Module-4 Handwritten Notes",
                  "Module-5 Handwritten Notes",
                ],
                [
                  "https://drive.google.com/file/d/1sLZcMuvUiFHZBME5FPlgDDZU2QFMJQQG/view",
                  "https://drive.google.com/file/d/1LmZ4TDRocfXR2hqUXx_97BO2UO-T2Z-f/view",
                  "https://drive.google.com/file/d/109uhlwuOY-phZ2-bRkta0Bt-hrfKzUpN/view",
                  "https://drive.google.com/file/d/1bRAGZRVNTFEKiPrGue7MVhKQE5uZEiuK/view",
                  "https://drive.google.com/file/d/1XJGComrWrbYcUS8HiFVZwPFO2kvE7uw8/view",
                ],
              ]}
              data2={[
                [
                  "Module-1 Book",
                  "Module-2 Book",
                  "Module-3 Book",
                  "Module-4 Book",
                  "Module-5 Book",
                ],
                [
                  "https://drive.google.com/file/d/1cjmIPwHRvjKiegDnYDqRDK0Y9nZsY5vL/view",
                  "https://drive.google.com/file/d/1UaXVyTDKnB7OJ-DloBnO6ye5qsTliabv/view",
                  "https://drive.google.com/file/d/1UaXVyTDKnB7OJ-DloBnO6ye5qsTliabv/view",
                  "https://drive.google.com/file/d/19Xl6p1odAXnJV84PspDnjxgZ06KFsm02/view",
                  "https://drive.google.com/file/d/1LC6TuxtpdrpAz73qdHSS3IKSoD253Tf1/view",
                ],
              ]}
              data3={[
                ["Sample Paper"],
                [
                  "https://drive.google.com/file/d/1Lo20Ou6Rl8dLqHYwTEJ-bOttwDkWDvCI/view",
                ],
              ]}
            />
            <Box
              reff={el4}
              subjectName="UHV"
              number={2}
              names={["Notes", "Books"]}
              data1={[
                [
                  "Module-1 Notes",
                  "Module-2 Notes",
                  "Module-3 Notes",
                  "Module-4 Notes",
                  "Complete Notes-1",
                  "Complete Notes-2",
                ],
                [
                  "https://drive.google.com/file/d/1eQBjVbGqUIvkLMJmjqC4Bx17bFk7SUNJ/view",
                  "https://drive.google.com/file/d/1TTWFiNp5cJssHrChDLvOVSEDfR_KvCBG/view",
                  "https://drive.google.com/file/d/1_3dB5PmLz2He-iYfd2K79AYqKwgZzHlb/view",
                  "https://drive.google.com/file/d/1-fmjbDlctqFxIKnisPIytJcPXsOAVzBV/view",
                  "https://drive.google.com/file/d/1hnkKKAqRZLLDLbpSIAYa3mMSP1p0Y7Nt/view",
                  "https://drive.google.com/file/d/1NSe2cIJYg0bwXRk6yZxOg1YoJJ0VDZbQ/view",
                ],
              ]}
              data2={[
                ["Book", "Question Bank"],
                [
                  "https://drive.google.com/file/d/1rg6POCHx0Xvc_1_AjszttVXzCfVJG4i-/view",
                  "https://docs.google.com/document/d/1nUSA-biR6QkUf6HtBlkXui3Bu0MRhy1J/edit",
                ],
              ]}
            />
            <Box
              reff={el5}
              subjectName="COA"
              number={3}
              names={["Notes", "Book and Lab File", "Lords Sample Paper"]}
              data1={[
                [
                  "Module-1 COE Notes",
                  "Module-1 CEC Notes",
                  "Module-2 COE Notes",
                  "Module-2 CEC Notes",
                  "Module-3 COE Notes",
                  "Module-3 CEC Notes",
                  "Module-4 COE Notes",
                  "Module-4 CEC Notes",
                ],
                [
                  "https://drive.google.com/file/d/1c4-82ZiPW4TwpdMATlNgkeMEewE-bKF0/view",
                  "https://drive.google.com/file/d/1j2llgd1KRqYuUprA6FIR6sWFHoLk6_GY/view",
                  "https://drive.google.com/file/d/1ueqlanpOiH58z7xdeSSfw8IWNAUGTOXk/view",
                  "https://drive.google.com/file/d/1KYn_2AU69Kfc3BBhHqWyauT21A26-O55/view",
                  "https://drive.google.com/file/d/1c8EdTOIoMSzvHefLi7Cia-RFuhgF2ZH2/view",
                  "https://drive.google.com/file/d/1RIbTq740rifuCoWKdB1wdcUyrjJPX_KZ/view",
                  "https://drive.google.com/file/d/1aZ3X1_08d2aaqpUntwhu_6Me7WTliWG6/view",
                  "https://drive.google.com/file/d/1-8zMgdsQhUxgOY0uNGeERMnvRDL2A4Fy/view",
                ],
              ]}
              data2={[
                ["Book", "Lab File"],
                [
                  "https://drive.google.com/file/d/15v4kdPC5Q9u8fq2BaDYaGor88zzr-yuA/view",
                  "https://docs.google.com/document/d/1WGuh8QhKbcHMe5VbZFkmD8jfQA0lyo9s/edit",
                ],
              ]}
              data3={[
                ["Lords Part-1", "Lords Part-2"],
                [
                  "https://drive.google.com/file/d/1VlDFNGkZLy0nG2sXG8SFjeB1MVW_eVeU/view",
                  "https://drive.google.com/file/d/1HTDnnOFG4_VmGwEhcUYyQR9FKyKFfIH3/view",
                ],
              ]}
            />
            <Box
              reff={el6}
              subjectName="OS"
              number={3}
              names={["Notes", "Lab File", "Lords Sample Paper"]}
              data1={[
                [
                  "Module-1 CEC Notes",
                  "Module-1 COE Notes",
                  "Module-2 CEC Notes",
                  "Module-2 COE Notes",
                  "Module-3 COE Notes",
                  "Module-4 CEC Notes",
                  "Module-4 COE Notes",
                  "Module-5 COE Notes",
                ],
                [
                  "https://drive.google.com/file/d/1J13rcbkmqVx-j3qqsCZN5Go8i4sLO2S4/view",
                  "https://drive.google.com/file/d/1LbpJrL6fBTPAlRCMzFDSMdakbZ04o37G/view",
                  "https://drive.google.com/file/d/1ld6u8XQiagvsjB3d2zAOX9yR6JnZdb5n/view",
                  "https://drive.google.com/file/d/14NzflEJYrD6TaHKbARN7RX2SyFQ3ApTw/view",
                  "https://drive.google.com/file/d/14UJkU4Fd_sFhFrOm1QBDa-4nWgeRMEag/view",
                  "https://drive.google.com/file/d/1eNR7HpaGPp7fnciYYy3zh7vYa-QgNdKH/view",
                  "https://drive.google.com/file/d/1PWF8zgCPP_nQ4dz2G5EnbcDq5ZmAA-bI/view",
                  "https://drive.google.com/file/d/1SeFWpeQu2P-hezaeRuVTVtqi83S49ig6/view",
                ],
              ]}
              data2={[
                ["Lab File"],
                [
                  "https://docs.google.com/document/d/17WO2JPBTZFTiv0ZAa5EiZSICDvaQj2H8/edit",
                ],
              ]}
              data3={[
                ["Sample Paper", "Question Bank"],
                [
                  "https://drive.google.com/file/d/1q-VQbNcXUeyl5REzLfmADtbY8JC7TmcG/view",
                  "https://drive.google.com/file/d/1TuRLQbg7tTd1RfcoiWwbEZyfsF7LHoRi/view",
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
