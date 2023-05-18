import React from "react";

import classes from "./testimonial.module.css";
function Review(props) {
  return (
    <div class={classes["testi-box"]}>
      <p class={classes["testi-para"]}>"{props.review}."</p>
      <div class={classes["person-info-box"]}>
        <div class={classes["person-info"]}>
          <img class={classes["img-testi"]} src={props.img} alt="" />
          <div class={classes["person-detail"]}>
            <p class={classes["testi-name"]}>{props.name}</p>
            <p class={classes["faded-info"]}>{props.category}</p>
          </div>
        </div>
        <div class={classes["icon-box"]}>
          {/* <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon> */}
        </div>
      </div>
    </div>
  );
}
export default Review;
