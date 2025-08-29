// pages/index.tsx
import React from "react";
import { Box, Container } from "@mui/material";
import Reviews from "@/Components/Dashboard/Reviews/ReviewsPage";


const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Reviews />
    </Container>
  );
};

export default Home;
