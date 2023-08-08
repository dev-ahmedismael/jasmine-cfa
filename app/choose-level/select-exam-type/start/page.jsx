"use client";
import Step from "@/Templates/Step";
import { resetExam, setExamQuestions } from "@/app/store/examSlice";
import { Box, Button, Typography } from "@mui/material";
import { redirect } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const examChapters = useSelector((state) => state.exam.examChapters);
  const level = useSelector((state) => state.exam.level);
  const [questions, setQuestions] = useState([]);

  const generateExam = () => {
    // store questions of each chapter in a single array
    examChapters.map((chapter) => {
      chapter.questions.map((question) => {
        questions.push(question);
      });
    });

    // randomize questions array
    let currentIndex = questions.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [questions[currentIndex], questions[randomIndex]] = [
        questions[randomIndex],
        questions[currentIndex],
      ];
    }

    dispatch(
      setExamQuestions(
        questions.length <= 120 ? questions : questions.slice(0, 120)
      )
    );
  };

  if (level == 0 || examChapters.length == 0) {
    redirect("/");
  }

  return (
    <Step
      title={"You're almost done!"}
      next={"/exam"}
      back={"/choose-level/select-exam-type"}
      activeStep={2}
    >
      <Box>
        <Typography mb={7} textAlign={"center"}>
          You're about starting your exam, it consists of 120 question and
          you've to finish it in 180 minutes. To pass the exam you've to get 60%
          at least <br /> So when you're ready, take a deep breath and click
          start, Good Luck.
        </Typography>
        <Box display={"flex"} justifyContent={"center"}>
          <Link href={"/exam"}>
            <Button
              variant="contained"
              sx={{ mr: "5px" }}
              onClick={generateExam}
            >
              <Typography color="white">Start</Typography>
            </Button>
          </Link>
          <Button
            variant="contained"
            color="error"
            sx={{ ml: "5px" }}
            onClick={() => dispatch(resetExam())}
          >
            <Typography color="white">Cancel</Typography>
          </Button>
        </Box>
      </Box>
    </Step>
  );
};

export default page;
