import React from "react";
import { Paper, Typography, List, ListItem, Box } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const RevenueBreakdown = () => {
    const items = [
        { label: "Premium Subscriptions", value: "$8,420", percent: "65.5%", color: "#22C55E" },
        { label: "One-time Purchases", value: "$3,127", percent: "24.3%", color: "#3B82F6" },
        { label: "API Credits", value: "$1,300", percent: "10.1%", color: "#A855F7" },
    ];

    return (
        <Paper sx={{ p: 2, borderRadius: 3, height: "384px", }}>
            <Typography sx={{ fontWeight: '600', fontSize: '18px', lineHeight: "100%", mb: 5,mt:'6px'}}>
                Revenue Breakdown
            </Typography>
            <List>
                {items.map((item, index) => (
                    <ListItem
                        key={index}
                        disableGutters
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            py: 1,
                            bgcolor: "#F9FAFB",
                            mb: 3
                        }}
                    >
                        {/* Circle + Label */}
                        <Box display="flex" alignItems="center" gap={1.5}>
                            <FiberManualRecordIcon sx={{ color: item.color, fontSize: 22 }} /> {/* bigger circle */}
                            <Typography variant="body1" fontWeight={500}>
                                {item.label}
                            </Typography>
                        </Box>

                        {/* Value + Percent */}
                        <Box textAlign="right" sx={{}}>
                            <Typography variant="body1" fontWeight={600}>
                                {item.value}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.percent}
                            </Typography>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default RevenueBreakdown;
