"use client";
import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/main_logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const pages = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
  ];
  const theme = useTheme();
  const [isNavMenuActive, setIsNavMenuActive] = useState(false);
  const handleNavMenu = () => {
    setIsNavMenuActive(!isNavMenuActive);
  };
  return (
    <nav>
      <Box
        bgcolor={theme.palette.primary.main}
        height={70}
        display={"flex"}
        alignItems={"center"}
      >
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <Image src={Logo} alt="Logo" width={50} height={50} priority />
            <Typography ml={2} variant="h6" color={"white"}>
              Jasmine CFA
            </Typography>
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Box key={page.title} sx={{ ml: "30px" }}>
                <Link href={page.url}>{page.title}</Link>
              </Box>
            ))}
          </Box>
          {/* Small screen */}
          <Box
            sx={{
              display: {
                xs: "flex",
                sm: "flex",
                md: "none",
                lg: "none",
                xl: "none",
              },
              alignItems: "center",
            }}
            onClick={() => setIsNavMenuActive(!isNavMenuActive)}
          >
            <MenuIcon sx={{ color: "white", fontSize: "xx-large" }} />
            {isNavMenuActive && (
              <NavMenu pages={pages} handleNavMenu={handleNavMenu} />
            )}
          </Box>
        </Container>
      </Box>
    </nav>
  );
};

export default Navbar;
