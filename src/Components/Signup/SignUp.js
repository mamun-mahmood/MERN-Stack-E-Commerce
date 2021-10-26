import { React, useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Signup.css";
import gLogo from "../../Resources/google.svg";
import fbLogo from "../../Resources/facebook.svg";
import { useAuth } from "../AuthContext";
import { useHistory } from "react-router-dom";

const theme = createTheme();

export default function SignIn() {
  const [newUser, setNewUser] = useState(false);

  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    success: false,
    matchedPassword: false,
  });
  let isFromValid = true;
  const [validPassword, setValidPassword] = useState("");
  const handleChange = (e) => {
    if (e.target.name === "name") {
      user.name = e.target.value;
    }
    if (e.target.name === "email") {
      var re = /\S+@\S+\.\S+/;
      isFromValid = re.test(e.target.value);
      if (!isFromValid && newUser) {
        const newUserInfo = { ...user };
        newUserInfo.error = "Invalid Email";
        setUser(newUserInfo);
      } else user.error = "";
      setUser[e.target.name] = e.target.value;
    }
    if (e.target.name === "password") {
      if (e.target.value.length < 6 && newUser) {
        const newUserInfo = { ...user };
        newUserInfo.error = "Password length should be 6 minimum";
        setUser(newUserInfo);
      } else user.error = "";
      setValidPassword(e.target.value);
      const passwordLengthVaildation = e.target.value.length >= 6;
      const PasswordNumberValidation = /\d{1}/.test(e.target.value);
      isFromValid = passwordLengthVaildation && PasswordNumberValidation;
    }
    if (isFromValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  const matchPassword = (e) => {
    if (e.target.name === "confirmPassword") {
      if (e.target.value === validPassword) {
        const newUserInfo = { ...user };
        newUserInfo.error = "Password Matched";
        newUserInfo.matchedPassword = true;
        setUser(newUserInfo);
      } else {
        const newUserInfo = { ...user };
        newUserInfo.error = "Password is not matching";
        newUserInfo.matchedPassword = false;
        setUser(newUserInfo);
      }
    }
  };
  //all sign in methods from auth context
  const { signup, login, signInWithGoogle} = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newUser) {
      user.error = "";
      await signup(user.email, user.password);
    }
    if (!newUser) {
      user.error = "";
      await login(user.email, user.password);
    }
  };
  return (
    <ThemeProvider theme={theme} className="bg-white">
      <Container component="main" maxWidth="xs" className="mb-2">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {newUser ? "Sign Up" : "Sign In"}
          </Typography>
          <Box
            component="form"
            // onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {newUser && (
              <Grid item xs={12} sm={12}>
                {" "}
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Your Name"
                  name="name"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleChange}
              autoComplete="current-password"
            />
            {newUser && (
              <TextField
                variant="outlined"
                onChange={matchPassword}
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
              />
            )}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <p>{user.error}</p>
            {user.success && (
              <p style={{ color: "green" }}>
                {newUser ? "Signed Up" : "Logged In"} Successfully
              </p>
            )}
            {newUser ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={
                  !(
                    user.name &&
                    user.email &&
                    user.password &&
                    user.matchedPassword
                  )
                }
              >
                Sign Up
              </Button>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={!(user.email && user.password)}
              >
                Sign In
              </Button>
            )}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <p
                  onClick={() => {
                    setNewUser(!newUser);
                    user.error = " ";
                  }}
                  className="new_user_btn"
                >
                  {"Don't have an account? Sign Up"}
                </p>
              </Grid>
            </Grid>
            <div style={{ textAlign: "center" }}>
              <h5>Sign In with</h5>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingBottom: "10px",
                }}
              >
                <img
                  onClick={signInWithGoogle}
                  style={{ width: "35px", marginRight: "20px" }}
                  src={gLogo}
                  alt="image"
                />
                <img
                  // onClick={fbSignIn}
                  style={{ width: "35px" }}
                  src={fbLogo}
                  alt="image"
                />
              </div>
            </div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
