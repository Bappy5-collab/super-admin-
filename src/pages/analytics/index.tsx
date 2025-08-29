// pages/index.tsx
import React from "react";
import {  Container } from "@mui/material";
import AnalyticPage from "@/Components/Dashboard/Analytics/AnalyticPage";


const Analytics: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <AnalyticPage/>
    </Container>
  );
};

export default Analytics;
