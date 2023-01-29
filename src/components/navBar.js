import styles from "@/styles/navBar.module.css";
const NavBar = () => {
  return (
    <div className={styles.nav_container}>
      <div className={styles.nav_img_container}>
        <img className={styles.nav_img} src="LOGO_TWOOLS.png" alt="" />
        <h2>Zouaoui Mehdi</h2>
      </div>
      <ul className={styles.nav_list_container}>
        <li>Home</li>
        <li>Skills</li>
        <li>Project</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default NavBar;
