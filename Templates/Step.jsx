"use client";
import React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {
  addToExamChapters,
  resetExam,
  setExamChapters,
} from "@/app/store/examSlice";
import data from "@/public/data.json";

const Step = ({ title, next, back, activeStep, children }) => {
  const theme = useTheme();
  const level = useSelector((state) => state.exam.level);
  const dispatch = useDispatch();
  const selectedChapters = useSelector((state) => state.exam.selectedChapters);
  const examType = useSelector((state) => state.exam.examType);
  const examChapters = useSelector((state) => state.exam.examChapters);

  const handleExamChapters = () => {
    if (examType === "all") {
      dispatch(setExamChapters(data));
    } else {
      for (let i = 0; i < selectedChapters.length; i++) {
        for (let j = 0; j < data.length; j++) {
          if (selectedChapters[i] === data[j].title) {
            dispatch(addToExamChapters(data[j]));
            break;
          }
        }
      }
    }
  };

  return (
    <section id="step">
      <Container>
        <Box
          boxShadow={3}
          borderRadius={2}
          p={5}
          bgcolor={"white"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Typography
            variant="h4"
            color={"primary"}
            mb={5}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {title.toUpperCase()}
          </Typography>
          <Typography
            color={"primary"}
            mb={5}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            {title.toUpperCase()}
          </Typography>
          <Box mb={5}>{children}</Box>
          <Box width={"100%"} display={"flex"} justifyContent={"center"}>
            <MobileStepper
              variant="dots"
              steps={3}
              position="static"
              activeStep={activeStep}
              sx={{ maxWidth: 400, flexGrow: 1 }}
              nextButton={
                <Link
                  href={next}
                  onClick={activeStep === 1 && handleExamChapters}
                >
                  <Button
                    size="small"
                    disabled={
                      (activeStep === 0 && level === 0) ||
                      (activeStep === 1 &&
                        (examType === "" ||
                          (examType === "custom" &&
                            selectedChapters.length === 0))) ||
                      activeStep === 2
                    }
                  >
                    Next
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                </Link>
              }
              backButton={
                <Link href={back}>
                  <Button size="small" disabled={activeStep === 0}>
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                    Back
                  </Button>
                </Link>
              }
            />
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Step;
