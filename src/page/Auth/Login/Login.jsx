/* eslint-disable no-unused-vars */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState, forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import bg from "./bg/Login.svg";
import Logo from "~/assets/Logo.png";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const boxstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  height: "70%",
  bgcolor: "background.paper",
  boxShadow: 24,
};


function Login() {
  const [open, setOpen] = useState(false);
  const [remember, setRemember] = useState(false);
  const vertical = "top";
  const horizontal = "right";

  const handleSubmit = async (event) => {
    setOpen(true);
    event.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const data = new FormData(event.currentTarget);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionComponent={TransitionLeft}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Failed! Enter correct username and password.
        </Alert>
      </Snackbar>
      <div
        style={{
          backgroundColor: `#f0f2f5`,
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5",
        }}
      >
        <Box
          sx={boxstyle}
          alignItems="center"
          style={{
            backgroundColor: `#f0f2f5`,
            borderRadius: "20px",
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={12} lg={6}>
              <Box
                style={{
                  backgroundSize: "cover",
                  height: "70vh",
                  minHeight: "500px",
                  backgroundColor: "rgb(27 93 207)",
                  borderRadius: "20px",
                }}
              >
                <ThemeProvider theme={darkTheme}>
                  <Container>
                    <Box height={35} />
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Avatar>
                        <LockOutlinedIcon />
                      </Avatar>
                      <Typography component="h1" variant="h4">
                        Sign In
                      </Typography>
                    </Box>
                    <Box
                      component="form"
                      noValidate
                      onSubmit={handleSubmit}
                      sx={{ mt: 2 }}
                    >
                      <Grid container spacing={1}>
                        <Grid
                          item
                          xs={12}
                          sx={{ ml: "1.5em", mr: "1.5em", textAlign: "center" }}
                        >
                          <TextField
                            required
                            fullWidth
                            id="email"
                            label="Username"
                            name="email"
                            autoComplete="email"
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sx={{ ml: "1.5em", mr: "1.5em", textAlign: "center" }}
                        >
                          <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sx={{ ml: "3em", mr: "3em", textAlign: "center" }}
                        >
                          <Stack direction="row" spacing={2}>
                            <FormControlLabel
                              sx={{
                                width: "60%",
                                display: { xs: "none", sm: "block" },
                              }}
                              onClick={() => setRemember(!remember)}
                              control={<Checkbox checked={remember} />}
                              label="Remember me"
                            />
                            <Typography
                              xs={12}
                              variant="body1"
                              component="span"
                              onClick={() => {}}
                              style={{ marginTop: "10px", cursor: "pointer" }}
                            >
                              Forgot password?
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sx={{ textAlign: "center" }}
                        >
                          <Button
                            type="submit"
                            variant="contained"
                            fullWidth="true"
                            size="medium"
                            sx={{
                              mt: "10px",
                              mr: "20px",
                              borderRadius: 28,
                              color: "#ffffff",
                              minWidth: "170px",
                              backgroundColor: "#FF9A01",
                              textAlign: "center",
                              display: "block",
                              margin: "0 auto",
                            }}
                          >
                            Sign in
                          </Button>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sx={{ ml: "3em", mr: "3em", textAlign: "center" }}
                        >
                          <Stack direction="row" spacing={2}>
                            <Typography
                              variant="body1"
                              component="span"
                              style={{ marginTop: "10px" }}
                            >
                              Not registered yet?{" "}
                              <span
                                style={{ color: "#beb4fb", cursor: "pointer" }}
                                onClick={() => {}}
                              >
                                Create an Account
                              </span>
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Box>
                  </Container>
                </ThemeProvider>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box
                style={{
                  backgroundImage: `url(${bg})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: "80%",
                  color: "#f5f5f5",
                }}
              ></Box>
              <Box
                style={{
                  backgroundImage: `url(${Logo})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "20%",
                }}
              ></Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default Login;