import React from "react";
import classes from "./Select.module.css";

function SelectBox(props) {
  console.log(props.num);
  return (
    <div class={classes["box-sh"]}>
      <div class={classes["num-sh"]}>
        {props.num}
        <small class={classes["small"]}>{props.end}</small>
      </div>
      <div class={classes["color-sh"]}>
        <div class={`${classes["circle-sh"]} ${classes["cr-1-sh"]}`}></div>
        <div class={`${classes["circle-sh"]} ${classes["cr-2-sh"]}`}></div>
        <p>Semester</p>
      </div>
    </div>
  );
}
export default SelectBox;
