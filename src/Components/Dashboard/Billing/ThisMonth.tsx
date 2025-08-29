import React from "react";
import { Box, Card, Typography, Divider, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function ThisMonth() {
    return (
        <Card sx={{ p: 3, flex: 1, minHeight: '390px' }}>
            <Typography sx={{ fontSize: '18px', fontWeight: '600', lineHeight: '100%', color: '#111827' }}>
                This Month
            </Typography>

            <Stack spacing={1} sx={{ mt: 2 }}>
                {[
                    { label: "Subscription", value: "$100.00" },
                    { label: "Transaction Fees", value: "$85.20" },
                    { label: "Additional Storage", value: "$15.00" },
                ].map((row, i) => (
                    <Stack direction="row" justifyContent="space-between" key={i}>
                        <Typography sx={{ fontSize: '16px', fontWeight: '400', lineHeight: '24px', color: '#4B5563' }} >
                            {row.label}
                        </Typography>
                        <Typography sx={{ fontSize: '16px', fontWeight: '500', lineHeight: '24px', color: '#111827' }}>
                            {row.value}
                        </Typography>
                    </Stack>
                ))}
                <Divider />
                <Stack direction="row" justifyContent="space-between">
                    <Typography fontWeight={600}>Total</Typography>
                    <Typography fontWeight={700}>$200.20</Typography>
                </Stack>
            </Stack>

            <Box
                sx={{
                    mt: 2,
                    bgcolor: "#F0FDF4",
                    color: "#166534",
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    fontSize: 13,
                }}
            >
                <Stack direction="row" alignItems="center" spacing={1}>
                    {/* Check Icon */}
                    <CheckCircleIcon sx={{ fontSize: 20, color: "#166534" }} />

                    {/* Text Block */}
                    <Stack spacing={0.3}>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: 500,
                                lineHeight: "20px",
                                color: "#166534",
                            }}
                        >
                            Payment Up to Date
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "12px",
                                fontWeight: 500,
                                lineHeight: "16px",
                                color: "#166534",
                            }}
                        >
                            Last payment: Dec 15, 2024
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
        </Card>
    );
}
