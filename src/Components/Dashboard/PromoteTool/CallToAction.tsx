// src/components/CallToAction.tsx
import React from "react";
import { Box, Typography, Button, Stack, Paper } from "@mui/material";

const CallToAction: React.FC = () => {
  return (
    <Paper
      sx={{
        p: 4,
        textAlign: "center",
        background: "linear-gradient(90deg, #4e54c8, #00c6ff)",
        color: "white",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Get your AI tool noticed by thousands of users
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Start promoting today and watch your user base grow exponentially!
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
        <Button variant="contained" sx={{ bgcolor: "white", color: "primary.main" }}>
          View Success Stories
        </Button>
        <Button variant="outlined" sx={{ color: "white", borderColor: "white" }}>
          Contact Sales
        </Button>
      </Stack>
    </Paper>
  );
};

export default CallToAction;
