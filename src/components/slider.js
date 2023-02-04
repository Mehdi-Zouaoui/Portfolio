import styles from "@/styles/slider.module.css";
import {
  faCode,
  faDumbbell,
  faGamepad,
  faLaptop,
  faMugHot,
  faPersonSwimming,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { createRef, useEffect, useLayoutEffect, useRef, useState } from "react";
const Slider = () => {
  const comp = useRef();
  let [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  const [items, setItems] = useState([
    {
      title: "Twools",
      content: "Projet entreprenarial",
      description: `Twools est une application permettant aux streamers du créer
      affichage animé et/ou interactif avec leurs communauté vià des "twools".
      Il existe une liste non exaustive de twools comme des mini jeux, des sondage, des elements 3d ou encore des roue de la chance`,
      client_side_infos:
        "Coté client l'application est developper avec Next js et le style avec Tailwind. Pour les composant 3d j'ai utilisé React Three Fiber ",
      server_side_infos:
        "Server gérer avec Next et la base de données dans un premier temps avec MongoDB puis un migration vers Supabase pour gérer la manipulation de données en temps réel, Api GraphQL",
      clicked: false,
      image: "LOGO_TWOOLS.png",
      about: "Developpement fullstack",
      link: "https://github.com/Mehdi-Zouaoui/Twools",
    },
    {
      title: "Generateur de message",
      content: "Developpement Full Stack React et Express",
      description: ``,
      client_side_infos: "",
      server_side_infos: "",
      clicked: false,
      image: "",
      about: "",
      link: "",
    },
    {
      title: "Bibliothèques Cinéma",
      content: "Developpement Front avec React",
      description: "Projet de bibliothèque personnel de vos films favoris.",
      client_side_infos: "Projet developper avec React",
      server_side_infos: "Base de données local et server JSON",
      clicked: false,
      about: "Developpement frontend ",
      link: "https://github.com/Mehdi-Zouaoui/MoviesBoard",
    },
    {
      title: "DeezWeb",
      content: "Bibliothèque musical local",
      about: "Developpement fullstack",
      description: `Deez`,
      client_side_infos: " ",
      server_side_infos: null,
      clicked: false,
      link: "",
    },
    {
      title: "Site promotionel",
      content: "Developpement Javascript et gestion des données avec Firebase ",
      description: ``,
      client_side_infos: " ",
      server_side_infos: "",
      clicked: false,
      about: "Developpement frontend",
      link: "",
    },
    {
      title: "Site E-commerce",
      content: "Developpement Front avec React ",
      description: ``,
      client_side_infos: " ",
      server_side_infos: "",
      clicked: false,
      about: "Developpement frontend",
      link: "",
    },
  ]);
  useLayoutEffect(() => {
    console.log("rerun");
  }, [items]);
  const itemsRef = useRef([...Array(items.length)].map(() => createRef()));
  const sendProps = (item) => {
    Router.push({
      pathname: `/projects/${item.title.toLowerCase()}`,
      query: {
        title: item.title,
        content: item.content,
        description: item.description,
        client_side_infos: item.client_side_infos,
        server_side_infos: item.server_side_infos,
        about: item.about,
        link: item.link,
      },
    });
  };
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
  const elasticAnimation = (item, i) => {
    let ctx;
    const newItems = [...items];
    newItems.forEach((it, ind) => {
      if (i === ind) it.clicked = true;
      else it.clicked = false;
    });
    setItems(newItems);
    console.log(items);
    if (width >= 600) {
      ctx = gsap.context(() => {
        itemsRef.current.forEach((el, index) => {
          gsap.to(el.current, {
            height: "40vh",
            width: items[index].clicked ? "10vw" : "8vw",
            duration: 2,
            ease: "elastic(1, .3)",
          });

          gsap.to(el.current, {
            height: "40vh",
            width: items[index].clicked ? "25vw" : "13vw",
            duration: 2.5,
            ease: "elastic(1, .3)",
          });
        });
      }, comp);
    }
    if (width < 600) {
      ctx = gsap.context(() => {
        itemsRef.current.forEach((el, index) => {
          gsap.to(el.current, {
            height: items[index].clicked ? "10vh" : "8vh",
            duration: 2,
            ease: "elastic(1, .3)",
          });
          gsap.to(el.current, {
            height: items[index].clicked ? "30vh" : "15vh",
            duration: 2.5,
            ease: "elastic(1, .3)",
          });
        });
      }, comp);
    }

    return () => ctx.revert(); // cleanup
  };

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div
          className={
            width >= 600
              ? ` ${styles.sliderItem_long} `
              : ` ${styles.sliderItem_short}`
          }
          ref={itemsRef.current[index]}
          onClick={() => elasticAnimation(item, index)}
          key={index}
        >
          <svg
            id="visual"
            className={styles.sliderItem_bg}
            viewBox="0 0 900 600"
            width="900"
            height="600"
          >
            <g transform="translate(473.88176256767235 333.4470875202977)">
              <defs>
                <linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "#CFB997", stopOpacity: "1" }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#FAD6A5", stopOpacity: "1" }}
                  />
                </linearGradient>
              </defs>
              <path fill="url(#lgrad)">
                <animate
                  attributeName="d"
                  dur="5000ms"
                  repeatCount="indefinite"
                  values="  M299.5 -206.1C384.8 -131.9 448.3 -7.5 423.5 94.8C398.6 197.1 285.4 277.4 168.6 323.4C51.8 369.4 -68.7 381.1 -159.2 335.6C-249.6 290.1 -310 187.3 -331 80C-352 -27.4 -333.5 -139.3 -271.8 -208.1C-210.1 -276.9 -105 -302.5 1 -303.3C107.1 -304.2 214.2 -280.2 299.5 -206.1;
                    M249.5 -196.1C327 -101.8 396 2.2 390.9 115.2C385.8 228.1 306.6 350.1 199.6 393.7C92.6 437.3 -42.2 402.4 -165.4 343.2C-288.6 284 -400.2 200.4 -413.5 105.1C-426.7 9.7 -341.6 -97.5 -256.3 -193.6C-171 -289.7 -85.5 -374.9 0.2 -375.1C86 -375.3 172 -290.5 249.5 -196.1;
                    M358.3 -265.9C443 -179.6 475.4 -31.8 434.3 79.3C393.1 190.5 278.4 265.1 165.8 303.7C53.2 342.4 -57.1 345.1 -137.7 300.6C-218.3 256.2 -269.1 164.6 -286.4 70.6C-303.7 -23.4 -287.5 -119.9 -234.2 -199.1C-180.9 -278.2 -90.4 -340.1 23.2 -358.6C136.8 -377.1 273.6 -352.2 358.3 -265.9;
                    M299.5 -206.1C384.8 -131.9 448.3 -7.5 423.5 94.8C398.6 197.1 285.4 277.4 168.6 323.4C51.8 369.4 -68.7 381.1 -159.2 335.6C-249.6 290.1 -310 187.3 -331 80C-352 -27.4 -333.5 -139.3 -271.8 -208.1C-210.1 -276.9 -105 -302.5 1 -303.3C107.1 -304.2 214.2 -280.2 299.5 -206.1;"
                />
              </path>
            </g>
          </svg>
          <h3 className={styles.item_title}>{item.title}</h3>
          {item.clicked ? (
            <div className={styles.item_content_container}>
              <p className={styles.item_content}>{item.content}</p>

              <div
                className={styles.item_learn_more}
                onClick={() => {
                  sendProps(item);
                }}
              >
                Learn More
              </div>
            </div>
          ) : (
            ""
          )}

          <FontAwesomeIcon icon={faLaptop} />
          {/* <img src={item.img} className={styles.sliderItem_img} alt="" /> */}
        </div>
      ))}
    </div>
  );
};

export default Slider;
