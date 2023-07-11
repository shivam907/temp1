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
            subject={["CHEMISTRY", "PPS", "M2"]}
            clicks={[clickk1, clickk2, clickk3]}
          />

          <div className={classes.subjectBoxes}>
            <Box
              subjectName="Chemistry"
              reff={el1}
              number={3}
              names={["Notes", "Books", "Previous year question papers"]}
              data1={[
                [
                  "Intermolecular Force Teachers Notes",
                  "Periodic Properties Teachers Notes",
                  "Periodic Properties Handwritten",
                  "Spectroscopy Handwritten",
                  "Steriochemistry Teachers Notes",
                  "Use of Free Energy Teachers Notes",
                  "Use of Free Energy Handwritten",
                  "Organic Reaction Teachers Notes",
                  "Atomic Structure Printed Notes",
                  "Atomic Structure Handwritten Notes",
                ],
                [
                  "https://drive.google.com/file/d/1YXaZlL4sZcfZjg-0SGExaSEBZcB7sDo0/view?pli=1",
                  "https://drive.google.com/file/d/17O1rxTSTky6S348WhojXA4JoE2-k27yo/view",
                  "https://drive.google.com/file/d/1lKHkxrYGMQpV9bSmDM4dXLB_SEnGBhLf/view",
                  "https://drive.google.com/file/d/1DlYWWFUh2NViCVVzlTlcO-mT0zmuV8kI/view",
                  "https://drive.google.com/file/d/1XjSeI6kwOTsiC3pXX-2N9BH7r-b9PVta/view",
                  "https://drive.google.com/file/d/1KC9bv3P7pmz8ZeB6psCfj1Rn_dLTfLou/view",
                  "https://drive.google.com/file/d/1JGk7THyydHNXQlQ1wWliDuRzN1IyL9rA/view",
                  "https://drive.google.com/file/d/1LSPgJRuuPqiKVuQrQktzekxQy60s4-9_/view",
                  "https://drive.google.com/file/d/1_j2czW90mfKez_A0oBdQgiExmFAJel3_/view",
                  "https://drive.google.com/file/d/1G58wq9nL3ug-x2AAnlhnrggJUanaU1go/view",
                ],
              ]}
              data2={[
                [
                  "Intermolecular Force Book",
                  "Spectroscopy Book",
                  "Steriochemistry Book",
                  "Water Chemistry Book",
                ],
                [
                  "https://drive.google.com/file/d/1NV3fYlqJ-NRTbp3z80oGUQPyKc5kWN8v/view",
                  "https://drive.google.com/file/d/1i98A79cR4SASeaqNbbmGiE1x4rYPu2Kz/view",
                  "https://drive.google.com/file/d/1iRAQItDl-GwT2X1N9QiIIgx5oy6F6XEx/view",
                  "https://drive.google.com/file/d/1T5UbECG7qEHiJFCcV7TukNO5pcVH2olU/view",
                ],
              ]}
              data3={[
                ["Lords Sample Paper", "Paper Dec 2019", "Question Bank"],
                [
                  "https://drive.google.com/file/d/1SR-_hC_rG0DpzTdbUN11aHEAzlCYYkO6/view",
                  "https://drive.google.com/file/d/15gT25vj36oPXQNC2WPWhmtE-o6N-_6IH/view",
                  "https://drive.google.com/file/d/1Q1EBs4HnqWdYPN5wq8bZZ5blPfLgge40/view",
                ],
              ]}
            />
            <Box
              subjectName="PPS"
              reff={el2}
              number={3}
              names={[
                "Notes",
                "Book and Lab File",
                "Previous year question papers",
              ]}
              data1={[
                [
                  "Students Notes Unit-1",
                  "Teachers Notes Unit-1",
                  "Students Notes Unit-2",
                  "Teachers Notes Unit-2",
                  "Students Notes Unit-3",
                  "Teachers Notes Unit-3",
                  "Students Notes Unit-4",
                  "Teachers Notes Unit-4",
                  "Teachers Notes Unit-5",
                  "Teachers Notes Unit-6",
                  "Teachers Notes Unit-7",
                  "Teachers Notes Unit-8",
                  "Teachers Notes Unit-9",
                ],
                [
                  "https://drive.google.com/file/d/1Wz5r8_eFy9Dl5i9AFS7EKFr6KPZL7Qv1/view",
                  "https://drive.google.com/file/d/1irtch89idHGDIN0v50b_uNUIlYQGwFOD/view",
                  "https://drive.google.com/file/d/1Eg7H-peWfPdh1mcHu3zN5celDAwwzlgk/view",
                  "https://drive.google.com/file/d/10CG247mZbaKfy07XOdaYI9qxLq9MYC76/view",
                  "https://drive.google.com/file/d/1W916Qdc2FzZVU4KcSWBEbqf2uZjkMiwt/view",
                  "https://drive.google.com/file/d/1xs3DqVL2t8WvKNqRUCLhbI6GwP0hRlLq/view",
                  "https://drive.google.com/file/d/1zluYTPJoZ4EF5M5ezF39fsHaaxpln6aF/view",
                  "https://drive.google.com/file/d/1q-6gcfIZCkD1UAnKNiEBcs_zsgPB6Gta/view",
                  "https://drive.google.com/file/d/1xTPG-zgW7QVho9LHXliorLFXjVrv699h/view",
                  "https://drive.google.com/file/d/1W4GbKaICO6JWZErkx2iy996Mfr0xWhi7/view",
                  "https://drive.google.com/file/d/1KUC-T69JYI9EUc0eQCB-dOApcnf1Lq70/view",
                  "https://drive.google.com/file/d/1CmByqE5Ilge16Nvy7AdZzqV3apQGw-wu/view",
                  "https://drive.google.com/file/d/1yyE_us3CiI_Nbg1HbI7ujREqBXnmZa5P/view",
                ],
              ]}
              data2={[
                ["Book", "Lab File"],
                [
                  "https://drive.google.com/file/d/18Xl6fLX71NEqRSYtDYfnGihua--u0AUk/view",
                  "https://drive.google.com/file/d/17JOIUTgw67942mCfwVceX2gQI-tD9Szn/view",
                ],
              ]}
              data3={[
                ["Lord Sample Paper", "May 2019 Final", "May 2020 Final"],
                [
                  "https://drive.google.com/file/d/13MqyG4b1rgeIztlDPcdnEIp2N0GPI0_I/view",
                  "https://drive.google.com/file/d/1Q8005EDPdhhX9NHGrGxJ-JYoe70H02pZ/view",
                  "https://drive.google.com/file/d/12ExNGZ6MduWUASKglw42yS48mZ0dszRa/view",
                ],
              ]}
            />
            <Box
              subjectName="M1"
              reff={el3}
              number={2}
              names={["Notes", "Books"]}
              data1={[
                [
                  "Measure of Central Tendency",
                  "Curve Fitting",
                  "Continuous Random Variable",
                  "Co-relation Analysis",
                  "Exponential Distribution",
                  "F and CHI and Large Test",
                  "Normal Distribution",
                  "Probability Distribution",
                  "Sample Theory",
                  "Test on Single Mean and Difference of Proportion",
                ],
                [
                  "https://drive.google.com/file/d/19HV8FJMg_YAeKoxMHjPOJZcOZGaEMCRJ/view",
                  "https://drive.google.com/file/d/1YfaJCexrReBoMKzs5GMm0l6bxFuz5lqx/view",
                  "https://drive.google.com/file/d/1O7oxrYcXm2WWjaqWyY0CIdy7WxM9pLhm/view",
                  "https://drive.google.com/file/d/1GbPA8O_i1thE80IBueqZ9_j4gWB9g2tY/view",
                  "https://drive.google.com/file/d/1vdBXoEUt_0_1i6QxHE0P9HIehFaLma-I/view",
                  "https://drive.google.com/file/d/1AF4mFGWBLkD9wRqhBr_qd0M_vBFM37Z_/view",
                  "https://drive.google.com/file/d/12MHo2YeXMCjCI-S4L0l_4TMh8v_t7dun/view",
                  "https://drive.google.com/file/d/1x74Fy-Njztej7ZTA0Ar26Iwd4jcnPk_q/view",
                  "https://drive.google.com/file/d/1SpCiI4LJFoQ6gOjN1pg5MTrMCC1UDmj3/view",
                  "https://drive.google.com/file/d/1NbsXSoTsPXJ1AZ2KeDCSJnuTqC0K8U7o/view",
                ],
              ]}
              data2={[
                [
                  "Unit-1",
                  "Unit-2",
                  "Unit-3",
                  "Unit-4",
                  "Unit-5",
                  "Unit-6",
                  "Unit-7",
                  "Unit-8",
                  "Unit-9",
                  "Unit-10",
                  "Unit-11",
                  "Unit-12",
                  "Unit-13",
                  "Unit-14",
                  "Unit-15",
                ],
                [
                  "https://drive.google.com/file/d/1udMeqzVhhOiLQh7k2nagBT4s5AMPUz_3/view",
                  "https://drive.google.com/file/d/13wZiTEN-oUarEx06OpIAtxuKx_u_Mqr0/view",
                  "https://drive.google.com/file/d/1TxQcWmJTcZT3EHydwkGjYptRBB83yU3Q/view",
                  "https://drive.google.com/file/d/14e3mQUIAYrpWKc6iXMZ3QKnsanNAmgBC/view",
                  "https://drive.google.com/file/d/1u97rLbgMIw30bVgKzaPIlyOjuvrvi1lz/view",
                  "https://drive.google.com/file/d/1MuOHpA11Zmfyikff3ahCHirKpczy1XVg/view",
                  "https://drive.google.com/file/d/1tbpcWB3Bx8QJnIk4n9_00PE31v88AGdn/view",
                  "https://drive.google.com/file/d/19iOHLdVP2b58EPvbIOz2i723aeiDJz3f/view",
                  "https://drive.google.com/file/d/1YxDOKRcmZn64OIKLATCcvsiIQ8t-Wa0G/view",
                  "https://drive.google.com/file/d/1Bucv5mcMraBbTi3c0XyV2O8ArsjLnAd5/view",
                  "https://drive.google.com/file/d/1gAmH6rEfiVqMcniMkEm_SHRAn4h4R3Nw/view",
                  "https://drive.google.com/file/d/16PYm6lRAlFLVqhD9xI6L4Rkdjd3JjAgm/view",
                  "https://drive.google.com/file/d/1MgkoSgyQlNAyq8I1cCGvYNn3FM-IoEsO/view",
                  "https://drive.google.com/file/d/1yo2q5EAj_H0EKQVwqq7D6gsUe3TMblx3/view",
                  "https://drive.google.com/file/d/1QNvUiFxsigkFOX4f9uFMZ1DgUaGBxh5r/view",
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
