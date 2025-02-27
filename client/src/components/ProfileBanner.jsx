import React from "react";
import styles from "./profileBanner.module.css";
import { useAuthContext } from "../hooks/useAuthContext";
const backEndUrl = process.env.REACT_APP_BACKEND_URL;
//            <img className={styles["profile-header-user-image"]} src={user.profilePic? `${process.env.REACT_APP_S3_LINK}${user.profilePic}` : `${process.env.REACT_APP_S3_LINK}genericProfile.png`}></img>
export default function ProfileBanner({ userProp }) {
  let user = useAuthContext().user;
  if (userProp) {
    user = userProp;
  }
  return (
    <div className={styles["profile-banner-container"]}>
      <img className={styles["profile-banner-picture"]} src="/assets/dummyData/banner.png" alt="profile picture" />{" "}
      <div className={styles["profile-banner-bottom-row"]}>
        <img className={styles["profile-banner-user-picture"]} src="/assets/dummyData/profileImage1.jpg" alt="profile picture" />{" "}
        <button id={styles["profile-banner-first-button"]}>Timeline</button>
        <button>About</button>
        <button>Friends</button>
        <button>Photos</button>
        <button>More</button>
      </div>
    </div>
  );
}
/*
<div className={styles["profile-header-container"]}>
        <img className={styles["profile-header-cover-image"]} src={backEndUrl + "/images/covers/1.jpg"}></img>
        <div className={styles["profile-header-info-row"]}>
            <div className={styles["profile-header-info-row-left-side"]}>
            <img className={styles["profile-header-user-image"]} src={user.profilePic? `${process.env.REACT_APP_S3_LINK}${user.profilePic}` : `${process.env.REACT_APP_S3_LINK}genericProfile.png`}></img>
            <div className={styles["profile-header-info-text"]}>
              <h2>{user.username}</h2>
              <h3>{user.followers.length}</h3>
              <h3>{user.bio}</h3>
            </div>
            </div>
            <div className={styles["profile-header-info-row-right-side"]}>
              <h3>{user.followings.length} Following </h3>
              <div className={styles["profile-header-info-row-right-side-buttons"]}>
                <button>Message</button>
                <button>Follow</button>
              </div>
            </div>
        </div>
        <div>

        </div>
    </div> */
