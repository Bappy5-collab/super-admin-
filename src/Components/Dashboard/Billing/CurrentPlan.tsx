import React from "react";
import { Box, Card, Typography, Button, Stack, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

export default function CurrentPlan() {

  const features = [
    "Unlimited products",
    "Advanced analytics",
    "Priority support",
    "Custom branding",
  ];


  return (
    <Card sx={{ p: 3, flex: 1 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography sx={{ fontSize: "18px", fontWeight: "600", lineHeight: "28px", color: "#111827" }}
          >
            Current Plan
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: "400", lineHeight: "24px", color: "#4B5563" }}>
            You&apos;re currently on the Pro plan
          </Typography>

        </Box>
        <Box
          sx={{
            bgcolor: "#DCFCE7",
            color: "#15803D",
            px: 1.5,
            py: 0.5,
            borderRadius: '9999px',
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          Active
        </Box>
      </Stack>

      <Box
        sx={{
          mt: 2,
          bgcolor: "#4F46E50D",
          border: "1px solid #4F46E533",
          borderRadius: 2,
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h6" fontWeight={600}>
              Pro Plan
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Perfect for growing businesses
            </Typography>
          </Box>

          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="h4"
              sx={{ color: "#059669", fontWeight: 700 }}
            >
              $100
            </Typography>
            <Typography variant="body2" color="text.secondary">
              per month
            </Typography>
          </Box>
        </Box>

        {/* ✅ Two-column features */}
        <Grid container spacing={1} sx={{ mt: 1 }}>
          {[
            "Unlimited products",
            "Advanced analytics",
            "Priority support",
            "Custom branding",
          ].map((item, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6 }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <CheckCircleIcon sx={{ fontSize: 16, color: "#059669" }} />
                <Typography variant="body2">{item}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>

        {/* ✅ Full width flex buttons */}
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Button sx={{ flex: 1, bgcolor: '#00B6D3', color: '#FFFFFF', borderRadius: '8px', textTransform: 'none' }}>
            Upgrade Plan
          </Button>
          <Button variant="outlined" sx={{ flex: 1, color: '#374151', borderRadius: '8px', textTransform: 'none', border: '1px solid #D1D5DB' }}>
            Change Plan
          </Button>
        </Stack>


      </Box>
      {/*  Billing info note */}
      <Box
        sx={{
          mt: 2,
          bgcolor: "#FEFCE8",
          color: "#854D0E",
          px: 2,
          py: 2,
          borderRadius: 2,
          fontSize: 13,
          fontWeight: 500,
          border: '1px solid #FEF08A'
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <WarningAmberIcon sx={{ fontSize: 16 }} />
          <Typography sx={{ fontSize: '14px', fontWeight: "400", lineHeight: '20px' }}>
            Your next billing date is{" "}
            <Typography
              component="span"
              variant="body2"
              sx={{ fontWeight: "bold" }}
            >
              January 15, 2025
            </Typography>
          </Typography>
        </Stack>
      </Box>
    </Card>
  );
}
