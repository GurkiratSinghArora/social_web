import React, { Children } from "react";
import styles from "./background.module.css";

export default function Background({ children }) {
  return (
    <>
      <div class={styles["background"]}>
      </div>
      {children}
    </>
  );
}
