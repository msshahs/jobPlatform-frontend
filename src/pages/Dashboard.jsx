// src/pages/Dashboard.js
import React from "react";
import { Container, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1">
        This is where you’ll see your job applications, rankings, and other
        insights.
      </Typography>
    </Container>
  );
};

export default Dashboard;
