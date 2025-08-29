import React from "react";
import { Card, Typography, Stack, Box, Button } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaidIcon from "@mui/icons-material/Paid";
import StorageIcon from "@mui/icons-material/Storage";

export default function RecentTransactions() {
  const transactions = [
    { title: "Pro Plan Subscription", date: "Dec 15, 2024", amount: "$100.00", type: "subscription" },
    { title: "Transaction Fees", date: "Dec 10, 2024", amount: "$85.20", type: "fees" },
    { title: "Additional Storage", date: "Dec 5, 2024", amount: "$15.00", type: "storage" },
    { title: "Pro Plan Subscription", date: "Nov 15, 2024", amount: "$100.00", type: "subscription" },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "subscription":
        return (
          <Box
            sx={{
              bgcolor: "#DBEAFE", // light blue
              borderRadius: "50%",
              p: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CreditCardIcon sx={{ fontSize: 18, color: "#1D4ED8" }} /> {/* blue */}
          </Box>
        );
      case "fees":
        return (
          <Box
            sx={{
              bgcolor: "#FEE2E2", // light red
              borderRadius: "50%",
              p: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PaidIcon sx={{ fontSize: 18, color: "#DC2626" }} /> {/* red */}
          </Box>
        );
      case "storage":
        return (
          <Box
            sx={{
              bgcolor: "#DCFCE7", // light green
              borderRadius: "50%",
              p: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <StorageIcon sx={{ fontSize: 18, color: "#15803D" }} /> {/* green */}
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Card sx={{ p: 3, flex: 1 }}>
      {/* Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle1" fontWeight={600}>
          Recent Transactions
        </Typography>
        <Button size="small">View All</Button>
      </Stack>

      {/* Transactions List */}
      <Stack spacing={2} sx={{ mt: 2 }}>
        {transactions.map((t, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #F3F4F6",
              p: 1.5,
              borderRadius: "12px",
            }}
          >
            {/* Left side: icon + text */}
            <Stack direction="row" spacing={1.2} alignItems="center">
              {getIcon(t.type)}
              <Stack spacing={0}>
                <Typography variant="body2" fontWeight={600}>
                  {t.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {t.date}
                </Typography>
              </Stack>
            </Stack>

            {/* Right side: amount */}
            <Typography variant="body2" fontWeight={600}>
              {t.amount}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Card>
  );
}
