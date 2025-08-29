import React from "react";
import { Paper, Typography, List, ListItem, Box } from "@mui/material";
import ReactCountryFlag from "react-country-flag";

const RevenueByCountry = () => {
  const countries = [
    { name: "United States", value: "$5,240", percent: "40.8%", code: "US" },
    { name: "United Kingdom", value: "$2,180", percent: "17.0%", code: "GB" },
    { name: "Canada", value: "$1,890", percent: "14.7%", code: "CA" },
    { name: "Germany", value: "$1,420", percent: "11.1%", code: "DE" },
  ];

  return (
    <Paper
      sx={{
        p: 2,
        borderRadius: 3,
        height: "384px",
        bgcolor: "#F9FAFB", // ✅ background
      }}
    >
      <Typography sx={{ fontWeight: 600, fontSize: "18px", mb: 3 }}>
        Revenue by Country
      </Typography>
      <List>
        {countries.map((country, index) => (
          <ListItem
            key={index}
            disableGutters
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              py: 1.2,
            }}
          >
            {/* Flag + Country */}
            <Box display="flex" alignItems="center" gap={1.5}>
              <ReactCountryFlag
                countryCode={country.code}
                svg
                style={{
                  width: "28px",
                  height: "20px",
                  borderRadius: "4px",
                }}
              />
              <Typography
                variant="body1"
                sx={{ fontWeight: 500, color: "text.primary" }}
              >
                {country.name}
              </Typography>
            </Box>

            {/* Value + Percent */}
            <Box textAlign="right">
              <Typography
                variant="body1"
                sx={{ fontWeight: 600, color: "text.primary" }}
              >
                {country.value}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {country.percent}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default RevenueByCountry;
