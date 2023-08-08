"use client";
import { Box, Button } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import styles from "@/Styles/navbar.module.css";
import Link from "next/link";

const NavMenu = ({ pages, handleNavMenu }) => {
  const theme = useTheme();
  return (
    <Box className={styles.navMenu} bgcolor={theme.palette.primary.main}>
      {pages.map((page) => (
        <Box key={page.title} onClick={handleNavMenu} m={5}>
          <Link href={page.url}>{page.title} </Link>
        </Box>
      ))}
    </Box>
  );
};

export default NavMenu;
