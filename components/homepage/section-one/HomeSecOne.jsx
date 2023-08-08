import AnimatedAvatar from "@/Templates/AnimatedAvatar";
import SocialMediaIcons from "@/Templates/SocialMediaIcons";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const HomeSecOne = () => {
  return (
    <section>
      <Box py={7} bgcolor={"white"}>
        <Container>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box mb={7}>
              <AnimatedAvatar src={"/images/jasmine4.png"} />
            </Box>
            <Typography
              variant="h3"
              color={"primary"}
              mb={7}
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
              }}
            >
              Hi, I'm Jasmine Ibrahim
            </Typography>
            <Typography
              variant="h5"
              color={"primary"}
              mb={7}
              sx={{
                display: {
                  xs: "block",
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
              }}
            >
              Hi, I'm Jasmine Ibrahim
            </Typography>
            <Typography textAlign={"center"} mb={7}>
              I'm a financial analyst from Egypt and I'm studying now the first
              level of CFA, I've created this web application to help students
              from all over the world to achieve their goals and pass CFA exams
              by giving them the chance to go through an experience which is
              similar to the real CFA exams.
            </Typography>
            <SocialMediaIcons />
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default HomeSecOne;
