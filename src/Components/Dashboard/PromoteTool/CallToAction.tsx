// src/components/CallToAction.tsx
import React from "react";
import {  Typography, Button, Stack, Paper } from "@mui/material";

const CallToAction: React.FC = () => {
    return (
        <Paper
            sx={{
                p: 4,
                textAlign: "center",
                background: "linear-gradient(90deg, #4e54c8, #00c6ff)",
                color: "white",
                borderRadius: '12px'
            }}
        >
            <Typography sx={{ fontSize: '24px', fontWeight: '700', lineHeight: '32px', color: "#FFFFFF", mb: 1 }}>
                Get your AI tool noticed by thousands of users
            </Typography>
            <Typography sx={{ fontSize: '17px', fontWeight: '400', lineHeight: '28px', color: "#FFFFFF" }} >
                Start promoting today and watch your user base grow exponentially!
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
                <Button
                    variant="contained"
                    sx={{
                        boxShadow: "none",
                        bgcolor: "#E5E7EB",
                        color: "#4F46E5",
                        textTransform: "none",
                        height: 50,
                        borderRadius: 2,
                        "&:hover": {
                            bgcolor: "#F3F4F6",
                        },
                    }}
                >
                    View Success Stories
                </Button>

                <Button
                    variant="outlined"
                    sx={{
                        bgcolor: "#4F46E533",
                        color: "#FFFFFF",
                        borderColor: "#FFFFFF4D",
                        textTransform: "none",
                        height: 50,
                        borderRadius: 2,
                        fontWeight: 600,
                        "&:hover": {
                            bgcolor: "#4F46E5",
                            borderColor: "#4F46E5",
                        },
                    }}
                >
                    Contact Sales
                </Button>
            </Stack>
        </Paper>
    );
};

export default CallToAction;
