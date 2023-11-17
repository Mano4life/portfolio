import { useEffect, useState } from "react";
import "./header.css";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  // menu toggle .......
  const [showMenu, setshowMenu] = useState(false);
  const toggleMenu = () => {
    setshowMenu((prevOpen) => !prevOpen);
  };
  // var for the menu animation....
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  // light/dark mode toggles...
  const [Mode, setMode] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  useEffect(() => {
    if (Mode === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [Mode]);

  return (
    <header className="flex">
      <button
        onClick={toggleMenu}
        className="menu fa-solid fa-bars icons flex"
      />
      <div /> {/* this is just to center the nav */}
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          // sending val to storage
          localStorage.setItem(
            "currentMode",
            Mode === "dark" ? "light" : "dark"
          );
          // calling it back from storage
          setMode(localStorage.getItem("currentMode"));
        }}
        // className="fa-regular fa-moon icons flex"
        className={
          Mode === "dark"
            ? "fa-regular fa-moon icons flex"
            : "fa-regular fa-sun icons flex"
        }
      />
      {/* small menu content ................. */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ originY: 0 }}
            className="fixed origin-top"
          >
            <ul className="menu">
              <li>
                <button className="fa-solid fa-xmark" onClick={toggleMenu} />
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Articles</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Speaking</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
