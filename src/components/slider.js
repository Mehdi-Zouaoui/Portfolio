import styles from "@/styles/slider.module.css";
import gsap from "gsap";
import { useRef, useLayoutEffect, useState, createRef } from "react";

const Slider = () => {
  const comp = useRef();

  const [items, setItems] = useState([
    {
      content: "1",
      clicked: false,
    },
    {
      content: "2",
      clicked: false,
    },
    {
      content: "3",
      clicked: false,
    },
    {
      content: "4",
      clicked: false,
    },
    {
      content: "5",
      clicked: false,
    },
  ]);
  const itemsRef = useRef([...Array(items.length)].map(() => createRef()));

  const elasticAnimation = (item, i) => {
    items.forEach((it, ind) => {
      if (i === ind) it.clicked = true;
      else it.clicked = false;
    });
    let ctx = gsap.context(() => {
      itemsRef.current.forEach((el, index) => {
        gsap.to(el.current, {
          width: items[index].clicked ? "10vw" : "8vw",
          duration: 2,
          ease: "elastic(1, .6)",
        });
        
        gsap.to(el.current, {
          width: items[index].clicked ? "35vw" : "10vw",
          duration: 2.5,
          ease: "elastic(1, .3)",
        });
      });
    }, comp);

    return () => ctx.revert(); // cleanup
  };

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div
          className={styles.sliderItem}
          ref={itemsRef.current[index]}
          onClick={() => elasticAnimation(item, index)}
          key={index}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default Slider;
