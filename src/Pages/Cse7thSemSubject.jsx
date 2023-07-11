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
            subject={["AGILE", "AWSN", "DWDM", "NSC", "RS"]}
            clicks={[clickk1, clickk2, clickk3, clickk4, clickk5]}
          />
          <div className={classes.subjectBoxes}>
            <Box
              reff={el1}
              subjectName="AGILE"
              number={1}
              names={["Notes"]}
              data1={[
                [
                  "Handwritten Notes",
                  "UNIT -1",
                  "UNIT -2",
                  "UNIT -3",
                  "UNIT -4",
                  "UNIT -5",
                  "UNIT -6",
                ],
                [
                  "https://drive.google.com/file/d/1JOpwGfFcyCBuDOCagSl8JnjFaICuonZ_/view",
                  "https://drive.google.com/file/d/1N6wXvD8P0adcPVjsSsCOAJHVcHELKbvA/view",
                  "https://drive.google.com/file/d/1zCrx83ZuSNXTe46KB00lVv59PfGZg6B-/view",
                  "https://drive.google.com/file/d/1_9uEyTrVYw7FGn4eVH-sxJ0Hc7pMyJdf/view",
                  "https://drive.google.com/file/d/1Cc0HM3onu1LwBwDXT8Jc1slYo11DDEjD/view",
                  "https://drive.google.com/file/d/1KXN86hYfGUsEtGbIyEfeqQTtYE02SMix/view",
                  "https://drive.google.com/file/d/12bkhvTwJ5tzsCYqh9gWL7RnbRk6Fn33d/view",
                ],
              ]}
            />
            <Box
              reff={el2}
              subjectName="AWSN"
              number={2}
              names={["Notes", "Book"]}
              data1={[
                ["Unit -1", "Unit -2", "Unit -3", "Unit -4", "Unit -5"],
                [
                  "https://drive.google.com/file/d/1aT7h_mx5vG2rtLKAKZTRlwXrt2rthFka/view",
                  "https://drive.google.com/file/d/1-TqBNax54NOM0jljTqmJRizV6NBQgMnw/view",
                  "https://drive.google.com/file/d/1BQbkZ-knV-SdGl7EzNiXI1cBBr3Ev91k/view",
                  "https://drive.google.com/file/d/1bKMdpPhtj1NIu8n04ILIsKuWVvRNg7R2/view",
                  "https://drive.google.com/file/d/1lhoQwf25D-x9FfslOToG5kw1PkPHMV8O/view",
                ],
              ]}
              data2={[
                ["Book"],
                [
                  "https://drive.google.com/file/d/1pd-Ju_PWif1zZaJSflSMWAowyd3v_Svj/view",
                ],
              ]}
            />
            <Box
              reff={el3}
              subjectName="DWDM"
              number={1}
              names={["Notes"]}
              data1={[
                [
                  "Handwritten Notes",
                  "Unit -1",
                  "Unit -2",
                  "Unit -3",
                  "Unit -4",
                ],
                [
                  "https://drive.google.com/file/d/1sww5lTgYlDDR20mHXUeg95XJy33Hk-2N/view",
                  "https://drive.google.com/file/d/1PdjOabFlmij3fvH6IK7cEItGog9PEpEM/view",
                  "https://drive.google.com/file/d/1lhqxHxZaGFiMN2_Ele_SY6VMJ0s7RE0M/view",
                  "https://drive.google.com/file/d/1TP-yuy1NAy5KsGJ5xIsxRrJBz7a_Be9G/view",
                  "https://drive.google.com/file/d/12u9G0SmwcdJy-o0FWDp1hZVkHrL4_aX-/view",
                ],
              ]}
            />
            <Box
              reff={el4}
              subjectName="NSC"
              number={2}
              names={["Notes", "Books"]}
              data1={[
                [
                  "Handwritten Notes",
                  "Unit -1",
                  "Unit -2",
                  "Unit -3",
                  "Unit -4",
                  "Unit -5",
                ],
                [
                  "https://drive.google.com/file/d/1AAWFETswn-jbkwqUjZs38wcGJQQzNgya/view",
                  "https://drive.google.com/file/d/1M_-WiXfu89C2BGo34e4KRspfVFtIx7a_/view",
                  "https://drive.google.com/file/d/19dAz7gw-V8luiFAbwx4BFLrfUeI_JPws/view",
                  "https://drive.google.com/file/d/1YY7eTH9Vase_58tET-dVr-5e5mbOEgz3/view",
                  "https://drive.google.com/file/d/1qt6z_mYGL0-ds2stT6bL1qnwUvNEtlI8/view",
                  "https://drive.google.com/file/d/10sWg8DFiZl8rLjF0dCqVp_AvOATSoPvA/view",
                ],
              ]}
              data2={[
                ["NSC Book"],
                [
                  "https://drive.google.com/file/d/13BNg4GfSewiECb8dPdAfRjS1ugxMmamR/view",
                ],
              ]}
            />
            <Box
              reff={el5}
              subjectName="RS"
              number={1}
              names={["Notes"]}
              data1={[
                ["Unit -1", "Unit -2", "Unit -3", "Unit -4"],
                [
                  "https://drive.google.com/file/d/1k1JbVIH3JGRleVK9ON12lZbSML8kLLA5/view",
                  "https://drive.google.com/file/d/1fMdMIZWOwL8G8lJ2ENoa3dTzR9qxQGCx/view",
                  "https://drive.google.com/file/d/11HHzIjeHpz8iphVg4HNWra5WTz1eet12/view",
                  "https://drive.google.com/file/d/1lX0u-JbMdSQ6odeASA0VSAWIR5Q7NYBH/view",
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
