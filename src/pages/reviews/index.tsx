// pages/index.tsx
import React from "react";
import { Box, Container } from "@mui/material";
import Reviews from "@/Components/Dashboard/Reviews/Reviews";


const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <h1>Welcome to Our Reviews</h1>
        <p>See what our users are saying!</p>
      </Box>

      <Reviews />
    </Container>
  );
};

export default Home;
