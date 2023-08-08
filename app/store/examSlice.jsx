import { createSlice } from "@reduxjs/toolkit";
import data from "@/public/data.json";

const initialState = {
  level: 0,
  examType: "",
  selectedChapters: [],
  examChapters: [],
  examQuestions: data[0].questions,
  isFinish: false,
};

export const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    setLevel: (state, action) => {
      state.level = action.payload;
    },
    setExamType: (state, action) => {
      state.examType = action.payload;
    },
    setSelectedChapters: (state, action) => {
      state.selectedChapters = action.payload;
    },
    setExamChapters: (state, action) => {
      state.examChapters = action.payload;
    },
    addToExamChapters: (state, action) => {
      state.examChapters.push(action.payload);
    },
    resetExam: (state) => {
      state.level = 0;
      state.examType = "";
      state.selectedChapters = [];
      state.examChapters = [];
      state.examQuestions = [];
      state.isFinish = false;
    },
    setExamQuestions: (state, action) => {
      state.examQuestions = action.payload;
    },
    setIsFinished: (state) => {
      state.isFinish = true;
    },
  },
});

export const {
  setLevel,
  setExamType,
  setSelectedChapters,
  setExamChapters,
  addToExamChapters,
  resetExam,
  setExamQuestions,
  setIsFinished,
} = examSlice.actions;

export default examSlice.reducer;
