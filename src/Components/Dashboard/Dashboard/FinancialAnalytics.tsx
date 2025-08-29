import React from "react";
import { Card, CardContent, Typography, Divider, Box } from "@mui/material";

const FinancialAnalytics: React.FC = () => (
  <Card sx={{ borderRadius: 3, height: 290 }}>
    <CardContent>
      <Typography fontWeight={600}>Financial Analytics</Typography>


      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: '#F9FAFB',  // background color
          p: 2,                // optional padding
          borderRadius: 2,     // optional rounded corners
        }}
      >
        <Box>
          <Typography
            sx={{
              color: '#4B5563',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '400',
            }}
          >
            This Month
          </Typography>
          <Typography
            sx={{
              color: '#111827',
              fontSize: '20px',
              lineHeight: '28px',
              fontWeight: '700',
            }}
          >
            $2,840
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption" color="green">
            +24% <br /> vs last month
          </Typography>
        </Box>
      </Box>

      <Box mt={2}>
        <Box display="flex" justifyContent="space-between">
          <Typography>Transaction Fee (3%)</Typography>
          <Typography >- $85.20</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>Platform Fee</Typography>
          <Typography >- $100.00</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box display="flex" justifyContent="space-between" fontWeight={600}>
          <Typography sx={{ fontSize: '14px', lineHeight: '20px', fontWeight: '600', color: '#111827' }}>Net Revenue</Typography>
          <Typography sx={{ fontSize: '14px', lineHeight: '20px', fontWeight: '600', color: '#111827' }}>$2,654.80</Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export default FinancialAnalytics;
