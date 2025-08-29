import React from "react";
import { Paper, Typography, Box, Grid } from "@mui/material";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"; // Total Revenue
import BarChartIcon from "@mui/icons-material/BarChart"; // Monthly Revenue
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"; // Avg. Revenue/User
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong"; // Total Transactions

interface StatCardProps {
    title: string;
    value: string;
    change: string;
    isPositive: boolean;
    icon: React.ReactNode;
    iconBg: string;
}

const StatCard: React.FC<StatCardProps> = ({
    title,
    value,
    change,
    isPositive,
    icon,
    iconBg,
}) => {
    return (
        <Paper elevation={1} sx={{
            p: 2, borderRadius: 3, mb: 3,
            boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.1)",
        }}>
            <Box display="flex" alignItems="center" gap={2}>
                <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                        {title}
                    </Typography>
                    <Typography variant="h5" fontWeight="bold">
                        {value}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            color: isPositive ? "success.main" : "error.main",
                        }}
                    >
                        {isPositive ? (
                            <ArrowUpwardIcon fontSize="small" />
                        ) : (
                            <ArrowDownwardIcon fontSize="small" />
                        )}
                        {change}
                    </Typography>
                </Box>
                {/* Icon with bg */}
                <Box
                    sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "12px",
                        bgcolor: iconBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 28,
                    }}
                >
                    {icon}
                </Box>
            </Box>
        </Paper>
    );
};

const StatsCards = () => {
    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <StatCard
                    title="Total Revenue"
                    value="$12,847"
                    change="+18.2% vs last month"
                    isPositive={true}
                    icon={<AttachMoneyIcon sx={{ color: "#16A34A" }} />}
                    iconBg="#DCFCE7"
                />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <StatCard
                    title="Monthly Revenue"
                    value="$2,890"
                    change="+12.5% vs last month"
                    isPositive={true}
                    icon={<BarChartIcon sx={{ color: "#2563EB" }} />}
                    iconBg="#DBEAFE"
                />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <StatCard
                    title="Avg. Revenue/User"
                    value="$24.50"
                    change="-3.2% vs last month"
                    isPositive={false}
                    icon={<HelpOutlineIcon sx={{ color: "#D97706" }} />}
                    iconBg="#FEF3C7"
                />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <StatCard
                    title="Total Transactions"
                    value="524"
                    change="+24.1% vs last month"
                    isPositive={true}
                    icon={<ReceiptLongIcon sx={{ color: "#4F46E5" }} />}
                    iconBg="#E0E7FF"
                />
            </Grid>
        </Grid>
    );
};

export default StatsCards;
