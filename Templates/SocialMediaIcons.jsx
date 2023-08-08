"use client";
import { Box, Link } from "@mui/material";
import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useTheme } from "@emotion/react";
import { orange } from "@mui/material/colors";

const SocialMediaIcons = () => {
  const theme = useTheme();
  const socialMediaIcons = [
    {
      icon: <FacebookRoundedIcon />,
      url: "https://www.facebook.com/devahmedismael",
    },
    {
      icon: <TwitterIcon />,
      url: "https://twitter.com/devahmedismael",
    },
    {
      icon: <InstagramIcon />,
      url: "https://www.instagram.com/devahmedismael",
    },
    {
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/devahmedismael",
    },
    {
      icon: <YouTubeIcon />,
      url: "https://www.youtube.com/@devahmedismael",
    },
  ];
  return (
    <Box display={"flex"}>
      {socialMediaIcons.map((e) => (
        <Link
          key={e.url}
          href={e.url}
          target="_blank"
          sx={{
            cursor: "pointer",
            mr: "15px",
            ":& hover": {
              color: "red !important",
            },
          }}
        >
          <Box
            sx={{
              border: "2px solid #0097a7",
              borderRadius: "100%",
              display: "flex",
              alignItems: "center",
            }}
            px={"5px"}
            py={"5px"}
          >
            {e.icon}
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default SocialMediaIcons;
