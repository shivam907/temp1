import React from "react";
import classes from "./Numbers.module.css";

function Numbers() {
  return (
    <div class={classes["number-section"]}>
      <h1 class={classes["Number-heading"]}>Numbers expose our character.</h1>
      <div class={classes["notes-books-pyq"]}>
        <div>
          <span class={`${classes["notes-number"]} ${classes["number"]}`}>
            1839+
          </span>
          <br />
          <h2 class={`${classes["notes-label"]} ${classes.label}`}>Notes</h2>
        </div>
        <div>
          <span class={`${classes["books-number"]} ${classes.number}`}>
            512+
          </span>
          <br />
          <h2 class={`${classes["books-label"]} ${classes.label}`}>Books</h2>
        </div>
        <div>
          <span class={`${classes["pyqs-number"]} ${classes.number}`}>
            729+
          </span>
          <br />
          <h2 class={`${classes["pyqs-label"]} ${classes.label}`}>PYQ's</h2>
        </div>
        <div>
          <span class={`${classes["downloads-number"]} ${classes.number}`}>
            2729+
          </span>
          <br />
          <h2 class={`${classes["downloads-label"]} ${classes.label}`}>
            Download's
          </h2>
        </div>
      </div>
    </div>
  );
}
export default Numbers;
