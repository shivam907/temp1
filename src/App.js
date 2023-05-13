// import logo from "./logo.svg";
import Hero from "./Components/Hero/Hero";
import "./App.css";
import Nav from "./UI/Nav";
import Numbers from "./Components/Numbers/Numbers";
import Select from "./Components/SelecYourBranch/Select";
import Ultimate from "./Components/Ultimate/Ultimate";
import Expertise from "./Components/Expertise/Expertise";
import Testimonial from "./Components/Testimonials/Testimonial";
import Blogs from "./Components/Blogs/Blogs";
import HeroSecondary from "./UI/Hero";
import SelectSemester from "./Components/SelectSemester/SelectSemester";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      {/* <Nav />
      <Hero />
      <Numbers />
      <Select />
      <Ultimate />
      <Expertise />
      <Testimonial />
      <Blogs />
      <Footer /> */}

      <SelectSemester />
    </>
  );
}

export default App;
