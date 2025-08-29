import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ReviewsIcon from "@mui/icons-material/RateReview";
import ReplyIcon from "@mui/icons-material/Reply";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const stats = [
  { label: "Average Rating", value: "4.8", icon: <StarIcon sx={{ color: "#FACC15" }} />, bgColor: "#FEF3C7" },
  { label: "Total Reviews", value: "1,247", icon: <ReviewsIcon sx={{ color: "#3B82F6" }} />, bgColor: "#DBEAFE" },
  { label: "Response Rate", value: "87%", icon: <ReplyIcon sx={{ color: "#22C55E" }} />, bgColor: "#DCFCE7" },
  { label: "This Month", value: "89", icon: <CalendarMonthIcon sx={{ color: "#8B5CF6" }} />, bgColor: "#EDE9FE" },
];

export default function StatsSection() {
  return (
    <Grid container spacing={3}>
      {stats.map((stat, i) => (
        <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper
            sx={{
              p: 2,
              borderRadius: "8px",
              boxShadow: "0px 4px 6px 4px rgba(0, 0, 0, 0.1)", // x=0, y=4, blur=6, spread=6, 10% opacity
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {/* Text content */}
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    color: "#4B5563",
                  }}
                >
                  {stat.label}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: 700,
                    lineHeight: "36px",
                    color: "#111827",
                  }}
                >
                  {stat.value}
                </Typography>
              </Box>

              {/* Icon with colored background */}
              <Box
                sx={{
                  bgcolor: stat.bgColor,
                  borderRadius: "8px",
                  p: 1.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                }}
              >
                {stat.icon}
              </Box>
            </Box>
          </Paper>

        </Grid>
      ))}
    </Grid>
  );
}
