// components/SubmitToolSection.tsx
import React from "react";
import {

    Card,
    CardContent,
    CardMedia,
    Chip,
    Rating,
    Divider,
    Typography,
    Box,
    Grid,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const features = [
    {
        title: "Appears within 48 hours",
        desc: "Skip the line and get your tool featured fast.",
    },
    {
        title: "Highlighted Listing Border",
        desc: "Stand out from the crowd with a premium border.",
    },
    {
        title: "Dofollow Backlinks",
        desc: "Get valuable 'link juice' for your website's SEO.",
    },
    {
        title: "Listed Forever",
        desc: "One-time payment for a permanent listing on our site.",
    },
    {
        title: "Included in AI Launch Embeds",
        desc: "Feature your tool across our partner network.",
    },
    {
        title: "Boosted SEO & Visibility",
        desc: "Leverage our domain authority to rank higher.",
    },
];

const SubmitToolSection: React.FC = () => {
    return (
        <Box sx={{ py: 8, px: { xs: 2, md: 8 }, textAlign: "center" }}>
            <Divider sx={{ mb: 10 }} />
            {/* Heading */}
            <Typography variant="h4" fontWeight={700} gutterBottom>
                Submit a Tool – Here’s What You Get
            </Typography>
            <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 600, mx: "auto", mb: 6 }}
            >
                Your submission includes a comprehensive package to maximize reach and impact.
            </Typography>
            <Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
                {features.map((feature, index) => (
                    <Grid
                        key={index}
                        size={{ xs: 12, sm: 6, md: 4 }} // ✅ new v6 API
                        sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 1,
                        }}
                    >
                        <CheckCircleIcon color="success" sx={{ mt: 0.5 }} />
                        <Box>
                            <Typography fontWeight={600} textAlign="left">
                                {feature.title}
                            </Typography>
                            <Typography color="text.secondary" variant="body2" textAlign="left">
                                {feature.desc}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            {/* Sample Tool Card */}
            <Box display="flex" justifyContent="center">
                <Card
                    sx={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        border: "1px solid #00bfa5",
                        borderRadius: 2,
                        width: { xs: "100%", sm: 400 },
                        p: 2,
                        overflow: "visible",
                    }}
                >
                    {/* HIGHLIGHTED Chip */}
                    <Chip
                        label="HIGHLIGHTED"
                        size="small"
                        color="success"
                        sx={{
                            position: "absolute",
                            top: -12,
                            right: 12,
                            fontWeight: 700,
                            fontSize: 10,
                        }}
                    />

                    <CardMedia
                        component="img"
                        image="/assets/media/images/add.png"
                        alt="Sample Tool"
                        sx={{ width: 50, height: 50, borderRadius: 1, mr: 2 }}
                    />
                    <CardContent sx={{ p: 0, flex: 1 }}>
                        <Typography fontWeight={600} textAlign="left">
                            Sample Tool
                        </Typography>
                        <Box display="flex" alignItems="center" gap={1} mt={0.5} mb={1}>
                            <Rating value={4.9} precision={0.1} size="small" readOnly />
                            <Typography variant="caption" color="text.secondary">
                                Productivity
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary" textAlign="left">
                            This is how your tool will look, catching more eyes and clicks.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Divider sx={{ mb: 10, mt: 10 }} />
        </Box>

    );
};

export default SubmitToolSection;
