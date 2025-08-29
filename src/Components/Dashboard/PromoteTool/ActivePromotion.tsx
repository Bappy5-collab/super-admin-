// src/components/ActivePromotion.tsx
import React from "react";
import {  Typography, Button, Stack, Paper } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ActivePromotion: React.FC = () => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 2,
                background: "linear-gradient(to right, #F0FDF4, #ECFDF5)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: '1px solid #BBF7D0',
                borderRadius: '12px'
            }}
        >
            <Stack direction="row" spacing={1} alignItems="center">
                <CheckCircleIcon color="success" />
                <Typography>
                    <b>Active Promotion:</b> Basic Boost - Expires in 12 days
                </Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
                <Button sx={{ bgcolor: '#16A34A', borderRadius: '8px', textTransform: 'none', color: '#FFFFFF' }}>Extend Plan</Button>
                <Button variant="outlined" sx={{ borderRadius: '8px', textTransform: 'none', color: '#16A34A' }}>Upgrade</Button>
            </Stack>
        </Paper>
    );
};

export default ActivePromotion;
