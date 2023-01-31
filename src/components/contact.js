import styles from "@/styles/contact.module.css";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact_left_container}>
        <h2>Disponnible pour toutes opportunités Freelance </h2>
        <p>Envoyez moi un mail ou contacez moi sur mes reseaux</p>
        <p>md1.zouaoui@gmail.com</p>
        <ul className={styles.contact_social}>
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
              icon={faTwitter}
            />
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
        <Input label="Name" register={register} required />
        <Input label="E-mail" register={register} required />
        <Input label="Object" register={register} required />
        <Input label="Message" register={register} required />
        <input type="submit" className={styles.form_submit_button} />
      </div>

      {/* name/email/subject/Message */}
      {/* include validation with required or other standard HTML validation rules */}

      {/* errors will return when field validation fails  */}
    </form>
  );
};

const Input = ({ label, register, required }) => (
  <div
    className={
      label === "Message"
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
