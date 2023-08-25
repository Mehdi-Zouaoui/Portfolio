import styles from "@/styles/Home.module.css";
import { useState } from "react";
const Alert = ({ text, triggered }) => {
  return (
    <>
      {triggered ? (
        <div className={styles.alert_container}> {text}</div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Alert;
