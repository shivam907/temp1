import React from "react";
import { Link } from "react-router-dom";
import classes from "./Blogs.module.css";
function BlogBox(props) {
  return (
    <Link to={props.link}>
      <div
        class={`${classes["box1"]} ${classes["box"]} ${classes["box-neeche"]}`}
      >
        <img
          class={classes["advice-image"]}
          alt="Advice by elder"
          src={props.img}
        />
        <div class={classes["box-neeche-sh"]}>
          <p class={classes["box-heading"]}>{props.heading}</p>
          <p class={classes["date-sh"]}>{props.date}</p>
          <p class={classes["para-blog-sh"]}> {props.description}</p>
          <a href={props.link} class={classes["click-here-btn"]}>
            Read More
          </a>
        </div>
      </div>
    </Link>
  );
}
export default BlogBox;
