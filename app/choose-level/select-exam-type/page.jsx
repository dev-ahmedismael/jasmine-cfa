"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Step from "@/Templates/Step";
import { useSelector, useDispatch } from "react-redux";
import { setExamType } from "@/app/store/examSlice";
import ChapterSelector from "@/app/choose-level/select-exam-type/ChapterSelector";
import { redirect } from "next/navigation";

const page = () => {
  const dispatch = useDispatch();
  const examType = useSelector((state) => state.exam.examType);
  const level = useSelector((state) => state.exam.level);

  if (level == 0) {
    redirect("/");
  }

  return (
    <Step
      title={"Select exam type"}
      next={"/choose-level/select-exam-type/start"}
      back={"/choose-level/"}
      activeStep={1}
    >
      <Box display={"flex"} flexDirection={"column"}>
        <Button
          color="primary"
          variant={examType === "all" ? "contained" : "outlined"}
          sx={{ mb: "20px" }}
          onClick={() => {
            dispatch(setExamType("all"));
          }}
        >
          <Typography color={examType === "all" ? "white" : "primary"}>
            All Chapters Exam
          </Typography>
        </Button>
        <Button
          color="primary"
          variant={examType === "custom" ? "contained" : "outlined"}
          sx={{ mb: "20px" }}
          onClick={() => dispatch(setExamType("custom"))}
        >
          <Typography color={examType === "custom" ? "white" : "primary"}>
            Custom Chapters Exam
          </Typography>
        </Button>
        {examType === "custom" && <ChapterSelector />}
      </Box>
    </Step>
  );
};

export default page;
