import React from "react";
import { Card, Typography, Box } from "@mui/material";

export default function RevenueAnalytics() {
  return (
    <Card sx={{ p: 3, flex: 1,minHeight: '409px' }}>
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
          <Typography>
            Total Revenue (YTD)
          </Typography>
          <Typography>
            $34,080
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 4,

          }}>
          <Box
            sx={{
              px: 2,
              py: 1,
              width: '100%',
              backgroundColor: "#EFF6FF",
              borderRadius: '8px'

            }}
          >
            <Typography sx={{fontSize:'14px',fontWeight:'400',lineHeight:'100%',color:'#1D4ED8',mb:1}}>This Month</Typography>
            <Typography sx={{fontSize:'20px',fontWeight:'700',lineHeight:'100%',color:'#1E40AF',mb:1}}>$2,840</Typography>
            <Typography sx={{fontSize:'12px',fontWeight:'400',lineHeight:'100%',color:'#16A34A',mb:1}}>+24% vs last month</Typography>
          </Box>

          <Box
            sx={{
              px: 2,
              py: 1,
              width: '100%',
              backgroundColor: "#FAF5FF",
              borderRadius: '8px'

            }}
          >
           <Typography sx={{fontSize:'14px',fontWeight:'400',lineHeight:'100%',color:'#7E22CE',mb:1}}>Avg. Monthly</Typography>
            <Typography sx={{fontSize:'20px',fontWeight:'700',lineHeight:'100%',color:'#6B21A8',mb:1}}>$2,840</Typography>
            <Typography sx={{fontSize:'12px',fontWeight:'400',lineHeight:'100%',color:'#16A34A',mb:1}}>+24% vs last year</Typography>
          </Box>

        </Box>
      </Box>
    </Card>
  );
}
