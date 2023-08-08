import {
  Typography,
  Box,
  Container,
  FormControl,
  OutlinedInput,
  TextField,
  Button,
} from "@mui/material";
import React from "react";

const HomeSecTwo = () => {
  return (
    <section>
      <Box py={7} bgcolor={"secondary"}>
        <Container>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography variant="h3" color={"primary"} mb={7}>
              Contact Us
            </Typography>
            <Box width={"70%"} bgcolor={"white"} p={5} borderRadius={2}>
              <Box width={"100%"} mb={3}>
                <FormControl fullWidth>
                  <OutlinedInput type="text" placeholder="Name"></OutlinedInput>
                </FormControl>
              </Box>
              <Box width={"100%"} mb={3}>
                <FormControl fullWidth>
                  <OutlinedInput
                    type="text"
                    placeholder="Email"
                  ></OutlinedInput>
                </FormControl>
              </Box>
              <Box width={"100%"} mb={3}>
                <FormControl fullWidth>
                  <TextField
                    variant={"outlined"}
                    multiline
                    rows={7}
                    placeholder="What's on your mind?"
                  />
                </FormControl>
              </Box>
              <Box display={"flex"} justifyContent={"center"}>
                <Button variant="contained">
                  <Typography color={"white"}>Send Message</Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default HomeSecTwo;
