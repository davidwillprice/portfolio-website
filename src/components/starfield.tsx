"use client";

import { useRef, useEffect } from "react";

import styles from "./starfield.module.scss";

const Starfield = () => {
  const starRef = useRef<HTMLDivElement>(null);

  const generateBoxShadow = (starCount: number) => {
    const pixelRadius = 1500;
    const shadows = [];
    for (let i = 0; i < starCount; i++) {
      const x = Math.floor((Math.random() * 2 - 1) * pixelRadius);
      const y = Math.floor((Math.random() * 2 - 1) * pixelRadius);
      shadows.push(`${x}px ${y}px #FFF`);
    }

    return shadows.join(", ");
  };

  useEffect(() => {
    if (starRef.current) {
      starRef.current.style.setProperty(
        "--star-shadows-1",
        generateBoxShadow(700),
      );
      starRef.current.style.setProperty(
        "--star-shadows-2",
        generateBoxShadow(300),
      );
      starRef.current.style.setProperty(
        "--star-shadows-3",
        generateBoxShadow(200),
      );
    }
  }, []);

  return (
    <div ref={starRef} className={styles.star_con}>
      <div className={styles.star__1}></div>
      <div className={styles.star__2}></div>
      <div className={styles.star__3}></div>
    </div>
  );
};

export default Starfield;
