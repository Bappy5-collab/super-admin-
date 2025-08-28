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
                        bgcolor: "#E5E7EB", // white background
                        color: "#4F46E5",  // text color
                        textTransform: "none", // no uppercase
                        height: 50, // increased height
                        borderRadius: 2, // 8px rounded corners

                        "&:hover": {
                            bgcolor: "#F3F4F6", // light hover background
                        },
                    }}
                >
                    View Success Stories
                </Button>

                <Button
                    variant="outlined"
                    sx={{
                        bgcolor: "#4F46E533", // semi-transparent purple background
                        color: "#FFFFFF", // text color
                        borderColor: "#FFFFFF4D", // 30% opacity white border
                        textTransform: "none", // keep original casing
                        height: 50, // increased height
                        borderRadius: 2, // 8px rounded corners
                        fontWeight: 600,
                        "&:hover": {
                            bgcolor: "#4F46E5", // solid purple on hover
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
