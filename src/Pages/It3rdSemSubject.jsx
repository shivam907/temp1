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
            subject={["DSA", "OOPS", "M3", "DOS", "DE"]}
            clicks={[clickk1, clickk2, clickk3, clickk4, clickk5]}
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
              subjectName="OOPS"
              number={2}
              names={["Notes", "Lords Sample Paper"]}
              data1={[
                [
                  "Module 1",
                  "Module 2",
                  "Console I/O Function",
                  "Type Conversion",
                  "Exception Handling",
                  "File Handling",
                  "Templates",
                ],
                [
                  "https://drive.google.com/file/d/1bACAiGrYCzriHOID0xkycces4EQLTpKZ/view",
                  "https://drive.google.com/file/d/1pXnD_OrTBPgk1QPbWPQBiNpo09dpgBmK/view",
                  "https://drive.google.com/file/d/19yx1FiDpumOrHxje0eIiTNVzo9MnZQ8v/view",
                  "https://drive.google.com/file/d/1XYgRx3oh6BR3fWcoRkQdv4jaE5ol3PJY/view",
                  "https://drive.google.com/file/d/1kOVtYgcZWcH2Umk_9fPzKaMjBksq-15j/view",
                  "https://drive.google.com/file/d/1Q7bszM40h0tyw-dqoMgXKbYmFQczLT-e/view",
                  "https://drive.google.com/file/d/1N02oKjDpJU4d0bGMspeXfMX-mwHkriUZ/view",
                ],
              ]}
              data2={[
                ["Part-1", "Part-2"],
                [
                  "https://drive.google.com/file/d/1GzVXsq6TDJv7Oar2rQ5dd32HcDu5EENe/view",
                  "https://drive.google.com/file/d/1g2SmA66jYj-RCpxlVbCIlSy178CCoDUc/view",
                ],
              ]}
            />
            <Box
              reff={el3}
              subjectName="M3"
              number={2}
              names={["notes", "Lords Sample Paper"]}
              data1={[
                ["Part-1", "Part-2", "Part-3"],
                [
                  "https://drive.google.com/file/d/1TB-FELjeYZ6qcYoKv_kDYmkw4crtR8cA/view",
                  "https://drive.google.com/file/d/192cvCS4x7XL4YcTPC36KG0FylsJB4520/view",
                  "https://drive.google.com/file/d/1hytBwo5ocpGM0lg_zTLnbBiZv45SAXMK/view",
                ],
              ]}
              data2={[
                ["Sample Paper"],
                [
                  "https://drive.google.com/file/d/1-bfVbVOKaj-p3ViOyw5CCHDQS6Whk2m2/view",
                ],
              ]}
            />
            <Box
              reff={el4}
              subjectName="DOS"
              number={1}
              names={["Notes"]}
              data1={[
                ["Module-1", "Module-2", "Module-3"],
                [
                  "https://drive.google.com/file/d/1GCMCFYt6YMcdr8w-MGR-j6I7qCX8AWKh/view",
                  "https://drive.google.com/file/d/15sJ9va4ZCoIweDLX8oRjU05EMWnfbWs5/view",
                  "https://drive.google.com/file/d/1XnT1T2nBXBEPyD3iIQdelBn15nrIYo18/view",
                ],
              ]}
            />
            <Box
              reff={el5}
              subjectName="DE"
              number={3}
              names={["notes", "books", "Lords Sample Paper"]}
              data1={[
                [
                  "Module-1 Handwritten",
                  "Module-2 Handwritten",
                  "Module-3 Handwritten-1",
                  "Module-3 Handwritten-2",
                  "Module-3 Handwritten-3",
                  "Module-4 Handwritten",
                ],
                [
                  "https://drive.google.com/file/d/1TPPjzXc_0dbS7x1zd5VnkNTSlDOUtQx7/view",
                  "https://drive.google.com/file/d/1Yswb7pV34lDQcElCDGttvqZrtFHIPOEZ/view",
                  "https://drive.google.com/file/d/118hi9scbBqz4RKWomwm279lE2XGAstJx/view",
                  "https://drive.google.com/file/d/1ZIXpcVNz_KDdAwSDeJptqpTAd7J4bsqr/view",
                  "https://drive.google.com/file/d/1tpYCd2Fq6N0bq-er6CB9kYm1d0AOBchQ/view",
                  "https://drive.google.com/file/d/1kEIAyoVkWQ4GVEOpRWIXB1pR_hEoYSVY/view",
                ],
              ]}
              data2={[
                [
                  "Module-1 Book 1",
                  "Module-1 Book 2",
                  "Module-2 Book",
                  "Module-3 Book 1",
                  "Module-3 Book 2",
                  "Module-4 Book 1",
                  "Module-4 Book 2",
                ],
                [
                  "https://drive.google.com/file/d/1UNxmQ7hUoiWYpyRae5sXom7ujEkrSEbf/view",
                  "https://drive.google.com/file/d/17V4LPsDEFpaMbr-W_eftewpDSnBP6uGa/view",
                  "https://drive.google.com/file/d/1ZvYWmpxwjW5pHy4TKcwfTdncIFwl2hbR/view",
                  "https://drive.google.com/file/d/18216kl1AX_IMspuBb9SMdkqEfx52uPwB/view",
                  "https://drive.google.com/file/d/1es_ZHo1WYeY3RY0Fw-WowqJrXmwRmROG/view",
                  "https://drive.google.com/file/d/1ccgZdgEu2kzx_TLsAjXcAuIvfIul7-Vf/view",
                  "https://drive.google.com/file/d/1oEtRycw-IqOb9KZ7eJnItlVLXoAmvsY3/view",
                ],
              ]}
              data3={[
                ["Part-1", "Part-2"],
                [
                  "https://drive.google.com/file/d/1FKxqgpZng0qlXuFOlb68qQu4G18_yq4_/view",
                  "https://drive.google.com/file/d/1w5GVqivicpncLbr2u79XUWChYmpcGZ6S/view",
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
