import styles from "@/styles/contact.module.css";
import emailjs from "@emailjs/browser";
import {
  faGithub,
  faGmail,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCheck, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const Contact = ({ width }) => {
  const [contactAlert, setContactAlert] = useState(false);
  return (
    <div className={styles.contact}>
      <div className={styles.contact_wrapper}>
        <div className={styles.contact_left_container}>
          <Image
            className={styles.contact_image}
            width={width <= 640 ? 200 : 300}
            height={width <= 640 ? 200 : 300}
            alt="avatar"
            src="/icon_perso_blanc.png"
          />
          <div className={styles.contact_left_content}>
            <h2>Disponible pour toutes opportunités Freelance </h2>
            <p>Envoyez moi un mail ou contacez moi sur mes reseaux</p>
            <p>md1.zouaoui@gmail.com</p>
            <ul className={styles.contact_social}>
              <li>
                <a
                  href="https://www.linkedin.com/in/mehdi-zouaoui-926476186/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    className={styles.contact_social_item}
                    icon={faLinkedin}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Mehdi-Zouaoui?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    className={styles.contact_social_item}
                    icon={faGithub}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.contact_right_container}>
          <ContactForm
            contactAlert={contactAlert}
            setContactAlert={setContactAlert}
            width={width}
          />
        </div>
      </div>
    </div>
  );
};
const ContactForm = ({ contactAlert, setContactAlert, width }) => {
  const wait = async (ms) => {
    await new Promise((resolve) => {
      return setTimeout(resolve, ms);
    });
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tj2hlda",
        "template_6utagsh",
        form.current,
        "RWim58HLop_0hO9dT"
      )
      .then(
        async (result) => {
          setContactAlert((bool) => !bool);
          await wait(3000);
          e.target.reset();
          setContactAlert((bool) => !bool);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={sendEmail} ref={form} className={styles.form_contact}>
      {/* register your input into the hook by invoking the "register" function */}
      <div className={styles.inputs_container}>
        <div className={styles.inputs_name}>
          <Input label="Name" width={width} required />
          <Input label="E-mail" width={width} required />
        </div>
        <Input label="Object" required />
        <Input label="Message" required />
        <div className={styles.contact_send_wrapper}>
          <div
            className={styles.mail_sended}
            style={{ opacity: contactAlert === true ? "1" : "0" }}
          >
            Votre message à été envoyé{" "}
            <FontAwesomeIcon
              className={styles.mail_sended_icon}
              icon={faCheck}
            />
          </div>

          <button type="submit" className={styles.form_submit_button}>
            {" "}
            <FontAwesomeIcon
              className={styles.contact_send_item}
              icon={faPaperPlane}
            />
          </button>
        </div>
      </div>

      {/* name/email/subject/Message */}
      {/* include validation with required or other standard HTML validation rules */}

      {/* errors will return when field validation fails  */}
    </form>
  );
};

const Input = ({ label, required, width }) => (
  <div
    style={label === "Message" ? { height: "200px" } : {}}
    className={
      label === "Message" || label === "Object"
        ? styles.form_long_input_container
        : styles.form_short_input_container
    }
  >
    {label === "Message" ? (
      <label style={{ display: "flex", alignSelf: "start" }}>
        {label} <p>:</p>
      </label>
    ) : (
      <label className={styles.form_label}>
        {label} <p>:</p>
      </label>
    )}
    {label === "Message" ? (
      <textarea
        className={styles.form_textarea}
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
    ) : (
      <input className={styles.form_input} name={label.toLowerCase()} />
    )}
  </div>
);

export default Contact;
