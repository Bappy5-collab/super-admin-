import React from "react";
import { Grid, Container } from "@mui/material";
import StatsCards from "./Statscards";
import RevenueBreakdown from "./RevenueBreakdown";
import RevenueByCountry from "./RevenueByCountr";
import RecentTransactions from "./RecentTransactions";


const AnalyticPage = () => {
    return (
        <Container sx={{ py: 3 }}>
            <StatsCards />
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <RevenueBreakdown />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <RevenueByCountry />
                </Grid>
            </Grid>
            <Grid container sx={{ mt: 2 }}>
                <Grid size={12}>
                    <RecentTransactions />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AnalyticPage;
