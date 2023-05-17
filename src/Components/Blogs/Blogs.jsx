import React from "react";
import classes from "./Blogs.module.css";
import image1 from "./image-blog.jpg";
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
            src={image1}
          />
          <div class={classes["box-neeche-sh"]}>
            <p class={classes["box-heading"]}>
              Crush your M-III backlog in website!
            </p>
            <p class={classes["date-sh"]}>January 03,2023</p>
            <p class={classes["para-blog-sh"]}>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              , ipsum dolor sit amet consectetur adipisicing elit. Tempora
              fugiat eligendi illum nisi, officiis in
            </p>
            <a href="/" class={classes["click-here-btn"]}>
              Read More
            </a>
          </div>
        </div>
        <div
          class={`${classes["box1"]} ${classes["box"]} ${classes["box-neeche"]}`}
        >
          <img
            class={classes["advice-image"]}
            alt="Advice by elder"
            src={image1}
          />
          <div class={classes["box-neeche-sh"]}>
            <p class={classes["box-heading"]}>
              Crush your M-III backlog in website!
            </p>
            <p class={classes["date-sh"]}>January 03,2023</p>
            <p class={classes["para-blog-sh"]}>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              , ipsum dolor sit amet consectetur adipisicing elit. Tempora
              fugiat eligendi illum nisi, officiis in
            </p>
            <a href="/" class={classes["click-here-btn"]}>
              Read More
            </a>
          </div>
        </div>

        <div
          class={`${classes["box1"]} ${classes["box"]} ${classes["box-neeche"]}`}
        >
          <img
            class={classes["advice-image"]}
            alt="Advice by elder"
            src={image1}
          />
          <div class={classes["box-neeche-sh"]}>
            <p class={classes["box-heading"]}>
              Crush your M-III backlog in website!
            </p>
            <p class={classes["date-sh"]}>January 03,2023</p>
            <p class={classes["para-blog-sh"]}>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              , ipsum dolor sit amet consectetur adipisicing elit. Tempora
              fugiat eligendi illum nisi, officiis in
            </p>
            <a href="/" class={classes["click-here-btn"]}>
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Blogs;
