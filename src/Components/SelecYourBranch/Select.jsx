import React from "react";
import { Link } from "react-router-dom";
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
        <Link to={"selectCseSemester"}>
          <div class={`${classes["branch"]} ${classes["branch-1"]}`} href="#">
            CSE
          </div>
        </Link>
        <Link to={"selectEceSemester"}>
          <div class={`${classes["branch"]} ${classes["branch-2"]}`} href="#">
            ECE
          </div>
        </Link>
        <Link to={"selectBcaSemester"}>
          <div class={`${classes["branch"]} ${classes["branch-3"]}`} href="#">
            BCA
          </div>
        </Link>
        <Link to={"selectMeSemester"}>
          <div class={`${classes["branch"]} ${classes["branch-4"]}`} href="#">
            ME
          </div>
        </Link>
        <Link to={"selectItSemester"}>
          <div class={`${classes["branch"]} ${classes["branch-5"]}`} href="#">
            IT
          </div>
        </Link>
        <Link to={"selectAiMLDsSemester"}>
          <div class={`${classes["branch"]} ${classes["branch-6"]}`} href="#">
            AI ML DS
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Select;
