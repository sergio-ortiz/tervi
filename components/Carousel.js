import Image from "next/image";
import { useState, useEffect } from "react";

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

  return <Image src={"/carousel/" + images[index]} layout="fill" />;
}
