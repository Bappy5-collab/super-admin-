// pages/index.tsx
import React from "react";
import { Box, Container } from "@mui/material";
import Reviews from "@/Components/Dashboard/Reviews/ReviewsPage";
import AnalyticPage from "@/Components/Dashboard/Analytics/AnalyticPage";


const Analytics: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <AnalyticPage/>
    </Container>
  );
};

export default Analytics;
