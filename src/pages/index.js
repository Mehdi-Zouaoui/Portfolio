import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Model3d from "@/components/model3d";
import NavBar from "@/components/navBar";
import styles from "@/styles/Home.module.css";
import {
  faCode,
  faDumbbell,
  faGamepad,
  faMugHot,
  faPersonSwimming,
} from "@fortawesome/free-solid-svg-icons";
import { Inter } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
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
            <img
              className={styles.profil_picture}
              src="mehdi.jpg"
              alt="profile"
            />
            <p className={styles.catchphrase}>
              <p className={styles.presentation}>
                Hey, moi c'est
                <span className={styles.presentation_name}> Mehdi Zouaoui</span>
              </p>
              <p className={styles.presentation_profession}>
                Je suis développeur d'application web spécialisé dans React et
                Next.js et geek à mes heures perdu.
              </p>
            </p>
          </div>
          <Model3d />
        </div>
        {/* <SocialsBar /> */}
        <div className={styles.about_container}>
          <div className={styles.details_container}>
            <div className={styles.details_content}>
              <p>
                Je suis passionné par la création d'applications modernes et
                interactives en utilisant les dernières technologies. <br /> Je
                maitrise JavaScript, React, Next.js et d'autres bibliothèques
                associées. <br /> Je suis également capable de travailler avec
                des API REST/GRAPHQL et de les intégrer à des applications
                React. <br />
                J'aime travailler en équipe et je suis capable de communiquer
                efficacement pour résoudre les problèmes rapidement et
                efficacement.
              </p>
            </div>

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
                <FontAwesomeIcon className={styles.social_item} icon={faCode} />
              </li>
            </ul>
          </div>
          <div className={styles.cv_button}>Download CV</div>
        </div>

        <Slider />
        <Experience />
        <p>SKills</p>
        <p>Contact</p>
        <Contact />
      </div>
    </>
  );
}
