import React from "react";
import classes from "./TopBar.module.css";
function TopBar() {
  return (
    <section className={classes["top-bar-section"]}>
      <div className={classes["top-bar-container"]}>
        <div className={`${classes["subjects"]} ${classes["active-subject"]}`}>
          DM
        </div>
        <div className={classes["subjects"]}>DAA</div>
        <div className={classes["subjects"]}>COA</div>
        <div className={classes["subjects"]}>UHV-2</div>
        <div className={classes["subjects"]}>EVS</div>
      </div>
    </section>
  );
}

export default TopBar;
