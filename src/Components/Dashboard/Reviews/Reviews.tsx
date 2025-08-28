import React from "react";
import { Box, Typography, Button } from "@mui/material";


interface HelloWorldProps {
  name?: string; // optional prop
}

const Reviews: React.FC<HelloWorldProps> = ({ name = "World" }) => {
  return (
    <Box
      sx={{
        p: 3,
        bgcolor: "#f5f5f5",
        borderRadius: 2,
        textAlign: "center",
        boxShadow: 1,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Hello, {name}!
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </Box>
  );
};

export default Reviews;
