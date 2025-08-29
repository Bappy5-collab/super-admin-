import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, isPositive, icon }) => {
  return (
    <Paper elevation={1} sx={{ p: 2, borderRadius: 3 }}>
      <Box display="flex" alignItems="center" gap={2}>
        <Box>{icon}</Box>
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
          icon={<span>💵</span>}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatCard
          title="Monthly Revenue"
          value="$2,890"
          change="+12.5% vs last month"
          isPositive={true}
          icon={<span>📊</span>}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatCard
          title="Avg. Revenue/User"
          value="$24.50"
          change="-3.2% vs last month"
          isPositive={false}
          icon={<span>👤</span>}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatCard
          title="Total Transactions"
          value="524"
          change="+24.1% vs last month"
          isPositive={true}
          icon={<span>🧾</span>}
        />
      </Grid>
    </Grid>
  );
};

export default StatsCards;
