// src/pages/PromotionPage.tsx
import React from "react";
import { Container, Box, Stack } from "@mui/material";
import ActivePromotion from "./ActivePromotion";
import PricingPlans from "./PricingPlans";
import PromotionPerformance from "./Performance";
import CallToAction from "./CallToAction";

const PromotePage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Stack spacing={4}>
        <ActivePromotion />
        <PricingPlans />
        <PromotionPerformance />
        <CallToAction />
      </Stack>
    </Container>
  );
};

export default PromotePage;
