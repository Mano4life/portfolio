import { useEffect } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5.footer/Footer";

function App() {
  const btn = document.getElementById("to-top-btn");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        btn.classList.remove("hidden");
      } else {
        btn.classList.add("hidden");
      }
    });
  });

  return (
    <div className="container">
      <Header />

      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <button
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
        className="to-top-container flex hidden"
        id="to-top-btn"
      >
        <i className="fa-solid fa-angle-up"></i>
      </button>
    </div>
  );
}

export default App;
