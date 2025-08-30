// pages/index.tsx
import React from "react";
import {  Container } from "@mui/material";
import SupportPage from "@/Components/Dashboard/Support/SupportPage";


const Support: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <SupportPage />
    </Container>
  );
};

export default Support;
