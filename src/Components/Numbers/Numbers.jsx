import React from "react";
import classes from "./Numbers.module.css";

import CountUp from "react-countup";
function Numbers() {
  const [loading, setLoading] = React.useState(false);
  const onStart = () => {
    setLoading(true);
  };
  const onEnd = () => {
    setLoading(false);
  };
  const containerProps = {
    "aria-busy": loading,
  };

  return (
    <div class={classes["number-section"]}>
      <h1 class={classes["Number-heading"]}>Numbers expose our character.</h1>
      <div class={classes["notes-books-pyq"]}>
        <div>
          <span class={`${classes["notes-number"]} ${classes["number"]}`}>
            {/* {counter}+ */}
            <CountUp
              class={`${classes["downloads-number"]} ${classes.number}`}
              end={1839}
              duration="5"
              onStart={onStart}
              onEnd={onEnd}
              containerProps={containerProps}
            />
            +
          </span>
          <br />
          <h2 class={`${classes["notes-label"]} ${classes.label}`}>Notes</h2>
        </div>
        <div>
          <span class={`${classes["books-number"]} ${classes.number}`}>
            {/* {counter1}+ */}
            <CountUp
              class={`${classes["downloads-number"]} ${classes.number}`}
              end={512}
              duration="5"
              onStart={onStart}
              onEnd={onEnd}
              containerProps={containerProps}
            />
            +
          </span>
          <br />
          <h2 class={`${classes["books-label"]} ${classes.label}`}>Books</h2>
        </div>
        <div>
          <span class={`${classes["pyqs-number"]} ${classes.number}`}>
            {/* {counter2}+ */}
            <CountUp
              class={`${classes["downloads-number"]} ${classes.number}`}
              end={729}
              duration="5"
              onStart={onStart}
              onEnd={onEnd}
              containerProps={containerProps}
            />
            +
          </span>
          <br />
          <h2 class={`${classes["pyqs-label"]} ${classes.label}`}>PYQ's</h2>
        </div>
        <div>
          <span class={`${classes["downloads-number"]} ${classes.number}`}>
            <CountUp
              class={`${classes["downloads-number"]} ${classes.number}`}
              end={2729}
              duration="5"
              onStart={onStart}
              onEnd={onEnd}
              containerProps={containerProps}
            />
            +
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
