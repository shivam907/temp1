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
            subject={["CHEMISTRY", "PPS", "M1"]}
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
              reff={el3}
              subjectName="M1"
              number={3}
              names={["Notes", "Books", "Previous year question papers"]}
              data1={[
                [
                  "Beta and Gamma-1",
                  "Beta and Gamma-2",
                  "Matrices-1",
                  "Matrices-2",
                  "Linear Algebra",
                  "Volume and Surfaces",
                  "Improper Integral",
                  "Vector space",
                  "Linear Dependence or Independence ",
                ],
                [
                  "https://drive.google.com/file/d/1-vDeIDgMbbh6eoaJx13jqRF-Z8GcSzHf/view",
                  "https://drive.google.com/file/d/1sPLszbiGZYlgGgWGMv84O6b3uw0GV0RI/view",
                  "https://drive.google.com/file/d/1kW6S40T6-qD9O6u2rxmFFbP5lI8NmnI7/view",
                  "https://drive.google.com/file/d/1FPOJ9V-03vUmH2Czh-95Ad5q8B9yvvRd/view",
                  "https://drive.google.com/file/d/1ZjknHIFMTrVcu7LsW4lPZkZcBAgidB1_/view",
                  "https://drive.google.com/file/d/1a6_6idLYmKe6T2q4p_DrxSJc98D2RkOu/view",
                  "https://drive.google.com/file/d/11IzupfIVZHKoHKDuoFZd2rOaWpvN_oZw/view",
                  "https://drive.google.com/file/d/1LOdShubr9u-XjvPcxAtGxyvqcT_PpNbL/view",
                  "https://drive.google.com/file/d/1jhCH0MN4uENs0q-CPBfXKICKRL3DBkDh/view",
                ],
              ]}
              data2={[
                [
                  "General Theorems",
                  "Definite and Indefinite",
                  "Beta and Gamma",
                  "Intermediate form",
                  "Volume and Surfaces",
                  "Vector Space",
                  "Maxima and Minima",
                  "Eigen value and vector",
                  "Matrices",
                ],
                [
                  "https://drive.google.com/file/d/1QVbXeb3B-vxv_lZantjvToBgYZ85YySA/view",
                  "https://drive.google.com/file/d/1coDIkwOpG876xVkJd0_TkwGy8UJZhzMD/view",
                  "https://drive.google.com/file/d/1NO_5esnI6v0OJXrJcJ2dz3IB-8hUl8sT/view",
                  "https://drive.google.com/file/d/1HhaGC3O7PEkCVnRourm0fz0oXR7oG801/view",
                  "https://drive.google.com/file/d/1aS89VbSljLTvTAXBrzXg0ZFZMxAlOWA-/view",
                  "https://drive.google.com/file/d/1teYTl_pLZDBMhzc8KJ08x1MegOF5Tvq4/view",
                  "https://drive.google.com/file/d/1maSe7YgxMcjXIwLYHW5TAL6H6wheL9JV/view",
                  "https://drive.google.com/file/d/1BKXHio5Iu337-s8blfuom-jpWknFRLNT/view",
                  "https://drive.google.com/file/d/1DNW2bIvx1tfphrjAyLcaQHHXUjqWksqR/view",
                ],
              ]}
              data3={[
                [" Lords Sample Paper"],
                [
                  "https://drive.google.com/file/d/1jsx2raKIbRGlC8H8wxeKSh03ng2pjfHw/view",
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
