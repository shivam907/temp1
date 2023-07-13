import React from "react";
import classes from "./testimonial.module.css";
import image from "./WhatsApp Image 2023-04-10 at 21.34.12.jpg";
import img1 from "./img.png";
import Review from "./Review";
function Testimonial() {
  return (
    <div class={classes["testimonial-container"]}>
      <div className={classes["testimonial-div-head"]}>
        <h2 class={classes["testimonial-heading"]}>
          <span class={classes["spl-head"]}>Happy costumers </span>
          {/* <br /> */}
          are our true health
        </h2>
      </div>

      {/* Students Reviews */}
      <div class={classes["testimonial-box"]}>
        <Review
          review={
            "I have to no longer wander to get notes and references for study material. With this website, it's easy access to all the previous year questions as well as all handwritten notes along with the printed notes. This has helped me for last minute exam preparations. It has been a great help, I am gratefull for all the efforts thats the team puts behind the website."
          }
          img={img1}
          name={"Liveleen Kaur"}
          category={"Student (B.Tech CSE)"}
        />
        <Review
          review={
            "This website provide each and every solution to your problems. Thank you for helping all the students to excel their exams. I feel very greatful to be part of this website to help others. The content provided here is superb and easy to understand. This site is also regularly updated, so I always had access to latest information. Thankyou senior for this amazing website."
          }
          img={image}
          name={"Nabiya Farugi"}
          category={"Student (B.Tech CSE)"}
        />
        <Review
          review={
            "The idea to create the website like this was wonderful! The notes made it very easy for me to understand the content and to learn a number of things. This site is easy to navigate, and the resources are well organized. The quality of notes I received was exceeded my expectations. Thank you for doing the great job!"
          }
          img={image}
          name={"Muskaan Arora"}
          category={"Student (B.Tech CSE)"}
        />
        <Review
          review={
            "I am a 2nd year student and first it became difficult for me to gather notes from different books and websites but once mu friend introduced me to the website cgcassignments.This website worked like a magic for me as all the notes, study material, previous year paper and even previous year mst's are also available here. It helped me to score excellent marks in my mst's as well as final exam and I highly recommend this website to other students as it is soo helpful."
          }
          img={image}
          name={"Abhinav Agnihotri"}
          category={"Student (B.Tech CSE)"}
        />
        <Review
          review={
            "CGC ASSIGNMENTS has been a very helpful site for me as a LEET student. This site provided me with lots of essential material that helped me with my studies. I would like to recommend this site to all the engineering students like me, who face problems in making notes and getting the right material for exams. The admin also plays a very supportive role in providing students with all the essential information.This site consists of all courses related material: technical, non-technical, PYQ's, notes, and e books of different subjects. It has been a great help, I am grateful for all the efforts that the team puts behind this website."
          }
          img={image}
          name={"Abhijeet Prasad"}
          category={"Student (B.Tech AI & DS)"}
        />
        <Review
          review={
            "I really admire this idea of making the website cgcassignments.It contains notes of all the subjects of all the streams. I just appreciate the way of collecting all assignments together and in a proper sequence.It really makes it easy for students to get well written notes including all the main points.The handwriting is very neat and legible."
          }
          img={image}
          name={"Lovepreet Kaur"}
          category={"Student (B.Tech CSE),CGC"}
        />
        <Review
          review={
            "The idea of making the cgcassignments* website was just a lifesaver. As it is a great resource for students who may have missed out on taking notes during lectures or may want access to previous year question papers. With all the notes and resources available in one place, students can easily catch up on missed material and prepare for exams. It provides ely access to all the necessary resources that can save students a lot of time and effort that they would otherwise spend on searching for study materials."
          }
          img={image}
          name={"Gunpreet Kaur "}
          category={"Student (B.Tech CSE),CGC"}
        />
        <Review
          review={
            "'cgcassignments' is the best ever website for study. It contains notes for all the semester students. According to my experience this website has best notes of all the subjects well organized as teachers notes and students notes separately and everything is well explained and in simple language that is easily understandable. The handwriting is also very neat. This website also provides us previous year question papers and question bank. All thanks to Senior,the one who is always ready to help us and guide us for exams and our future."
          }
          img={image}
          name={"Anushka Singh"}
          category={"Student (B.Tech CSE),CGC"}
        />
        <Review
          review={
            "I Actually Commend the innovative and Helpful idea of creating Website 'CGC ASSIGNMENTS'. I m 3rd year student. It was covid time when we started the journey of Btech. Meanwhile, we have online one to one session and communication with our Teacher's in the Virtual mode. This mode of education is new for our teachers also to manage the classes in this mode. We have many issues regarding notes and need some more clearity to deal with study material. At that time I have been introduced with this Website from our Seniors.Even they connect with us on Google meets as well to tell us some accurate paths with their experience in the Department. We have clear notes, previous year papers, MST's and more to learn. It works remarkable for us to deal with study material and makes is very flexible & easy to study different subject with content at one place on this website."
          }
          img={image}
          name={"Lakshita"}
          category={"Student (B.Tech CSE),CGC"}
        />
        <Review
          review={
            "This site would appeal to the average person in the way that it is very simply done, and everything is very easy to find. There is no messing around here, just the information that they want to convey presented in the simplest way possible. The notes and other information the site provides about our academics is really beneficial. The contents of the pages flows nicely, and is very well written"
          }
          img={image}
          name={"Aditya Sethi"}
          category={"Student (B.Tech CSE),CGC"}
        />
        <Review
          review={
            "I was in need of help with my notes for PTU, and I referred upon cgcassignments.com. The moment I visited the website, I was impressed with the level of detailed notes. The ordering process was easy, and seniors were always available to answer my queries promptly. The quality of notes I received was exceeded my expectations.I am delighted with the service and would recommend gcassignments.com to anyone looking for PTU preparation."
          }
          img={image}
          name={"Akshit Saini"}
          category={"Student (B.Tech CSE),CGC"}
        />
      </div>

      {/* Teachers Reviews */}

      <div class={`${classes["testimonial-box"]} ${classes["testi-box-2"]}`}>
        <Review
          review={
            "CGC Assignments is an e- learning platform that caters to a diverse range of streams and provides educational resources to students. One of the standout features of this website is the provision of meticulously crafted handwritten notes that cover an array of topics. In addition, CGC Assignments functions as a comprehensive one stop resource for students, encompassing a variety of resources such as PYQPS, MSTS, and even lab materials. This all-encompassing approach makes it easy for students to find what they require, streamlining the learning process."
          }
          img={image}
          name={"Dr. Neha Srivastav"}
          category={"Assistant Professor (CSE)"}
        />
        <Review
          review={
            "CGCAssignments' is a wonderful platform for providing study material, notes, previous year question papers for various streams.It is all about, making it simple for students what they need to enhance their academic Assignment for this great idea. Congratulations to the entire team CGC"
          }
          img={image}
          name={"Dr. Meenu Mittal"}
          category={"Assistant Professor (Applied Science)"}
        />
        <Review
          review={
            "'cgcassignments' website is an online platform dedicated to provide the right study material for students seeking higher education like Engineering. What makes 'cgcassignments' unique is are as per the university/college syllabus. This will be advantageous for students as they will be able to avail and refer to the content any time."
          }
          img={image}
          name={"Ms. Nidhi Bhatia"}
          category={"Assistant Professor (CSE)"}
        />
        <Review
          review={
            "'cgcassignments' website is an online platform dedicated to provide the right study material for students seeking higher education like Engineering. What makes 'cgcassignments' unique is the comprehensive nature of its study material, which covers a wide range of topics as per the PTU syllabus. I found the website to be user-friendly, and the resources provided were of high quality. Kudos to the team behind 'cgcassignments' for their hard work and dedication to helping students succeed in their academic pursuits."
          }
          img={image}
          name={"Dr. Santosh Kumar"}
          category={"Associate Professor (ME)"}
        />
        <Review
          review={
            "'cgcassignments' is very helpful website for students. They are able to retrieve information related to academics. Very precise notes are given which are easily 'cgcassignments' to every PTU understandable. I recommended student"
          }
          img={image}
          name={"Ms. Mankiran Kaur"}
          category={"Assistant Professor (CSE Department)"}
        />
        <Review
          review={
            "This site is easy to navigate and the resources are well organized. I also heard about this website from my students, which suggests that it has a good reputation among them. Overall, I would highly recommend this website to anyone looking for study materials like previous year PTU papers, practical files, or any other relevant resources. I appreciate the effort put into making this website user- friendly and providing valuable resources to students."
          }
          img={image}
          name={"Dr. Ajaybeer Kaur"}
          category={"Assistant Professor (CSE),CGC"}
        />
        <Review
          review={
            "As educators, it is our responsibility to ensure that the resources we provide to our students are accurate, reliable, and appropriate for their learning needs, and this website 'cgcassignments' is providing these all."
          }
          img={image}
          name={"Ms. Shivani"}
          category={"Assistant Professor (CSE),CGC"}
        />
        <Review
          review={
            "I must say that I am throughly impressed with the content and features available on this platform. The website is very user-friendly, with easy navigation and a clean, modern design that makes it a pleasure to use. One of the thing I appreciate about this website is the vast array of study resources available, from PTU paper to handwritten notes and practical files. Overall, I think this study website is an excellent resource for anyone looking to enhance their learning experience."
          }
          img={image}
          name={"Ms. Meenu Sehgal"}
          category={"Assistant Professor (CSE Department)"}
        />
        <Review
          review={
            "hello its me ffjhdu ug ugy g yf y f yf yf yuyfyf tft d td td t fy f y ft f td t dt dt d td t dt fgfugf fs gsgsg srg rg drgr dr h r s gs g rsg dr hr hrh r r hr h rh drh rd hrdh"
          }
          img={image}
          name={"shreya sharma"}
          category={"Website review"}
        />
      </div>
    </div>
  );
}
export default Testimonial;