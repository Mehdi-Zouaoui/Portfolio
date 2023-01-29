import styles from "@/styles/socialBar.module.css";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const SocialsBar = () => {
  return (
    <div className={styles.social_container}>
      <div className={styles.social_item_container}>
        <FontAwesomeIcon className={styles.social_item} icon={faTwitter} />
      </div>
      <div className={styles.social_item_container}>
        <FontAwesomeIcon className={styles.social_item} icon={faLinkedin} />
      </div>
      <div className={styles.social_item_container}>
        <FontAwesomeIcon className={styles.social_item} icon={faGithub} />
      </div>
    </div>
  );
};

export default SocialsBar;
