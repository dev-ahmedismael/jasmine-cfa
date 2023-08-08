"use client";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Input,
  OutlinedInput,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const header = () => {
  const theme = useTheme();
  return (
    <header>
      <Box sx={{ height: "100%" }}>
        <Container sx={{ height: "100%" }}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{ height: "100%" }}
          >
            <Box
              width={"130%"}
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
              }}
            >
              <Image
                src="/images/main_logo.png"
                alt="log"
                width={200}
                height={200}
                priority
              />
              <Typography variant="h4" color={"white"}>
                Give yourself every advantage <br /> to pass your CFA® exams.
              </Typography>
            </Box>

            <Box>
              <Box
                bgcolor={"white"}
                boxShadow={3}
                p={2}
                borderRadius={2}
                sx={{ opacity: 0.9 }}
              >
                <form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <OutlinedInput
                          type="text"
                          placeholder="Email address"
                        ></OutlinedInput>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <OutlinedInput
                          type="password"
                          placeholder="Password"
                        ></OutlinedInput>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <Button variant="contained" color={"primary"}>
                          <Typography color={"white"}>Sign In</Typography>
                        </Button>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography textAlign={"center"} color={"primary"}>
                        Don't have an account?
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <Button variant="contained" color={"primary"}>
                          <Typography color={"white"}>
                            Create New Account
                          </Typography>
                        </Button>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography textAlign={"center"} color={"primary"}>
                        OR
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Link href={"/choose-level"}>
                        <FormControl fullWidth>
                          <Button variant="outlined" color={"primary"}>
                            <Typography color={"primary"}>
                              Sign in as a guest
                            </Typography>
                          </Button>
                        </FormControl>
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </header>
  );
};

export default header;
