import * as React from "react";
import { Box, Grid } from "@mui/material";
import CurrentPlan from "./CurrentPlan";
import ThisMonth from "./ThisMonth";
import PaymentMethods from "./PaymentMethods";

import BillingSettings from "./BillingSettings";
import RecentTransactions from "./RecentTransations";
import RevenueAnalytics from "./Revinue";


export default function BillingDashboard() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#F9FAFB", minHeight: "100vh", p: 2 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {/* Top Row */}
        <Grid size={{ xs: 4, sm: 4, md: 8 }}>
          <CurrentPlan />
        </Grid>
        <Grid size={{ xs: 4, sm: 4, md: 4 }}>
          <ThisMonth />
        </Grid>

        {/* Middle Row */}
        <Grid size={{ xs: 4, sm: 4, md: 6 }}>
          <PaymentMethods />
        </Grid>
        <Grid size={{ xs: 4, sm: 4, md: 6 }}>
          <RecentTransactions />
        </Grid>

        {/* Bottom Row */}
        <Grid size={{ xs: 4, sm: 4, md: 6 }}>
          <BillingSettings />
        </Grid>
        <Grid size={{ xs: 4, sm: 4, md: 6 }}>
          <RevenueAnalytics />
        </Grid>
      </Grid>
    </Box>
  );
}
