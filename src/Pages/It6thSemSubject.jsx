import React from "react";
import Hero from "../UI/Hero";
import TopBar from "../Components/Subjects/TopBar";
import Box from "../Components/Subjects/SubjectBox";
import classes from "../Components/Subjects/SubjectBox.module.css";
import Loader from "../UI/Loader";
function Subject() {
  const el1 = React.useRef();
  const el2 = React.useRef();
  const el3 = React.useRef();
  const el4 = React.useRef();
  const el5 = React.useRef();
  const el6 = React.useRef();
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  function clickk1(e) {
    console.log(el1.current);
    el1.current.scrollIntoView({ behavior: "smooth" });
  }
  function clickk2(e) {
    el2.current.scrollIntoView({ behavior: "smooth" });
  }
  function clickk3(e) {
    el3.current.scrollIntoView({ behavior: "smooth" });
  }
  function clickk4(e) {
    // let element = el1.current;
    console.log(e);
    e.target.scrollIntoView({ behavior: "smooth" });
  }
  function clickk5(e) {
    // let element = el1.current;
    el5.current.scrollIntoView({ behavior: "smooth" });
  }
  function clickk6(e) {
    // let element = el1.current;
    el6.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Hero head="IT" />
          <TopBar
            subject={["AI", "CC", "CD", "MAD", "ML", "WC"]}
            clicks={[clickk1, clickk2, clickk3, clickk4, clickk5, clickk6]}
          />
          <div className={classes.subjectBoxes}>
            <Box
              reff={el1}
              subjectName="AI"
              number={3}
              names={["Notes", "Books", "Previous Year Papers"]}
              data1={[
                ["Unit-Wise Notes", "Unit-2", "Unit-3", "Unit-4", "Unit-5"],
                [
                  "https://drive.google.com/file/d/1fH9k4ABlIRLPkzAfVNA4kv2RGCKWQXXo/view",
                  "https://drive.google.com/file/d/1xdC5wkGw2RgF-mEztWC0um6ZCS8tfdyv/view",
                  "https://drive.google.com/file/d/1cK9b50xWMRWFetOFvcxnsMCjiWRFEs6o/view",
                  "https://drive.google.com/file/d/195qB3VTIDYD3hoiciJ37uD_CpcmdDe7G/view",
                  "https://drive.google.com/file/d/1FqQq_YVqxI9nmai4vCKaqisJ4Pg0aUqW/view",
                ],
              ]}
              data2={[
                ["AI Book"],
                [
                  "https://drive.google.com/file/d/12d3pKijJOOy2uHAALr46bvfuSlSKq7Uz/view",
                ],
              ]}
              data3={[
                ["PTU 2021", "PTU 2021 Solution"],
                [
                  "https://drive.google.com/file/d/10cpMZarKLM1QKD9qVybFbSKKQOvEutIk/view",
                  "https://drive.google.com/file/d/1uUMufUrVmJM9GEWn7yusZCcvpB7Amo8R/view",
                ],
              ]}
            />
            <Box
              reff={el2}
              subjectName="CC"
              number={1}
              names={["Notes"]}
              data1={[
                ["Unit-1", "Unit-2", "Unit-3", "Unit-4", "Unit-5"],
                [
                  "https://drive.google.com/file/d/1P283ZQI0bqqV1wT5w1tMDMUh-XkLGC4i/view",
                  "https://drive.google.com/file/d/1enz9Wq0SUBTaHDc5faY6pV2eCbVf3O-4/view",
                  "https://drive.google.com/file/d/1-ZOvNJ3l_0e0_S8ME_u3aMlb0znG1-jg/view",
                  "https://drive.google.com/file/d/121iEKzASSsdyuMG22ICvPgv-e4-O0gxH/view",
                  "https://drive.google.com/file/d/1LI1UfLYjDADmEK5y2BB2d5ZWTVz384us/view",
                ],
              ]}
            />
            <Box
              reff={el3}
              subjectName="CD"
              number={1}
              names={["Notes"]}
              data1={[
                ["Unit-1", "Unit-2", "Unit-3", "Unit-4", "Unit-5"],
                [
                  "https://drive.google.com/file/d/13iIKdiNpoeV4qpyckST_xNSWWJED_813/view",
                  "https://drive.google.com/file/d/1J_H0F8MOna2SsVsSm2axwpNIC6CKFYRQ/view",
                  "https://drive.google.com/file/d/1oGVCc9UPKrpr1CiwHWsvrUtjp2SaMDtd/view",
                  "https://drive.google.com/file/d/1u2bvYS5hnssWp6_jfosJjl2QsAe0T7Ta/view",
                  "https://drive.google.com/file/d/1XKRAVHP7M4eCYMYVQfxFRK920mUoi6p3/view",
                ],
              ]}
            />
            <Box
              reff={el4}
              subjectName="MAD"
              number={1}
              names={["Notes"]}
              data1={[
                ["Unit-1", "Unit-2", "Unit-3", "Unit-4", "Unit-5", "Unit-6"],
                [
                  "https://drive.google.com/file/d/1QAPLpeyxGJJaS0IGed3ygadXE7z1PXLJ/view",
                  "https://drive.google.com/file/d/16QSp_5VoV2Zz8NMwwMvcJMp93TiARkUN/view",
                  "https://drive.google.com/file/d/1cPToN7putnjoM7a8UgV_mPt7wqfqpSMs/view",
                  "https://drive.google.com/file/d/1gaDVbkuF-4lyz6gvaImBZxp8ZUUPmJ5D/view",
                  "https://drive.google.com/file/d/1jbvjdXFD_eJcroVqun6-7kgYSkBhSoXO/view",
                  "https://drive.google.com/file/d/1nFGBhrSPauRd9gLgeKnkKzf44fC9NQrL/view",
                ],
              ]}
            />
            <Box
              reff={el5}
              subjectName="ML"
              number={1}
              names={["Notes"]}
              data1={[
                ["Unit-1", "Unit-2", "Unit-3", "Unit-4", "Unit-5"],
                [
                  "https://drive.google.com/file/d/1Uqd1mspOvLtNmbYj9NB7GpomimwlA9z8/view",
                  "https://drive.google.com/file/d/1R6zwQQ2pG0YRQ9CS0U4-2_B_UeY49RCK/view",
                  "https://drive.google.com/file/d/1wIwKs6igtyRoQ63Qeby05H4imD_3wh5I/view",
                  "https://drive.google.com/file/d/1TeywfeK4mOJj1Qok1O-7Xv6y-0Z2YpMR/view",
                  "https://drive.google.com/file/d/1q21gPBBAD1-7r9kJyg-rmSzHzTZagXJ4/view",
                ],
              ]}
            />
            <Box
              reff={el6}
              subjectName="WC"
              number={1}
              names={["Notes"]}
              data1={[
                [
                  "Unit-1 Notes",
                  "Unit-1 PPT",
                  "Unit-2 Notes",
                  "Unit-2 PPT",
                  "Unit-3,4 PPT",
                  "Unit-4 Notes",
                  "Unit-5 Notes",
                ],
                [
                  "https://drive.google.com/file/d/1IddWKVbjWFzmb72SSwP9CgEysSvXriG4/view",
                  "https://drive.google.com/file/d/1UBC00gdGeKSHdZ3L2KQB1HIsrOppRU8w/view",
                  "https://drive.google.com/file/d/1o7xonKWkpJCf7lmUkspWerrELhHjIxo6/view",
                  "https://drive.google.com/file/d/1wffNapXtHq752DrIByUBZ4hl_t-1ipZI/view",
                  "https://drive.google.com/file/d/1e5M8hTbkQaJpnzDooGzMsNhuaNX8tS2y/view",
                  "https://drive.google.com/file/d/1Hn4emr1t8lT7lWm0ng50M-U3JpLgI87U/view",
                  "https://drive.google.com/file/d/18dtm3TMIGJ9kx71CTURx5wQ2614Fzg_5/view",
                ],
              ]}
            />
          </div>
        </>
      )}
    </>
  );
}

export default Subject;
