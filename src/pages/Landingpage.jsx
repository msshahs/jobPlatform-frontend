// src/pages/LandingPage.js
import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";

const LandingPage = () => {
  const handleLinkedInLogin = () => {
    // Replace this URL with your LinkedIn OAuth URL when ready
    window.location.href = "https://www.linkedin.com/oauth/v2/authorization";
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 8 }}>
      <Box>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to LinkedIn Clone
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Sign up or log in using LinkedIn to get started
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleLinkedInLogin}
          sx={{ mt: 4 }}
        >
          Sign in with LinkedIn
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;
