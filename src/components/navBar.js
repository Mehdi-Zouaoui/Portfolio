import styles from "@/styles/navBar.module.css";
import {
  faGithub,
  faGmail,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
const NavBar = () => {
  return (
    <div className={styles.nav_container}>
      <div className={styles.nav_img_container}>
        <Image
          className={styles.nav_img}
          src="/MZ_LOGO.svg"
          alt=""
          width={60}
          height={100}
        />
      </div>
      <ul className={styles.nav_list_container}>
        <li>
          {" "}
          <FontAwesomeIcon
            className={styles.contact_social_item}
            icon={faLinkedin}
          />
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            className={styles.contact_social_item}
            icon={faGithub}
          />
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            className={styles.contact_social_item}
            icon={faEnvelope}
          />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
