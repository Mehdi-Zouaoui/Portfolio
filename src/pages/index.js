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
        <div className="container">
          <p>Bonjour moi c'est Mehdi developper web freelance</p>
          <img
            className={styles.profil_picture}
            src="mehdi.jpg"
            alt="profile"
          />
        </div>
        <SocialsBar />
        <div className={styles.about_container}>
          <div className={styles.details_container}>
            <ul className={styles.personal_container}>
              <li>Date de naissance : 13/05/1996</li>
              <li>Téléphone : 06 31 02 66 03</li>
              <li>Email : md1.zouaoui@gmail.com</li>
              <li>Adresse : 10 bis route de villiers adam</li>
              <li>Jobs : FREELANCE</li>
            </ul>

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
        </div>
        DL CV
        <Slider />
        <p>SKills</p>
        <p>Contact</p>
      </div>
    </>
  );
}
