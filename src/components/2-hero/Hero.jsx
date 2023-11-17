import "./hero.css";
import Lottie from "lottie-react";
import heroAnimation from "../../animations/hero-animation.json";
import { useRef } from "react";

export default function Hero() {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="avatar-container flex">
          <img src="./me2.jpg" className="avatar" alt="profile-pic" />
          <i className="avatar-icon fa-solid fa-laptop-code"></i>
        </div>

        <h1 className="title">
          Software developer, designer and full stack developer.
        </h1>
        <p className="sub-title">
          I am Momen Mamdouh, a software developer based in Egypt, passionate
          about building new and intriguing web apps that users love.
        </p>
        <div className="icons flex">
          <a href="https://twitter.com/M4no0o" target="_blank" rel="noreferrer"><i className="icon fa-brands fa-square-x-twitter"></i></a>
          <a href="https://www.instagram.com/mano4momen/" target="_blank" rel="noreferrer"><i className="icon fa-brands fa-instagram"></i></a>
          <a href="https://github.com/Mano4life" target="_blank" rel="noreferrer"><i className="icon fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/momen-helmi-363714284/" target="_blank" rel="noreferrer"><i className="icon fa-brands fa-linkedin"></i></a>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          id="hero-animation"
          animationData={heroAnimation}
        />
      </div>
    </section>
  );
}
