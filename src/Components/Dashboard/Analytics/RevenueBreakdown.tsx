import React from "react";
import { Paper, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const RevenueBreakdown = () => {
  const items = [
    { label: "Premium Subscriptions", value: "$8,420", percent: "65.5%", color: "success.main" },
    { label: "One-time Purchases", value: "$3,127", percent: "24.3%", color: "primary.main" },
    { label: "API Credits", value: "$1,300", percent: "10.1%", color: "secondary.main" },
  ];

  return (
    <Paper sx={{ p: 2, borderRadius: 3,height:'384px' }}>
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        Revenue Breakdown
      </Typography>
      <List>
        {items.map((item, index) => (
          <ListItem key={index} disableGutters>
            <ListItemIcon>
              <FiberManualRecordIcon sx={{ color: item.color, fontSize: 14 }} />
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              secondary={`${item.value} (${item.percent})`}
              primaryTypographyProps={{ fontWeight: 500 }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default RevenueBreakdown;
