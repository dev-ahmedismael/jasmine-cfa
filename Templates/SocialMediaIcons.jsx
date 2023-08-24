"use client";
import { Box, Link } from "@mui/material";
import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTheme } from "@emotion/react";

const SocialMediaIcons = () => {
  const theme = useTheme();
  const socialMediaIcons = [
    {
      icon: <FacebookRoundedIcon />,
      url: "https://www.facebook.com/profile.php?id=100077929572186",
    },
    {
      icon: <TwitterIcon />,
      url: "https://twitter.com/Yasmine43163813",
    },
    {
      icon: <InstagramIcon />,
      url: "https://www.instagram.com/jasminemohamed9731/",
    },
    {
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/jasmine-ibrahim-0304a3183/",
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
