// import logo from "./logo.svg";
import Hero from "./Components/Hero/Hero";
import "./App.css";
import Nav from "./UI/Nav";
import Numbers from "./Components/Numbers/Numbers";

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
    </>
  );
}

export default App;
