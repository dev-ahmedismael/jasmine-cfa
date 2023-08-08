import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Box py={2}>
        <Typography textAlign={"center"} color={"primary"}>
          Copyright © 2023 All Rights Reserved
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
