import React from "react";

// Style
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <span className={styles.logo}>logo</span>
        <div className={styles.menu}>
          <h1 className={styles["menu-item"]}>test1</h1>
          <h1 className={styles["menu-item"]}>test2</h1>
          <h1 className={styles["menu-item"]}>test3</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
