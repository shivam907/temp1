import React from "react";
import classes from "./Expertise.module.css";
function Expertise() {
  return (
    <section class={classes["expertise-section"]}>
      <h1 class={classes["expertise-heading"]}>
        Building our
        <br />{" "}
        <span
          class={`${classes["expertise-heading"]} ${classes["blue-color"]}`}
        >
          Expertise, for you
        </span>
      </h1>
      <div class={classes["boxes"]}>
        <div class={`${classes["box"]} ${classes["box-1"]}`}>
          <h2 class={classes["box-heading"]}>DEPEND ON OUR NETWORK</h2>
          <p class={classes["box-content"]}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis, molestias quaerat voluptates ipsa deserunt molestiae at
            iure cumque dignissimos, aliquid nemo. Facilis consequatur enim
            minus laudantium commodi odio, qui atque?
          </p>
          <button class={classes["plus-btn"]}>+</button>
        </div>

        <div class={`${classes["box"]} ${classes["box-2"]}`}>
          <h2 class={`${classes["box-heading"]} ${classes["white-color"]}`}>
            DEPEND ON OUR NETWORK
          </h2>
          <p class={`${classes["box-content"]} ${classes["white-color"]}`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis, molestias quaerat voluptates ipsa deserunt molestiae at
            iure cumque dignissimos, aliquid nemo. Facilis consequatur enim
            minus laudantium commodi odio, qui atque?
          </p>
          <button class={classes["plus-btn"]}>+</button>
        </div>

        <div class={`${classes["box"]} ${classes["box-3"]}`}>
          <h2 class={classes["box-heading"]}>DEPEND ON OUR NETWORK</h2>
          <div class={`${classes["number-label"]} ${classes["number-upar"]}`}>
            <span class={`${classes["number"]} ${classes["blue-color"]}`}>
              179+
            </span>
            <br />
            <span class={`${classes["label"]} ${classes["blue-color"]}`}>
              Relationship Manager
            </span>
          </div>
          <div class={`${classes["number-label"]} ${classes["number-neeche"]}`}>
            <span class={`${classes["number"]} ${classes["blue-color"]}`}>
              459+
            </span>
            <br />
            <span class={`${classes["label"]} ${classes["blue-color"]}`}>
              Relationship Manager
            </span>
          </div>
          <span class={classes["box-3-quote"]}>We are what you are!</span>
          <button class={classes["plus-btn"]}>+</button>
        </div>
      </div>
    </section>
  );
}
export default Expertise;
