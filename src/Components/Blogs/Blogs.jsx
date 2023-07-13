import React from "react";
import classes from "./Blogs.module.css";
import image1 from "./image-blog.jpg";
import img1 from "./img1.jpeg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"
import BlogBox from "./BlogBox";
function Blogs() {
  return (
    <section class={classes["story-section"]}>
      <h1 class={classes["story-heading"]}>
        Lessons learned from those who came before.
      </h1>
      <div class={classes["boxes"]}>
        <BlogBox
          img={img1}
          heading={"Five Essential Online Learning Strategies"}
          description={
            "By employing a few essential strategies, any student can learn not only to succeed, but to flourish in the online learning environment."
          }
          date={"June 04,2022"}
          link={
            "https://ijsuccesspoint.blogspot.com/2022/06/five-essential-online-learning.html"
          }
        />
        <BlogBox
          img={img2}
          heading={"How to Give Yourself Grace to Start Again"}
          description={
            "Here are some tips which will apply in so many different situations in life, from fitness goals to business goals to raising children."
          }
          date={"June 04,2022"}
          link={
            "https://ijsuccesspoint.blogspot.com/2022/06/how-to-give-yourself-grace-to-start.html"
          }
        />
        <BlogBox
          img={img3}
          heading={"Begineer Guide To Start Competitive Programming"}
          description={
            "Here are some of the things to keep in your mind before going for a competitive programming such as choose your language and so on..."
          }
          date={"June 04,2022"}
          link={
            "https://ijsuccesspoint.blogspot.com/2022/06/beginner-guide-to-start-competitive.html"
          }
        />
      </div>
    </section>
  );
}
export default Blogs;