import icon from "../../edupal-logo.png";
import { useState } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [navMenu, setNavMenu] = useState(false);

  return (
    <header className={`${styles.header} ${navMenu ? styles.navOpen : ""} `}>
      <a href="#hero">
        <img className={styles.logo} alt="Edupalnepal logo" src={icon} />
      </a>

      <nav>
        <ul className={styles["main-nav-list"]}>
          <li>
            <a className={styles["main-nav-link"]} href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className={styles["main-nav-link"]} href="#our-courses">
              Our Courses
            </a>
          </li>
          <li>
            <a className={styles["main-nav-link"]} href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a
              className={`${styles["main-nav-link"]} ${styles["nav-cta"]}`}
              href="#cta"
            >
              Contact Now
            </a>
          </li>

          <li>
            <NavLink
              to="/quiz"
              className={`${styles["main-nav-link"]} ${styles["quiz-cta"]}`}
            >
              Quiz
            </NavLink>
          </li>
        </ul>
      </nav>

      <button
        className={styles["btn-mobile-nav"]}
        onClick={() => setNavMenu(!navMenu)}
      >
        <ion-icon
          class={styles["icon-mobile-nav"]}
          name="menu-outline"
        ></ion-icon>

        <ion-icon
          class={styles["icon-mobile-nav"]}
          name="close-outline"
        ></ion-icon>
      </button>
    </header>
  );
}
