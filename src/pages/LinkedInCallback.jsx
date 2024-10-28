import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../redux/Auth/Actions";

const LinkedInCallback = () => {
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [authRole, setAuthRole] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Extract the code from URL parameters when the component mounts
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const code = query.get("code");
    const role = query.get("state");
    setAuthCode(code);
    setAuthRole(role);
    // Store the code for use in the handleSubmit function
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (authCode && linkedinUrl) {
      try {
        // Combine auth code and LinkedIn URL into a single GET request
        const response = await fetch(
          `http://localhost:4040/app/user/auth/linkedin/callback?code=${authCode}&linkedinUrl=${encodeURIComponent(
            linkedinUrl
          )}&role=${authRole}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const result = await response.json();
        if (result.status) {
          dispatch(login({ ...result.data }));
        }
        console.log(
          "User data and LinkedIn URL submitted successfully:",
          result
        );

        // Redirect to the next page after successful submission
        navigate("/"); // Replace with your actual path
      } catch (error) {
        console.error("Error during submission:", error);
      }
    } else {
      console.error("Authorization code and LinkedIn URL are required.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100vw", // Full viewport width
        background: "linear-gradient(135deg, #00c6ff, #0072ff)",
        boxShadow: 3,
        padding: 2,
      }}
    >
      <Box sx={{ textAlign: "center", maxWidth: "sm", width: "100%" }}>
        <Typography variant="h4" component="h1" sx={{ color: "#fff", mb: 2 }}>
          Welcome!
        </Typography>
        <Typography variant="body1" sx={{ color: "#fff", mb: 3 }}>
          Please enter your LinkedIn URL to continue:
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            variant="outlined"
            fullWidth
            type="url"
            placeholder="LinkedIn URL"
            value={linkedinUrl}
            onChange={(e) => setLinkedinUrl(e.target.value)}
            required
            InputProps={{
              style: {
                color: "#fff", // Text color
              },
            }}
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#fff",
                },
                "&:hover fieldset": {
                  borderColor: "#fff",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#fff",
                },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#fff",
              color: "#0072ff",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default LinkedInCallback;
