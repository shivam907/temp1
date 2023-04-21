// import logo from "./logo.svg";
import Hero from "./Components/Hero/Hero";
import "./App.css";
import Nav from "./UI/Nav";
import Numbers from "./Components/Numbers/Numbers";
import Select from "./Components/SelecYourBranch/Select";
import Ultimate from "./Components/Ultimate/Ultimate";

function App() {
  return (
    <>
      <head>
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></script>
      </head>
      <Nav />
      <Hero />
      <Numbers />
      <Select />
      <Ultimate />
    </>
  );
}

export default App;
