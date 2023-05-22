import React from "react";
import classes from "./TopBar.module.css";
function TopBar(props) {
  let data = [];
  let j = 0;
  props.subject.forEach((i) => {
    data.push(
      <div
        onClick={props.clicks[j]}
        key={Math.random().toString()}
        className={classes["subjects"]}
      >
        {i}
      </div>
    );
    j += 1;
  });
  return (
    <section className={classes["top-bar-section"]}>
      <div className={classes["top-bar-container"]}>{data}</div>
    </section>
  );
}

export default TopBar;
