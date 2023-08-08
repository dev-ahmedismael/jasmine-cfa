"use client";
import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  Modal,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useDispatch, useSelector } from "react-redux";
import { resetExam, setIsFinished } from "../store/examSlice";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import Link from "next/link";
import { redirect } from "next/navigation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "500px",
  minWidth: "290px",
  bgcolor: "background.paper",
  border: "2px solid #0097a7",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

const page = () => {
  const theme = useTheme();

  // timer
  const [hours, setHours] = useState(3);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        if (seconds === 0 && minutes === 0) {
          setHours(hours - 1);
          setMinutes(59);
          setSeconds(59);
        } else if (seconds === 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          setSeconds(seconds - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [hours, minutes, seconds]);

  // exam
  const dispatch = useDispatch();
  const examQuestions = useSelector((state) => state.exam.examQuestions);
  const examChapters = useSelector((state) => state.exam.examChapters);
  const isFinish = useSelector((state) => state.exam.isFinish);
  const [questionsWithAnswers, setQuestionsWithAnswers] = useState([]);

  // assign student answer
  const setStudentAnswer = (event, question) => {
    // destructure value
    const {
      target: { value },
    } = event;

    // copy question
    const questionWithAnswer = { ...question };

    // assign student answer
    questionWithAnswer.studentAnswer = value;

    // search if the quesion already exists in the array with an old answer
    const foundQuestion = questionsWithAnswers.find(
      (question) => question.id === questionWithAnswer.id
    );

    // if question not found push it with it's answer else modify answer
    foundQuestion === undefined
      ? setQuestionsWithAnswers([...questionsWithAnswers, questionWithAnswer])
      : (foundQuestion.studentAnswer = value);
  };

  const [studentMarks, setStudentMarks] = useState(0);
  const [finalResult, setFinalResult] = useState(0);

  // correct exam
  const correctExam = () => {
    // set is finish to true
    dispatch(setIsFinished());

    // stop timer
    setHours(0);
    setMinutes(0);
    setSeconds(0);

    // calculate result
    let marks = 0;
    for (let question of questionsWithAnswers) {
      if (question.studentAnswer == question.correct_answer) {
        marks++;
      }
    }
    setStudentMarks(marks);

    const result = ((marks / examQuestions.length) * 100).toFixed(2);
    setFinalResult(result);

    // show result
    handleOpen();
  };

  // handle result show
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (examChapters.length == 0 || examQuestions.length == 0) {
    redirect("/");
  }

  return (
    <Box py={7}>
      <Container>
        <Box borderRadius={1} bgcolor={"white"}>
          <Box
            py={3}
            bgcolor={theme.palette.primary.main}
            color="white"
            display={"flex"}
            justifyContent={"center"}
            position={"sticky"}
            zIndex={2}
            top={0}
            sx={{ borderTopRightRadius: "4px", borderTopLeftRadius: "4px" }}
          >
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Remaining Time: {hours > 9 ? hours : `0${hours}`} Hours :{" "}
              {minutes > 9 ? minutes : `0${minutes}`} Minutes :{" "}
              {seconds > 9 ? seconds : `0${seconds}`} Seconds
            </Typography>
            <Typography
              fontSize={"x-small"}
              sx={{ display: { xs: "block", sm: "none" } }}
            >
              Remaining Time: {hours > 9 ? hours : `0${hours}`} Hours :{" "}
              {minutes > 9 ? minutes : `0${minutes}`} Minutes :{" "}
              {seconds > 9 ? seconds : `0${seconds}`} Seconds
            </Typography>
          </Box>
          <Box py={7}>
            <Container>
              {examQuestions.map((question, index) => (
                <Box key={question.id} mb={5}>
                  <Typography variant="h6" color={"primary"} mb={3}>
                    Question {index + 1}:
                  </Typography>
                  <Typography>{question.question}</Typography>
                  <br />
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                      onChange={(event) => {
                        setStudentAnswer(event, question);
                      }}
                    >
                      {question.choices.map((choice, index) => (
                        <Box display={"flex"} key={index}>
                          <FormControlLabel
                            value={index}
                            control={<Radio />}
                            label={choice}
                            disabled={isFinish}
                          />
                          <Box mt={1}>
                            {isFinish &&
                              (index === question.correct_answer ? (
                                <CheckIcon color="primary" />
                              ) : (
                                <ClearIcon color="error" />
                              ))}
                          </Box>
                        </Box>
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Box>
              ))}

              <Box
                pt={7}
                borderTop={"2px solid #0097a7"}
                display={"flex"}
                justifyContent={"center"}
              >
                {isFinish === false ? (
                  <Button variant="contained" onClick={correctExam}>
                    <Typography color={"white"}>Submit Answers</Typography>
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleOpen}
                  >
                    <Typography color={"white"}>Show Result</Typography>
                  </Button>
                )}
              </Box>
            </Container>
          </Box>
          <Box>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                {finalResult > 60 ? (
                  <>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      color="primary"
                    >
                      Congratulations
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      You've got {finalResult}%, you did a good job and deserve
                      a celebration.
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      color="error"
                    >
                      Oops
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Unfortunately, you didn't pass the exam, you've got{" "}
                      {finalResult}%.
                    </Typography>
                  </>
                )}
                <Box display={"flex"} justifyContent={"center"} pt={3}>
                  <Link href={"/"} onClick={() => dispatch(resetExam())}>
                    <Button variant="contained" color="error">
                      Back to home
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Modal>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default page;
