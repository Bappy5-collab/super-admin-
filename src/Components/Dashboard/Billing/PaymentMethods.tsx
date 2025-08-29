import React from "react";
import { Box, Card, Typography, Stack, Button, IconButton } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AddIcon from "@mui/icons-material/Add";
import LockIcon from "@mui/icons-material/Lock";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function PaymentMethods() {
  return (
    <Card sx={{ p: 3, flex: 1, minHeight: '405px' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle1" fontWeight={600}>
          Payment Methods
        </Typography>
        <Button startIcon={<AddIcon />} size="small">
          Add New
        </Button>
      </Stack>

      <Stack spacing={2} sx={{ mt: 2 }}>
        <Box
          sx={{
            border: "1px solid #E5E7EB",
            p: 2,
            borderRadius: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            {/* Left side: Card icon + number + expiry */}
            <Stack direction="row" spacing={1} alignItems="center">
              <CreditCardIcon />
              <Stack spacing={0}>
                <Typography>•••• •••• •••• 4242</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: 12 }}>
                  Expires 12/26
                </Typography>
              </Stack>
            </Stack>

            {/* Right side: Primary badge + menu icon */}
            <Stack direction="row" spacing={1} alignItems="center">
              <Box
                sx={{
                  bgcolor: "#DCFCE7",
                  color: "#15803D",
                  px: 1,
                  borderRadius: 1,
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                Primary
              </Box>
              <IconButton size="small">
                <MoreVertIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>

        </Box>

        <Box
          sx={{
            border: "1px solid #E5E7EB",
            p: 2,
            borderRadius: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left side: Card icon + number + expiry */}
          <Stack direction="row" spacing={1} alignItems="center">
            <CreditCardIcon sx={{ color: "red" }} />
            <Stack spacing={0}>
              <Typography>•••• •••• •••• 8888</Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: 12 }}
              >
                Expires 08/27
              </Typography>
            </Stack>
          </Stack>

          {/* Right side: More options icon */}
          <IconButton size="small">
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </Box>

        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: "#EFF6FF",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Left side: Icon */}
          <LockIcon sx={{ fontSize: 24, color: "text.secondary", mr: 1 }} />

          {/* Right side: Texts */}
          <Stack spacing={0.3}>
            <Typography
              sx={{ fontSize: 14, fontWeight: 600, color: "#1E40AF" }}
            >
              Secure Payments
            </Typography>
            <Typography sx={{ fontSize: 13, color: "#2563EB" }}>
              Your payment information is encrypted and secure
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
}
