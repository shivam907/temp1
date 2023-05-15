import React from "react";
import classes from "./Numbers.module.css";

let timer;
function Numbers() {
  // const App = () => {
  const [counter, setCounter] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (counter < 1839) {
        setCounter(counter + 1);
      }
    }, 1);

    return () => {
      clearInterval(interval);
    };
  });
  const [counter1, setCounter1] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (counter1 < 512) {
        setCounter1(counter1 + 1);
      }
    }, 1.2);

    return () => {
      clearInterval(interval);
    };
  });
  const [counter2, setCounter2] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (counter2 < 729) {
        setCounter2(counter2 + 1);
      }
    }, 1.2);

    return () => {
      clearInterval(interval);
    };
  });
  const [counter3, setCounter3] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (counter3 < 2729) {
        setCounter3(counter3 + 1);
      }
    }, 0.75);

    return () => {
      clearInterval(interval);
    };
  });
  // return <div>{counterState}</div>;
  // };

  return (
    <div class={classes["number-section"]}>
      <h1 class={classes["Number-heading"]}>Numbers expose our character.</h1>
      <div class={classes["notes-books-pyq"]}>
        <div>
          <span class={`${classes["notes-number"]} ${classes["number"]}`}>
            {counter}+
          </span>
          <br />
          <h2 class={`${classes["notes-label"]} ${classes.label}`}>Notes</h2>
        </div>
        <div>
          <span class={`${classes["books-number"]} ${classes.number}`}>
            {counter1}+
          </span>
          <br />
          <h2 class={`${classes["books-label"]} ${classes.label}`}>Books</h2>
        </div>
        <div>
          <span class={`${classes["pyqs-number"]} ${classes.number}`}>
            {counter2}+
          </span>
          <br />
          <h2 class={`${classes["pyqs-label"]} ${classes.label}`}>PYQ's</h2>
        </div>
        <div>
          <span class={`${classes["downloads-number"]} ${classes.number}`}>
            {counter3}+
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
