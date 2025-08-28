// src/components/PricingPlans.tsx
import React from "react";
import {
    Grid,
    Paper,
    Typography,
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Box,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import StarIcon from "@mui/icons-material/Star";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
const plans = [
    {
        title: "Basic Boost",
        price: "$19",
        duration: "/month",
        features: ["Higher search ranking", "Highlighted listing badge", "Priority in category"],
        active: true,
        buttonText: "Currently Active",
        buttonVariant: "outlined",
        buttonColor: "inherit",
        icon: <ArrowUpwardIcon />,
        iconBg: "#D1FAE5", // green
        iconColor: "#059669",
    },
    {
        title: "Featured Tool",
        price: "$49",
        duration: "/week",
        features: [
            "Homepage featured spot",
            "Priority category placement",
            "Social media mention",
            "Featured badge",
        ],
        active: false,
        buttonText: "Promote Now",
        buttonVariant: "contained",
        buttonColor: "primary",
        icon: <StarIcon />,
        iconBg: "#DBEAFE", // blue
        iconColor: "#2563EB",
    },
    {
        title: "Ultimate Exposure",
        price: "$99",
        duration: "/month",
        features: [
            "Homepage banner",
            "Newsletter spotlight",
            "Sponsored blog post",
            "All Basic & Featured benefits",
        ],
        active: false,
        buttonText: "Promote Now",
        buttonVariant: "contained",
        buttonColor: "warning",
        icon: <RocketLaunchIcon />,
        iconBg: "#FEF3C7", // yellow
        iconColor: "#D97706",
    },
];
const PricingPlans: React.FC = () => {
    return (
        <Grid container spacing={3}>
            {plans.map((plan, index) => (
                <Grid
                    key={index}
                    size={{ xs: 12, sm: 6, md: 4 }}
                >
                    <Paper
                        elevation={plan.title === "Featured Tool" ? 6 : 2}
                        sx={{
                            p: 3,
                            textAlign: "center",
                            height: "440px",
                            borderRadius: 3,
                            border:
                                plan.title === "Featured Tool"
                                    ? "2px solid #3f51b5"
                                    : "1px solid #eee",
                        }}
                    >
                        <Box
                            sx={{
                                width: 60,
                                height: 60,
                                borderRadius: "50%",
                                bgcolor: plan.iconBg,
                                color: plan.iconColor,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mx: "auto",
                                mb: 2,
                                fontSize: 30,
                            }}
                        >
                            {plan.icon}
                        </Box>
                        <Typography variant="h6" gutterBottom>
                            {plan.title}
                        </Typography>

                        <List dense sx={{ textAlign: "left" }}>
                            {plan.features.map((feature, i) => (
                                <ListItem key={i}>
                                    <ListItemIcon sx={{ minWidth: 32 }}>
                                        <CheckIcon color="success" fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary={feature} />
                                </ListItem>
                            ))}
                        </List>

                        <Typography variant="h4" color="text.primary">
                            {plan.price}
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="text.secondary"
                            >
                                {plan.duration}
                            </Typography>
                        </Typography>
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                textTransform:'none',
                                mt: 2,
                                height: 50, 
                                borderRadius: 2, 
                                bgcolor:
                                    plan.title === "Basic Boost"
                                        ? "#F3F4F6"
                                        : plan.title === "Featured Tool"
                                            ? "#4F46E5"
                                            : "#F97316",
                                color:
                                    plan.title === "Basic Boost"
                                        ? "#374151"
                                        : "#FFFFFF",
                                fontWeight: 600,
                                "&:hover": {
                                    bgcolor:
                                        plan.title === "Basic Boost"
                                            ? "#E5E7EB"
                                            : plan.title === "Featured Tool"
                                                ? "#4338CA"
                                                : "#EA580C",
                                },
                            }}
                            disabled={plan.active}
                        >
                            {plan.buttonText}
                        </Button>


                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};

export default PricingPlans;
