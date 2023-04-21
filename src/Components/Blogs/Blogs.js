import React from "react";
import classes from "./Blogs.module.css";
import image from "./Advice-By-Senior.jpg";
function Blogs() {
  return (
    <section class={classes["story-section"]}>
      <h1 class={classes["story-heading"]}>
        Lessons learned from those who came before.
      </h1>
      <div class={classes["boxes"]}>
        <div
          class={`${classes["box1"]} ${classes["box"]} ${classes["box-neeche"]}`}
        >
          <img
            class={classes["advice-image"]}
            alt="Advice by elder"
            src={image}
          />
          <p class={classes["box-heading"]}>
            Crush your M-III backlog with these foolproof tips!
          </p>
          <a class={classes["click-here-btn"]} href="#">
            Click Here..
          </a>
        </div>
        <div
          class={`${classes["box1"]} ${classes["box"]} ${classes["box-upar"]}`}
        >
          <img
            class={classes["advice-image"]}
            alt="Advice by elder"
            src={image}
          />
          <p class={classes["box-heading"]}>
            Crush your M-III backlog with these foolproof tips!
          </p>
          <a class={classes["click-here-btn"]} href="#">
            Click Here..
          </a>
        </div>
        <div
          class={`${classes["box1"]} ${classes["box"]} ${classes["box-neeche"]}`}
        >
          <img
            class={classes["advice-image"]}
            alt="Advice by elder"
            src={image}
          />
          <p class={classes["box-heading"]}>
            Crush your M-III backlog with these foolproof tips!
          </p>
          <a class={classes["click-here-btn"]} href="#">
            Click Here..
          </a>
        </div>
      </div>
    </section>
  );
}
export default Blogs;
