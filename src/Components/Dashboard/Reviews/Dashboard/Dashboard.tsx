import React from "react";
import { Box, Grid } from "@mui/material";

import UserBreakdown from "./UserBreakdown";

import FinancialAnalytics from "./FinancialAnalytics";
import StatsSection from "./StatusSection";

import RecentReviews from "./RecentViews";
import ProductManagement from "./ProductManagment";
import RecentActivity from "./RecentActvity";
import PerformanceInsights from "./PerformanceInsight";


const DashboardPage: React.FC = () => {
  return (
    <Box sx={{ p: 3, bgcolor: "#f8f9fb", minHeight: "100vh" }}>
      {/* Stats */}
      <StatsSection />

      {/* Main Dashboard Content */}
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid size={{ xs: 4, md: 6 }}>
          <PerformanceInsights />
        </Grid>
        <Grid size={{ xs: 4, md: 6 }}>
          <UserBreakdown />
        </Grid>
        <Grid size={{ xs: 4, md: 6 }}>
          <RecentReviews />
        </Grid>
        <Grid size={{ xs: 4, md: 6 }}>
          <FinancialAnalytics />
        </Grid>
        <Grid size={{ xs: 4, md: 6 }}>
          <ProductManagement />
        </Grid>
        <Grid size={{ xs: 4, md: 6 }}>
          <RecentActivity />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
