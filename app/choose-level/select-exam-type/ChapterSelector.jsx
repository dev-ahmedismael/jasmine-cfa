import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import data from "@/public/data.json";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedChapters } from "@/app/store/examSlice";
import { Box } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function ChapterSelector() {
  const dispatch = useDispatch();
  const chapters = useSelector((state) => state.exam.selectedChapters);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    dispatch(
      setSelectedChapters(typeof value === "string" ? value.split(",") : value)
    );
  };

  return (
    <Box width={250}>
      <FormControl fullWidth>
        <InputLabel id="demo-multiple-checkbox-label">
          Select Chapters
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={chapters}
          onChange={handleChange}
          input={<OutlinedInput label="Select Chapters" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {data.map((chapter) => (
            <MenuItem key={chapter.id} value={chapter.title}>
              <Checkbox checked={chapters.indexOf(chapter.title) > -1} />
              <ListItemText primary={chapter.title} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
