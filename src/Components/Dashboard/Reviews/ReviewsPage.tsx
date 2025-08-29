import React from "react";
import { Container, Grid } from "@mui/material";
import StatsSection from "./StatsSection";
import RatingBreakdown from "./RatingBreakdown";
import ReviewList from "./ReviewList";




export default function ReviewsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12 }}>
          <StatsSection />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <RatingBreakdown />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <ReviewList />
        </Grid>
      </Grid>
    </Container>
  );
}
