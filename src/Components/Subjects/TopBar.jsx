import React from "react";
import classes from "./TopBar.module.css";
function TopBar(props) {
  let data = [];
  props.subject.forEach((i) => {
    data.push(
      <div key={Math.random().toString()} className={classes["subjects"]}>
        {i}
      </div>
    );
  });
  return (
    <section className={classes["top-bar-section"]}>
      <div className={classes["top-bar-container"]}>{data}</div>
    </section>
  );
}

export default TopBar;
