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
          <Model3d />
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
                <ul className={styles.technologies_list}>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      className={styles.technologies_index}
                      icon={faCaretRight}
                    />
                    Next js
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      className={styles.technologies_index}
                      icon={faCaretRight}
                    />
                    React
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      className={styles.technologies_index}
                      icon={faCaretRight}
                    />
                    REST API
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      className={styles.technologies_index}
                      icon={faCaretRight}
                    />
                    GraphQL API
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      className={styles.technologies_index}
                      icon={faCaretRight}
                    />
                    JSX/HTML
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      className={styles.technologies_index}
                      icon={faCaretRight}
                    />
                    CSS/SCSS
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      className={styles.technologies_index}
                      icon={faCaretRight}
                    />
                    Tailwind
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      className={styles.technologies_index}
                      icon={faCaretRight}
                    />
                    Node js
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      className={styles.technologies_index}
                      icon={faCaretRight}
                    />
                    Express
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      className={styles.technologies_index}
                      icon={faCaretRight}
                    />
                    MongoDB
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      className={styles.technologies_index}
                      icon={faCaretRight}
                    />
                    Firebase
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      className={styles.technologies_index}
                      icon={faCaretRight}
                    />
                    Supabase
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.hobbies_container}>
              <h3>Hobbies</h3>
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
              <div className={styles.cv_button}>Download CV</div>
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
