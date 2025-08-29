import React from "react";
import { Card, CardContent, Typography, Divider, Box } from "@mui/material";

const UserBreakdown: React.FC = () => (
  <Card sx={{ borderRadius: 3, height: 290 }}>
    <CardContent>
      <Typography fontWeight={600}>User Breakdown</Typography>
      <Divider sx={{ my: 2 }} />
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* Circle icon */}
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              bgcolor: '#00B6D3', // circle color
            }}
          />
          <Typography sx={{fontSize:'16px',lineHeight:"24px",fontWeight:'400',color:'#374151'}}>Paid Users</Typography>
        </Box>
        <Typography fontWeight={600}>1,240 (68%)</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* Circle icon */}
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              bgcolor: '#00B6D3', // circle color
            }}
          />
          <Typography sx={{fontSize:'16px',lineHeight:"24px",fontWeight:'400',color:'#374151'}}>Trials Users</Typography>
        </Box>
        <Typography fontWeight={600}>580 (32%)</Typography>
      </Box>
    </CardContent>
  </Card>
);

export default UserBreakdown;
