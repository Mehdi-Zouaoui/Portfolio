import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Model3d from "@/components/model3d";
import NavBar from "@/components/navBar";
import styles from "@/styles/Home.module.css";
import {
  faCaretRight,
  faCode,
  faDumbbell,
  faGamepad,
  faMugHot,
  faPersonSwimming,
} from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { Inter } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import InfiniteLooper from "../components/looper";
import React from "react";
import Slider from "../components/slider";
import SocialsBar from "../components/socialsBar";
const inter = Inter({ subsets: ["latin"] });

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <div>
        <NavBar />
        <div className={styles.main_container}>
          <div className={styles.profil}>
            {/* <Image
              className={styles.profil_picture}
              src="/mehdi.jpg"
              alt="profile"
              width={200}
              height={200}
            /> */}
            <div className={styles.catchphrase}>
              <p className={styles.presentation}>
                Hey, moi c'est
                <span className={styles.presentation_name}> Mehdi Zouaoui</span>
              </p>
              <p className={styles.presentation_profession}>
                Je suis développeur d'application web spécialisé dans React et
                Next.js et geek à mes heures perdu.
              </p>
            </div>
          </div>
          <div className={styles.model}></div>
        </div>
        {/* <SocialsBar /> */}
        <div className={styles.about_container}>
          <div className={styles.details_container}>
            <div className={styles.details_content}>
              <h3 className={styles.about_title}>A Propos</h3>
              <p className={styles.about_text}>
                Passioné par la création d'applications modernes et interactives
                en utilisant les dernières technologies. <br /> Je maitrise
                JavaScript, React, Next.js et d'autres bibliothèques associées.{" "}
                <br /> Je suis également capable de travailler avec des API
                REST/GRAPHQL et de les intégrer à des applications React. <br />
                J'aime travailler en équipe et je suis capable de communiquer
                efficacement pour résoudre les problèmes rapidement et
                efficacement.
              </p>
              <div className={styles.technologies_container}>
                <h3>Technologies</h3>
                <InfiniteLooper speed="4" direction="right">
                  <ul className={styles.technologies_list}>
                    <li className={styles.technologies_wrapper}>
                      <Image
                        className={styles.technologies_icon}
                        src="/icons/nextJS.svg"
                        alt="Next JS logo"
                        width={76}
                        height={55}
                      />
                      <p className={styles.technologies_wrapper_label}>
                        Next js
                      </p>
                    </li>
                    <li className={styles.technologies_wrapper}>
                      <Image
                        className={styles.technologies_icon}
                        src="/icons/react.svg"
                        alt="react logo"
                        width={76}
                        height={55}
                      />
                      <p className={styles.technologies_wrapper_label}>React</p>
                    </li>
                    <li className={styles.technologies_wrapper}>
                      <p className={styles.technologies_wrapper_label}>
                        Rest API
                      </p>
                    </li>
                    <li className={styles.technologies_wrapper}>
                      <Image
                        className={styles.technologies_icon}
                        src="/icons/graphql.svg"
                        alt="react logo"
                        width={76}
                        height={55}
                      />
                      <p className={styles.technologies_wrapper_label}>
                        GraphQL
                      </p>
                    </li>
                    <li className={styles.technologies_wrapper}>
                      <Image
                        className={styles.technologies_icon}
                        src="/icons/js.svg"
                        alt="react logo"
                        width={76}
                        height={55}
                      />
                      <p className={styles.technologies_wrapper_label}>JS</p>
                    </li>
                    <li className={styles.technologies_wrapper}>
                      <Image
                        className={styles.technologies_icon}
                        src="/icons/scss.svg"
                        alt="scss logo"
                        width={76}
                        height={55}
                      />
                      <p className={styles.technologies_wrapper_label}>
                        CSS/SCSS
                      </p>
                    </li>
                    <li className={styles.technologies_wrapper}>
                      <Image
                        className={styles.technologies_icon}
                        src="/icons/tailwind.svg"
                        alt="tailwind logo"
                        width={76}
                        height={55}
                      />
                      <p className={styles.technologies_wrapper_label}>
                        Tailwind
                      </p>
                    </li>
                    <li className={styles.technologies_wrapper}>
                      <Image
                        className={styles.technologies_icon}
                        src="/icons/nodejs.svg"
                        alt="nodejs logo"
                        width={76}
                        height={55}
                      />
                      <p className={styles.technologies_wrapper_label}>
                        Node JS
                      </p>
                    </li>
                    <li className={styles.technologies_wrapper}>
                      <p className={styles.technologies_wrapper_label}>
                        Express
                      </p>
                    </li>
                    <li className={styles.technologies_wrapper}>
                      <Image
                        className={styles.technologies_icon}
                        src="/icons/mongodb.svg"
                        alt="mongodb logo"
                        width={76}
                        height={55}
                      />
                      <p className={styles.technologies_wrapper_label}>
                        MongoDB
                      </p>
                    </li>
                    <li className={styles.technologies_wrapper}>
                      <Image
                        className={styles.technologies_icon}
                        src="/icons/firebase.svg"
                        alt="firebase logo"
                        width={76}
                        height={55}
                      />
                      <p className={styles.technologies_wrapper_label}>
                        Firebase
                      </p>
                    </li>
                    <li className={styles.technologies_wrapper}>
                      <p className={styles.technologies_wrapper_label}>
                        Supabase
                      </p>
                    </li>
                  </ul>
                </InfiniteLooper>
              </div>
            </div>
            <div className={styles.hobbies_container}>
              <h3 className={styles.hobbies_title}>Hobbies</h3>
              <ul className={styles.social_list}>
                <li className={styles.social_li}>
                  {" "}
                  <FontAwesomeIcon
                    className={styles.social_item}
                    icon={faGamepad}
                  />
                </li>
                <li className={styles.social_li}>
                  {" "}
                  <FontAwesomeIcon
                    className={styles.social_item}
                    icon={faMugHot}
                  />
                </li>
                <li className={styles.social_li}>
                  {" "}
                  <FontAwesomeIcon
                    className={styles.social_item}
                    icon={faPersonSwimming}
                  />
                </li>
                <li className={styles.social_li}>
                  {" "}
                  <FontAwesomeIcon
                    className={styles.social_item}
                    icon={faDumbbell}
                  />
                </li>
                <li className={styles.social_li}>
                  {" "}
                  <FontAwesomeIcon
                    className={styles.social_item}
                    icon={faCode}
                  />
                </li>
              </ul>

              <a
                href="/CV.pdf"
                className={styles.cv_button}
                download="Zouaoui Mehdi CV"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        <h1 className={styles.projects_title}>Projets</h1>
        <Slider />

        <Experience />

        <Contact />
      </div>
    </>
  );
}
