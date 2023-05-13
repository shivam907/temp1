import React from "react";
import classes from "./Hero.module.css";
// import { IonIcon } from "@ionic/react";
// import { MailOutline } from "react-ionicons";
// import Nav from "../../UI/Nav";
function hero() {
  return (
    <body>
      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      ></script>
      <div className={classes["hero-section"]}>
        <div className={classes["hero-content"]}>
          <h1 className={classes["hero-head"]}>
            The Ultimate Resource for Exam Preparation
          </h1>

          <p className={classes["hero-para"]}>
            We are helping hands and provide authentic notes, PTU solved PYQ,
            MST solved PYQ, AMCAT, markings & syllabus and other study material
            for FREE!
          </p>

          <div className={classes["input"]}>
            {/* <MailOutline
              className={classes["icon-hero"]}
              height="2.3rem"
              width="2.3rem"
              color={"#777777"}
            /> */}
            <input
              className={classes["hero-input"]}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <button className={classes["btn-hero"]}>Get Started</button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default hero;
