// src/pages/SignInPage.js
import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import backgroundImg from "../utils/background.jpg"; // Replace with actual path to your vector image

const SignInPage = () => {
  const clientID = "7773pz5iwqwfxj";
  const state = "MEETSHAH";
  const redirectURI = "http://localhost:3000/auth/linkedin/callback";

  const handleLinkedInSignIn = (role) => {
    console.log(`Sign in as ${role}`);
    const linkedInAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientID}&redirect_uri=${encodeURIComponent(
      redirectURI
    )}&state=${role}&scope=openid%20profile%20email`;

    // Redirect user to LinkedIn for authentication
    window.location.href = linkedInAuthUrl;
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, rgb(0 46 255 / 80%), rgba(0, 210, 255, 0.6))`,
        padding: 2,
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center", zIndex: 2 }}>
        <Box
          sx={{
            mb: 4,
            color: "white",
            backdropFilter: "blur(10px)",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: 3,
            p: 4,
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to LinkedIn Clone
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            Sign up or log in as a Candidate or Employer to get started
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {/* Candidate Sign In */}
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                p: 3,
                minHeight: "180px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: 3,
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
                backdropFilter: "blur(20px)",
                background: "rgba(255, 255, 255, 0.3)",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Sign In as Candidate
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<LinkedInIcon />}
                  onClick={() => handleLinkedInSignIn("employee")}
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Sign in with LinkedIn
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Employer Sign In */}
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                p: 3,
                minHeight: "180px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: 3,
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
                backdropFilter: "blur(20px)",
                background: "rgba(255, 255, 255, 0.3)",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Sign In as Employer
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<LinkedInIcon />}
                  onClick={() => handleLinkedInSignIn("employer")}
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Sign in with LinkedIn
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SignInPage;
