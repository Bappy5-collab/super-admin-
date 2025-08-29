// pages/index.tsx
import React from "react";
import {  Container } from "@mui/material";

import BillingPage from "@/Components/Dashboard/Billing/BillingPage";


const Biling: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <BillingPage/>
    </Container>
  );
};

export default Biling;
