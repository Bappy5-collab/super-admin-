// src/components/PromotionPerformance.tsx
import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const metrics = [
    { value: "+247%", label: "Views Increase", color: "primary" },
    { value: "+189%", label: "Click-through Rate", color: "success" },
    { value: "+156%", label: "Trial Signups", color: "secondary" },
    { value: "+134%", label: "Conversions", color: "warning" },
];

const PromotionPerformance: React.FC = () => {
    return (
        <Paper elevation={0}
            sx={{
                p: 3,
                boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.1)", 
            }}>
            <Typography sx={{ mb: 3, fontSize: "18px", fontWeight: '600', lineHeight: '100%', }}>Promotion Performance</Typography>
            <Grid container spacing={3} textAlign="center">

                {metrics.map((metric, i) => (
                    <Grid key={i} size={{ xs: 6, sm: 3 }}>
                        <Typography
                            variant="h5"
                            color={metric.color as
                                | "primary"
                                | "success"
                                | "secondary"
                                | "warning"}
                            fontWeight="bold"
                        >
                            {metric.value}
                        </Typography>
                        <Typography variant="subtitle1">{metric.label}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default PromotionPerformance;
