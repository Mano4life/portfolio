import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setarr] = useState(myProjects);
  function handleClick(btnCategory) {
    setcurrentActive(btnCategory);
    const newArr = myProjects.filter((item) => {
      const insideArr = item.category.find((insideItem) => {
        return insideItem === btnCategory;
      });
      return insideArr === btnCategory;
    });
    setarr(newArr);
  }
  return (
    <main className="flex">
      <section className="left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setarr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>
        <button
          onClick={() => {
            handleClick("vanilla");
          }}
          className={currentActive === "vanilla" ? "active" : null}
        >
          Vanilla
        </button>
        <button
          onClick={() => {
            handleClick("bootstrap");
          }}
          className={currentActive === "bootstrap" ? "active" : null}
        >
          Bootstrap
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          react
        </button>
      </section>
      <section className="right-section flex">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 11, stiffness: 50 }}
                key={item.img}
                className="card"
              >
                <img src={item.img} alt="main-image" />
                <div className="box">
                  <h1 className="title">{item.title}</h1>
                  <p className="sub-title">{item.subtitle}</p>
                  <div className="flex links">
                    <div className="flex icons">
                      <a href={item.link} target="_blank" rel="noreferrer">
                        <i className="fa-solid fa-link"></i>
                      </a>
                      <a href={item.github} target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                    {/* commented it out in case I wanna use it later */}
                    {/* <a className="flex link" href="#">
                      more
                      <i className="fa-solid fa-arrow-right"></i>
                    </a> */} 
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
