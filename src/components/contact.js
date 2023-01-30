import styles from "@/styles/contact.module.css";
const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact_left_container}>
        <h2>Disponnible pour Freelance </h2>
        <p></p>
        <ul>
          <li>LinkedIn</li>
          <li>Github</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div className={styles.contact_right_container}></div>
    </div>
  );
};

export default Contact;
