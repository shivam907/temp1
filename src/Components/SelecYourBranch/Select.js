import React from "react";
import classes from "./Select.module.css";
function Select() {
  return (
    <div className={classes.selectContainer}>
      <h1 className={classes.hjk}>
        Opt for your{" "}
        <i>
          <span class={classes["color-blue"]}>specialization</span>
        </i>
      </h1>
      <div class={classes["branches"]}>
        <div class={`${classes["branch"]} ${classes["branch-1"]}`} href="#">
          CSE
        </div>
        <div class={`${classes["branch"]} ${classes["branch-2"]}`} href="#">
          ECE
        </div>
        <div class={`${classes["branch"]} ${classes["branch-3"]}`} href="#">
          BCA
        </div>
        <div class={`${classes["branch"]} ${classes["branch-4"]}`} href="#">
          BSc
        </div>
        <div class={`${classes["branch"]} ${classes["branch-5"]}`} href="#">
          ME
        </div>
        <div class={`${classes["branch"]} ${classes["branch-6"]}`} href="#">
          IT
        </div>
      </div>
    </div>
  );
}
export default Select;
