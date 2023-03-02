import styles from "@/styles/contact.module.css";
import emailjs from "@emailjs/browser";
import {
  faGithub,
  faGmail,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [contactAlert, setContactAlert] = useState(false);
  return (
    <div className={styles.contact}>
      <div className={styles.contact_wrapper}>
        <div className={styles.contact_left_container}>
          <Image
            width={300}
            height={300}
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
          />
          {contactAlert === true ? <div>Votre mail à été envoyé</div> : null}
        </div>
      </div>
    </div>
  );
};
const ContactForm = ({ contactAlert, setContactAlert }) => {
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
          <Input label="Name" required />
          <Input label="E-mail" required />
        </div>
        <Input label="Object" required />
        <Input label="Message" required />
        <div className={styles.contact_send_wrapper}>
          {" "}
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

const Input = ({ label, required }) => (
  <div
    style={label === "Message" ? { height: "200px" } : {}}
    className={
      label === "Message" || label === "Object"
        ? styles.form_long_input_container
        : styles.form_short_input_container
    }
  >
    <label className={styles.form_label}>
      {label} <p>:</p>
    </label>
    <input className={styles.form_input} name={label.toLowerCase()} />
  </div>
);

export default Contact;
