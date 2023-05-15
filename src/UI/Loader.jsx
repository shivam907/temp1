import React from "react";
import classes from "./Loader.module.css";
function Loader() {
  return (
    <>
      <div className={classes.body}>
        <div className={`${classes["loader"]} ${classes.book}`}>
          <figure className={classes["page"]}></figure>
          <figure className={classes["page"]}></figure>
          <figure className={classes["page"]}></figure>
        </div>

        <h1 className={classes.LoaderHeading}>Loading</h1>
      </div>
    </>
  );
}

export default Loader;
