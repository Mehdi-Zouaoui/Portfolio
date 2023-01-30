import styles from "@/styles/slider.module.css";
import gsap from "gsap";
import { createRef, useLayoutEffect, useRef, useState } from "react";

const Slider = () => {
  const comp = useRef();

  const [items, setItems] = useState([
    {
      title: "Twools",
      content: "Text",
      clicked: false,
      img: "LOGO_TWOOLS.png",
      background: "twoolsBg.PNG",
    },
    {
      title: "Twools",
      content: "Text",
      clicked: false,
      img: "LOGO_TWOOLS.png",
      background: "twoolsBg.PNG",
    },
    {
      title: "Twools",
      content: "Text",
      clicked: false,
      img: "LOGO_TWOOLS.png",
      background: "twoolsBg.PNG",
    },
    {
      title: "Twools",
      content: "Text",
      clicked: false,
      img: "LOGO_TWOOLS.png",
      background: "twoolsBg.PNG",
    },
    {
      title: "Twools",
      content: "Text",
      clicked: false,
      img: "LOGO_TWOOLS.png",
      background: "twoolsBg.PNG",
    },
  ]);
  useLayoutEffect(() => {
    console.log("rerun");
  }, [items]);
  const itemsRef = useRef([...Array(items.length)].map(() => createRef()));

  const elasticAnimation = (item, i) => {
    const newItems = [...items];
    newItems.forEach((it, ind) => {
      if (i === ind) it.clicked = true;
      else it.clicked = false;
    });
    setItems(newItems);
    console.log(items);
    let ctx = gsap.context(() => {
      itemsRef.current.forEach((el, index) => {
        gsap.to(el.current, {
          width: items[index].clicked ? "10vw" : "8vw",
          duration: 2,
          ease: "elastic(1, .3)",
        });

        gsap.to(el.current, {
          width: items[index].clicked ? "25vw" : "13vw",
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
          style={{
            backgroundImage: `  linear-gradient(
            rgba(0, 0, 0, 0.7), 
            rgba(0, 0, 0, 0.7)
          ), url(${item.background})`,
          }}
          onClick={() => elasticAnimation(item, index)}
          key={index}
        >
          {item.title}

          <div>{item.clicked ? item.content : null}</div>
          {/* <img src={item.img} className={styles.sliderItem_img} alt="" /> */}
        </div>
      ))}
    </div>
  );
};

export default Slider;
