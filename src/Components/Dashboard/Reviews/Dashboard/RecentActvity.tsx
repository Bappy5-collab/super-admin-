import React from "react";
import { Card, CardContent, Typography, Divider, Box } from "@mui/material";

const activities = [
  { text: "New user signed up for trial", time: "2 hours ago", color: "#22C55E" },
  { text: "Payment received: $49.99", time: "5 hours ago", color: "#3B82F6" },
  { text: "New review posted (5 stars)", time: "1 day ago", color: "#F59E0B" },
  { text: "Product featured in newsletter", time: "2 days ago", color: "#EF4444" },
];

const RecentActivity: React.FC = () => (
  <Card sx={{ borderRadius: 3, height: 290, p: 2, display: 'flex', flexDirection: 'column' }}>
    <Typography fontWeight={600}>Recent Activity</Typography>
    <Divider sx={{ my: 2 }} />

    {/* Scrollable content if needed */}
    <Box sx={{ flex: 1, overflowY: 'auto', pr: 1 }}>
      {activities.map((activity, i) => (
        <Box
          key={i}
          mb={2}
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          {/* Colored circle */}
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              bgcolor: activity.color,
              flexShrink: 0,
            }}
          />
          <Box>
            <Typography
              variant="body2"
              sx={{ color: activity.color, fontWeight: 500 }}
            >
              {activity.text}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {activity.time}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  </Card>
);

export default RecentActivity;
