import React, { ReactElement } from "react";
import { Box, Typography, LinearProgress, Stack } from "@mui/material";

interface Rating {
  stars: number;
  count: number;
}

const ratings: Rating[] = [
  { stars: 5, count: 972 },
  { stars: 4, count: 187 },
  { stars: 3, count: 62 },
  { stars: 2, count: 19 },
  { stars: 1, count: 7 },
];

const total: number = ratings.reduce((acc, r) => acc + r.count, 0);

export default function RatingBreakdown(): ReactElement {
  return (
    <Box sx={{
      p: 2,
      borderRadius: '8px',
      boxShadow: `
          0px 4px 6px 0px rgba(0, 0, 0, 0.1),
          0px 2px 4px 0px rgba(0, 0, 0, 0.05)
        `,
    }}>
      <Typography variant="h6" gutterBottom>
        Rating Breakdown
      </Typography>
      <Stack spacing={1}>
        {ratings.map((r) => {
          const percentage = total > 0 ? (r.count / total) * 100 : 0;
          return (
            <Box key={r.stars} display="flex" alignItems="center" gap={2}>
              <Typography sx={{ minWidth: 20 }}>{r.stars}★</Typography>
              <LinearProgress
                variant="determinate"
                value={percentage}
                sx={{
                  flex: 1,
                  height: 10,
                  borderRadius: 5,
                  bgcolor: "#E5E7EB",
                  "& .MuiLinearProgress-bar": { bgcolor: "#FACC15" },
                }}
              />
              <Typography sx={{ minWidth: 30 }}>{r.count}</Typography>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}
