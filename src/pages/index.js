import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Model3d from "@/components/model3d";
import NavBar from "@/components/navBar";
import styles from "@/styles/Home.module.css";
import { faReact } from "@fortawesome/free-brands-svg-icons";
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
import InfiniteLooper from "../components/looper";
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
          <div className={styles.model}>
            <p className={styles.background_text}>TWOOLS</p>
            <div className={styles.profil_wrapper}>
            <svg
                id="visual"
                className={styles.profil_svg}
                viewBox="0 0 900 600"
                width="900"
                height="600"
              >
                <g transform="translate(473.88176256767235 333.4470875202977)">
                <defs>
                      <linearGradient
                        id="lgrad"
                        x1="0%"
                        y1="50%"
                        x2="100%"
                        y2="50%"
                      >
                        <stop
                          offset="0%"
                          style={{stopColor:"#f5cb5b" , stopOpacity:"1"}}
                          
                        />
                        <stop
                          offset="100%"
                          style={{stopColor:"#567189" , stopOpacity:"1"}}
                         
                        />
                      </linearGradient>
                    </defs>
                  <path fill="url(#lgrad)">
                    
                    <animate
                      attributeName="d"
                      dur="10000ms"
                      repeatCount="indefinite"
                      values="  M299.5 -206.1C384.8 -131.9 448.3 -7.5 423.5 94.8C398.6 197.1 285.4 277.4 168.6 323.4C51.8 369.4 -68.7 381.1 -159.2 335.6C-249.6 290.1 -310 187.3 -331 80C-352 -27.4 -333.5 -139.3 -271.8 -208.1C-210.1 -276.9 -105 -302.5 1 -303.3C107.1 -304.2 214.2 -280.2 299.5 -206.1;
                    M249.5 -196.1C327 -101.8 396 2.2 390.9 115.2C385.8 228.1 306.6 350.1 199.6 393.7C92.6 437.3 -42.2 402.4 -165.4 343.2C-288.6 284 -400.2 200.4 -413.5 105.1C-426.7 9.7 -341.6 -97.5 -256.3 -193.6C-171 -289.7 -85.5 -374.9 0.2 -375.1C86 -375.3 172 -290.5 249.5 -196.1;
                    M358.3 -265.9C443 -179.6 475.4 -31.8 434.3 79.3C393.1 190.5 278.4 265.1 165.8 303.7C53.2 342.4 -57.1 345.1 -137.7 300.6C-218.3 256.2 -269.1 164.6 -286.4 70.6C-303.7 -23.4 -287.5 -119.9 -234.2 -199.1C-180.9 -278.2 -90.4 -340.1 23.2 -358.6C136.8 -377.1 273.6 -352.2 358.3 -265.9;
                    M299.5 -206.1C384.8 -131.9 448.3 -7.5 423.5 94.8C398.6 197.1 285.4 277.4 168.6 323.4C51.8 369.4 -68.7 381.1 -159.2 335.6C-249.6 290.1 -310 187.3 -331 80C-352 -27.4 -333.5 -139.3 -271.8 -208.1C-210.1 -276.9 -105 -302.5 1 -303.3C107.1 -304.2 214.2 -280.2 299.5 -206.1;"
                    />
                  </path>
                </g>
              </svg>
              <Image
                className={styles.profil_picture}
                src="/mehdi.png"
                alt="profile"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
        {/* <SocialsBar /> */}
        <div className={styles.about_container}>
          <div className={styles.details_container}>
            <div className={styles.details_content}>
              <h2 className={styles.about_title}>A Propos</h2>
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
                <h2>Technologies</h2>
                <InfiniteLooper speed="12" direction="right">
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
                      <Image
                        className={styles.technologies_icon}
                        src="/icons/rest.svg"
                        alt="rest logo"
                        width={76}
                        height={55}
                      />
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
                      <Image
                        className={styles.technologies_icon}
                        src="/icons/github.svg"
                        alt="github logo"
                        width={76}
                        height={55}
                      />
                      <p className={styles.technologies_wrapper_label}>
                        Github
                      </p>
                    </li>
                    <li className={styles.technologies_wrapper}>
                      <Image
                        className={styles.technologies_icon}
                        src="/icons/three.svg"
                        alt="three logo"
                        width={76}
                        height={55}
                      />
                      <p className={styles.technologies_wrapper_label}>
                        Three JS
                      </p>
                    </li>
                    <li className={styles.technologies_wrapper}>
                      <Image
                        className={styles.technologies_icon}
                        src="/icons/blender.svg"
                        alt="blender logo"
                        width={76}
                        height={55}
                      />
                      <p className={styles.technologies_wrapper_label}>
                        Blender
                      </p>
                    </li>
                  </ul>
                </InfiniteLooper>
              </div>
            </div>
            <div className={styles.hobbies_container}>
              <h2 className={styles.hobbies_title}>Hobbies</h2>
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
        <h1 className={styles.projects_title}>Me Contacter</h1>
        <Contact />
      </div>
    </>
  );
}
