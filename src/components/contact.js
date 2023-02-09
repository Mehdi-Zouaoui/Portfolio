import styles from "@/styles/contact.module.css";
import {
  faGithub,
  faGmail,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact_left_container}>
        <Image
          width={200}
          height={200}
          alt="avatar"
          src="/icon_perso_blanc.png"
        />
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
      <div className={styles.contact_right_container}>
        <ContactForm />
      </div>
    </div>
  );
};
const ContactForm = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form_contact}>
      {/* register your input into the hook by invoking the "register" function */}
      <div className={styles.inputs_container}>
        <div className={styles.inputs_name}>
          <Input label="Name" register={register} required />
          <Input label="E-mail" register={register} required />
        </div>
        <Input label="Object" register={register} required />
        <Input label="Message" register={register} required />
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

const Input = ({ label, register, required }) => (
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
    <input
      className={styles.form_input}
      {...register(label.toLowerCase(), { required })}
    />
  </div>
);

export default Contact;
