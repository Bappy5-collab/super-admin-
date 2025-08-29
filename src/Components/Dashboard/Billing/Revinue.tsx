import React from "react";
import { Card, Typography, Box, Stack } from "@mui/material";

export default function RevenueAnalytics() {
  return (
    <Card sx={{ p: 3, flex: 1 }}>
      <Typography variant="subtitle1" fontWeight={600}>
        Revenue Analytics
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Box
          sx={{
            bgcolor: "#DCFCE7",
            color: "#15803D",
            px: 2,
            py: 1,
            borderRadius: 2,
            fontWeight: 700,
            fontSize: 18,
            mb: 2,
          }}
        >
          Total Revenue (YTD): $34,080
        </Box>

        <Stack spacing={1}>
          <Box
            sx={{
              bgcolor: "#EFF6FF",
              px: 2,
              py: 1,
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>This Month</Typography>
            <Typography fontWeight={600}>$2,840</Typography>
          </Box>

          <Box
            sx={{
              bgcolor: "#EEF2FF",
              px: 2,
              py: 1,
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>Avg. Monthly</Typography>
            <Typography fontWeight={600}>$2,840</Typography>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
}
