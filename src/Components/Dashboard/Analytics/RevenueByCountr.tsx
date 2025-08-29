import React from "react";
import { Paper, Typography, List, ListItem, ListItemText } from "@mui/material";

const RevenueByCountry = () => {
  const countries = [
    { name: "United States", value: "$5,240", percent: "40.8%" },
    { name: "United Kingdom", value: "$2,180", percent: "17.0%" },
    { name: "Canada", value: "$1,890", percent: "14.7%" },
    { name: "Germany", value: "$1,420", percent: "11.1%" },
   
  ];

  return (
    <Paper sx={{ p: 2, borderRadius: 3,height:'384px' }}>
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        Revenue by Country
      </Typography>
      <List>
        {countries.map((country, index) => (
          <ListItem key={index} disableGutters>
            <ListItemText
              primary={country.name}
              secondary={`${country.value} (${country.percent})`}
              primaryTypographyProps={{ fontWeight: 500 }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default RevenueByCountry;
