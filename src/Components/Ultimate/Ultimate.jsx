import React from "react";
import classes from "./Ultimate.module.css";

function Ultimate() {
  return (
    <div class={classes["ultimate-experience"]}>
      <div class={classes["flex-1"]}>
        <div class={`${classes["boxes"]} ${classes["col-1-boxes"]}`}>
          <div class={`${classes["box"]} ${classes["box-1"]}`}>
            {/* <ion-icon class="icon-box" name="planet-outline"></ion-icon> */}
            <h3 class={classes["box-head"]}>Hlo Guys</h3>
            <p class={classes["box-para"]}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              dolores voluptas maxime quod! Labore nihil ratione blanditiis ut
              nobis accusamus, aut doloremque suscipit facilis
            </p>
          </div>
          <div class={classes["box"]}>
            {/* <ion-icon class="icon-box" name="planet-outline"></ion-icon> */}
            <h3 class={classes["box-head"]}>Hlo Guys</h3>
            <p class={classes["box-para"]}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              dolores voluptas maxime quod! Labore nihil ratione blanditiis ut
              nobis accusamus, aut doloremque suscipit facilis
            </p>
          </div>
        </div>

        <div class={`${classes["boxes"]} ${classes["col-2-boxes"]}`}>
          <div class={`${classes["box"]} ${classes["box-2"]}`}>
            {/* <ion-icon class="icon-box" name="planet-outline"></ion-icon> */}
            <h3 class={classes["box-head"]}>Hlo Guys</h3>
            <p class={classes["box-para"]}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              dolores voluptas maxime quod! Labore nihil ratione blanditiis ut
              nobis accusamus, aut doloremque suscipit facilis
            </p>
          </div>
          <div class={classes["box"]}>
            {/* <ion-icon class="icon-box" name="planet-outline"></ion-icon> */}
            <h3 class={classes["box-head"]}>Hlo Guys</h3>
            <p class={classes["box-para"]}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              dolores voluptas maxime quod! Labore nihil ratione blanditiis ut
              nobis accusamus, aut doloremque suscipit facilis
            </p>
          </div>
        </div>
      </div>

      <div class={classes["text-right"]}>
        <h2 class={classes["text-head"]}>Ultimate Experience</h2>
        <p class={classes["text-para"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          quibusdam dolore repudiandae doloribus, nam quisquam, Lorem ipsum
          dolor sit, amet consectetur adipisici.
        </p>
        <button class={classes["text-btn"]}>Read More</button>
      </div>
    </div>
  );
}
export default Ultimate;
