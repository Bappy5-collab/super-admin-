import React from "react";
import { Card, CardContent, Box, Typography, Divider, Button, List, ListItem, ListItemText } from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EventIcon from '@mui/icons-material/Event';
import ShowChartIcon from '@mui/icons-material/ShowChart';
const PerformanceInsights: React.FC = () => (
  <Card sx={{ borderRadius: 3, height: 290 }}>
    <CardContent>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography sx={{ fontSize: '18px', lineHeight: '28px', fontWeight: '600', color: '#111827' }}>Performance Insights</Typography>
        <Button size="small" sx={{ bgcolor: '#F3F4F6', color: '#000000', p: 1, borderRadius: '8px', textTransform: 'none', }}>Export</Button>
      </Box>

      <List>
        <ListItem component="div">
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            sx={{
              bgcolor: '#F9FAFB',  // set background color
              p: 1,                // optional padding
              borderRadius: 1,     // optional rounded corners
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <HelpOutlineIcon sx={{ fontSize: 20, color: '#22C55E' }} />
              <ListItemText primary="Peak usage time: 2-4 PM EST" />
            </Box>

            <Typography
              sx={{
                bgcolor: '#DCFCE7',
                borderRadius: '5px',
                px: 1,
                py: 0.5,
                display: 'inline-block',
                color: 'green',
                fontWeight: 500,
                fontSize: '14px',
              }}
            >
              +24%
            </Typography>
          </Box>
        </ListItem>
        <ListItem component="div">
          <Box display="flex" justifyContent="space-between" width="100%"
            sx={{
              bgcolor: '#F9FAFB',  // set background color
              p: 1,                // optional padding
              borderRadius: 1,     // optional rounded corners
            }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <EventIcon sx={{ fontSize: 20, color: '#3B82F6' }} />
              <ListItemText primary="Best performming day" />
            </Box>
            <Typography sx={{
              bgcolor: '#DBEAFE',
              borderRadius: '5px',
              px: 1,
              py: 0.5,
              display: 'inline-block',
              color: '#1D4ED8',
              fontWeight: 500,
              fontSize: '14px',
            }}>18% above avg</Typography>
          </Box>
        </ListItem>
        <ListItem component="div">
          <Box display="flex" justifyContent="space-between" width="100%"
            sx={{
              bgcolor: '#F9FAFB',  // set background color
              p: 1,                // optional padding
              borderRadius: 1,     // optional rounded corners
            }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <ShowChartIcon sx={{ fontSize: 20, color: '#A855F7' }} />
              <ListItemText primary="Conversion rate: Triall to Paid" />
            </Box>
            <Typography sx={{
              bgcolor: '#F3E8FF',
              borderRadius: '5px',
              px: 1,
              py: 0.5,
              display: 'inline-block',
              color: '#7E22CE',
              fontWeight: 500,
              fontSize: '14px',
            }}>64%</Typography>
          </Box>
        </ListItem>
      </List>
    </CardContent>
  </Card>
);

export default PerformanceInsights;
