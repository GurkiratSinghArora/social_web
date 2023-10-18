import React, { useEffect, useState } from "react";
import Post from "./Post";
import styles from "./feed.module.css";
import Share from "./Share";
import { useAuthContext } from "../hooks/useAuthContext";
import { useBackEnd } from "../hooks/useBackEnd";

export default function Feed() {
  return (
    <div className={styles["feed-container"]}>
      <Share />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />

    </div>
  );
}
