import * as React from "react";
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
import {signInWithPopup} from 'firebase/auth'
import {auth, provider} from '../../FirebaseConfig'
const theme = createTheme();

export default function SignIn() {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err))
  }
  const [newUser, setNewUser] = React.useState(false);
  const matchPassword = (e) => {
    // if (e.target.name === "confirmPassword") {
      //   if (e.target.value === validPassword) {
        //     const newUserInfo = { ...user };
        //     newUserInfo.error = "Password Matched";
        //     newUserInfo.matchedPassword = true;
        //     setUser(newUserInfo);
        //   } else {
          //     const newUserInfo = { ...user };
          //     newUserInfo.error = "Password is not matching";
          //     newUserInfo.matchedPassword = false;
    //     setUser(newUserInfo);
    //   }
    // }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
   
  };
  return (
    <ThemeProvider theme={theme}>
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
            onSubmit={handleSubmit}
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
                  // onBlur={handleChange}
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <p
                  onClick={() => setNewUser(!newUser)}
                  className="new_user_btn"
                >
                  {"Don't have an account? Sign Up"}
                </p>
              </Grid>
            </Grid>
            <div style={{ textAlign: "center" }}>
              <h5>Sign In with</h5>
              <div style={{display: 'flex', justifyContent: "space-around", paddingBottom: '10px'}}>
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
