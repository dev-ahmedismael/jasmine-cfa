"use client";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Step from "@/Templates/Step";
import { useSelector, useDispatch } from "react-redux";
import { setLevel } from "../store/examSlice";

const page = () => {
  const dispatch = useDispatch();
  const level = useSelector((state) => state.exam.level);

  return (
    <Step
      title={"Choose your level"}
      next={"/choose-level/select-exam-type"}
      back={"/choose-level"}
      activeStep={0}
    >
      <Box display={"flex"} flexDirection={"column"}>
        <Button
          color="primary"
          variant={level === 1 ? "contained" : "outlined"}
          sx={{ mb: "20px" }}
          onClick={() => dispatch(setLevel(1))}
        >
          <Typography color={level === 1 ? "white" : "primary"}>
            Level 1
          </Typography>
        </Button>
        <Button color="primary" variant="outlined" sx={{ mb: "20px" }} disabled>
          level 2
        </Button>
        <Button color="primary" variant="outlined" disabled>
          level 3
        </Button>
      </Box>
    </Step>
  );
};

export default page;
