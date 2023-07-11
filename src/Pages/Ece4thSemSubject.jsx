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
            subject={["DSA", "EVS", "AC", "UHV"]}
            clicks={[clickk1, clickk2, clickk3, clickk4]}
          />
          <div className={classes.subjectBoxes}>
            <Box
              reff={el1}
              subjectName="DSA"
              number={2}
              names={["Notes", "Previous year question papers"]}
              data1={[
                [
                  "Introduction Printed",
                  "Introduction Handwritten",
                  "Array Printed",
                  "Stack Printed",
                  "Stack Handwritten",
                  "Queue Printed",
                  "Queue Handwritten",
                  "Tree Printed",
                  "Tree Handwritten",
                  "Graph Handwritten",
                  "Sorting Printed",
                  "Linked List Handwritten",
                ],
                [
                  "https://drive.google.com/file/d/1KgNROGKXEci_Qcj1XmRw9kxyEGdszDCy/view",
                  "https://drive.google.com/file/d/1qROnKZ9Xg8zvYQPXgo1yMaCpoG_VFH05/view",
                  "https://drive.google.com/file/d/1ECYYyVbv3Lxi49zg3u33F7lp0gSsTLPx/view",
                  "https://drive.google.com/file/d/1oAPv7hInGtdYfjOE03M0srcKzsToK3zN/view",
                  "https://drive.google.com/file/d/1qZk3bslThMuK8jycVy5MvIwmVAZmQhq0/view",
                  "https://drive.google.com/file/d/1FmXcspIFXTTV0tBqXe-_VKQjcOZK8yDb/view",
                  "https://drive.google.com/file/d/1dLPo8Rc1WJiYZx51gxpwn57B8jzWbDtR/view",
                  "https://drive.google.com/file/d/19VWQcrv_Kh-8M9KU9JGQyRopmJ9FJMUY/view",
                  "https://drive.google.com/file/d/1Q9CgZAMVcsXpL9nHQjKFlDYWtngwBjoD/view",
                  "https://drive.google.com/file/d/1W_kErzDOwGxE9I-oV_91qbkMDcO3AKQi/view",
                  "https://drive.google.com/file/d/15ORczTC8nwVAWxEilKSs3jEfgsSqxGMf/view",
                  "https://drive.google.com/file/d/150kYeEekRMRiKg2zWOJavM606dG0y5QN/view",
                ],
              ]}
              data2={[
                ["Lords Sample Paper"],
                [
                  "https://drive.google.com/file/d/1PA7wA_nyT4nUUI8eKnuarP-JBStXggqK/view",
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
              subjectName="AC"
              number={2}
              names={["Notes", "Books"]}
              data1={[
                ["Unit-1", "Unit-2", "Unit-3", "Unit-4"],
                [
                  "https://drive.google.com/file/d/1x99rSbDY7Liwh-Nz_3BiJNU6FYfAwRD7/view",
                  "https://drive.google.com/file/d/1c-YoF_e5Ev3K7ccXaflGav1ce1Oaa1Ue/view",
                  "https://drive.google.com/file/d/1dNIc1eK6FvuT6IsO8gP6ZZLUuW-KOfv3/view",
                  "https://drive.google.com/file/d/1lmTHGfQTUreCEkov1Tnmjx-uUVBsY0Yc/view",
                ],
              ]}
              data2={[
                ["Book"],
                [
                  "https://drive.google.com/file/d/1SStv18DJsP1TX9O6B32PJt-oou8sKbu8/view",
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
          </div>
        </>
      )}
    </>
  );
}

export default Subject;
