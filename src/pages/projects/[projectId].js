import styles from "@/styles/project.module.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeft,
  faCaretRight,
  faDisplay,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const ProjectDetails = () => {
  const router = useRouter();
  const projectId = router.query.productId;
  const {
    query: {
      title,
      content,
      description,
      client_side_infos,
      server_side_infos,
      about,
      link,
      video,
      technologies,
      image,
    },
  } = router;
  const props = {
    title,
    content,
    description,
    client_side_infos,
    server_side_infos,
    about,
    link,
    video,
    technologies,
    image,
  };
  let [width, setWidth] = useState(null);

  useEffect(() => {
    setWidth(
      window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    );
    const resizeListener = () => {
      // change width from the state object
      setWidth(
        window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
      );
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
  return (
    <div className={styles.project_container}>
      <div className={styles.project_wrapper}>
        <p className={styles.project_about}>{props.about}</p>
        <div className={styles.project_left_container}>
          <div className={styles.project_github}>
            <div className={styles.project_github_wrapper}>
              <h1 className={styles.project_title}>{props.title}</h1>
              <p className={styles.project_text}>{props.content}</p>
            </div>
            <div>
              <a href={props.link} target="_blank" rel="noreferrer">
                {" "}
                <FontAwesomeIcon
                  icon={faGithub}
                  className={styles.project_github_icon}
                />{" "}
              </a>
            </div>
          </div>
          <div className={styles.project_description} style={{ width: "90%" }}>
            {props.description}
          </div>
          <div className={styles.project_client}>
            <h2 className={styles.project_subtitle}>
              {" "}
              <FontAwesomeIcon
                icon={faDisplay}
                className={styles.project_tech_icon}
              />{" "}
              Client{" "}
            </h2>
            <p style={{ width: "90%" }}>{props.client_side_infos}</p>{" "}
          </div>
          <div className={styles.project_server}>
            <div>
              <h2 className={styles.project_subtitle}>
                {" "}
                <FontAwesomeIcon
                  icon={faServer}
                  className={styles.project_tech_icon}
                />{" "}
                Serveur
              </h2>
              <p style={{ width: "90%" }}> {props.server_side_infos}</p>
            </div>
          </div>
          <div className={styles.project_technologies}>
            <h3 className={styles.project_subtitle}>Technologie</h3>
            <ul className={styles.project_techs} style={{ width: "90%" }}>
              {props.technologies.map((tech, index) => (
                <li key={index}>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className={styles.project_tech_icon}
                  />
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.project_right_container}>
          <div className={styles.project_right_screen}>
            {props.video.length > 1 ? (
              <video
                src={props.video}
                autoPlay
                loop
                muted
                className={styles.project_video}
              ></video>
            ) : (
              <Image
                width={width <= 800 ? 300 : 350}
                height={800}
                src={props.image}
                alt=""
              />
            )}
          </div>

          {/* <div
            className={styles.project_img}
           
          ></div> */}
        </div>
        <div className={styles.project_back}>
          <Link href="/">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
