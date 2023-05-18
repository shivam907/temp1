import React from "react";
import classes from "./Blogs.module.css";
import image1 from "./image-blog.jpg";
import BlogBox from "./BlogBox";
function Blogs() {
  return (
    <section class={classes["story-section"]}>
      <h1 class={classes["story-heading"]}>
        Lessons learned from those who came before.
      </h1>
      <div class={classes["boxes"]}>
        <BlogBox
          img={image1}
          heading={"Crush your M-III backlog in website!"}
          description={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, ipsum dolor sit amet consectetur adipisicing elit. Tempora fugiat eligendi illum nisi, officiis in"
          }
          date={"January 03,2023"}
          link={
            "https://ijsuccesspoint.blogspot.com/2022/06/how-to-score-above-9-sgpa-in-4th-sem.html?m=1"
          }
        />
        <BlogBox
          img={image1}
          heading={"Crush your M-III backlog in website!"}
          description={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, ipsum dolor sit amet consectetur adipisicing elit. Tempora fugiat eligendi illum nisi, officiis in"
          }
          date={"January 03,2023"}
          link={
            "https://ijsuccesspoint.blogspot.com/2022/06/how-to-score-above-9-sgpa-in-4th-sem.html?m=1"
          }
        />
        <BlogBox
          img={image1}
          heading={"Crush your M-III backlog in website!"}
          description={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, ipsum dolor sit amet consectetur adipisicing elit. Tempora fugiat eligendi illum nisi, officiis in"
          }
          date={"January 03,2023"}
          link={
            "https://ijsuccesspoint.blogspot.com/2022/06/how-to-score-above-9-sgpa-in-4th-sem.html?m=1"
          }
        />
      </div>
    </section>
  );
}
export default Blogs;
