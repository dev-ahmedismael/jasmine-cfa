import { Box } from "@mui/material";
import React from "react";
import styles from "@/Styles/avatar.module.css";
import Image from "next/image";

const AnimatedAvatar = ({ src }) => {
  return (
    <div className={styles.container}>
      <Box className={styles.outerCircle}></Box>
      <Image
        src={src}
        alt="Avatar"
        width={100}
        height={100}
        className={styles.innerCircle}
      />
    </div>
  );
};

export default AnimatedAvatar;
