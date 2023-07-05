import React from "react";

// Style
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <span className={styles.logo}>logo</span>
        <div className={styles.menu}>
          <h1 className="text-3xl font-bold underline">test1</h1>
          <h1 className="font-bold underline">test2</h1>
          <h1 className="text-3xl font-bold">test3</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
