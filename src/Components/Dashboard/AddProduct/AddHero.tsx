// SubmitSection.tsx

import React from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';


const stats = [
    { value: '8M+', label: 'Page Views', color: '#3B82F6' },
    { value: '5M+', label: 'Monthly Visits', color: '#8B5CF6' },
    { value: '700K+', label: 'Subscribers', color: '#14B8A6' },
    { value: '55%', label: 'Desktop Users', color: '#3B82F6' },
    { value: '3:23', label: 'Avg. Time on Site', color: '#8B5CF6' },
];

const AddHero: React.FC = () => {


    return (
        <Box
            sx={{
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    maxWidth: '1200px',
                    mx: 'auto',
                    px: { xs: 1, sm: 2, md: 0 },
                }}
            >
            
                <Grid
                    container
                    spacing={{ xs: 1.5, sm: 2, md: 3 }}
                    justifyContent={{ xs: "flex-start", sm: "center" }}
                    sx={{
                        overflowX: { xs: "auto", sm: "visible" },
                        px: { xs: 1, sm: 0 },
                    }}
                >
                    {stats.map((item, index) => (
                        <Grid
                            key={index}
                            sx={{
                                minWidth: { xs: "160px", sm: "180px", md: "180px" },
                                height: { xs: "80px", sm: "88px", md: "100px" },
                                backgroundColor: "#FFFFFF",
                                borderRadius: "12px",
                                px: 2,
                                py: 1.5,
                                 boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.1)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                textAlign: "center",

                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: "18px", sm: "20px", md: "24px" },
                                    lineHeight: "100%",
                                    color: item.color,
                                }}
                            >
                                {item.value}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#6B7280",
                                    mt: 0.5,
                                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                                    fontWeight: 400,
                                    lineHeight: "100%",
                                }}
                            >
                                {item.label}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default AddHero;
