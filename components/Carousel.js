import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../styles/Carousel.module.css";

export default function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index === images.length - 1 ? 0 : index + 1);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div className={styles.container}>
      <Image src={"/" + images[index]} layout="fill" />
    </div>
  );
}
