import React from "react";
import { Card, CardContent, Typography, Divider, Box, Button, Avatar } from "@mui/material";
import StarRateIcon from '@mui/icons-material/StarRate';
const reviews = [
  { name: "Sarah Chen", text: "Amazing tool! Really helped streamline our workflow.", rating: 5 },
  { name: "Mike Johnson", text: "Good functionality, but could use better documentation.", rating: 5 },
];

const RecentReviews: React.FC = () => (
  <Card sx={{ borderRadius: 3, height: 290 }}>
    <CardContent>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography fontWeight={600}>Recent Reviews</Typography>
        <Button size="small">View All</Button>
      </Box>

      {reviews.map((review, i) => (
        <Box key={i} mb={2}>
          <Box display="flex" alignItems="center" mb={1}>
            <Avatar sx={{ mr: 1 }}>{review.name[0]}</Avatar>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography fontWeight={600}>
                  {review.name}
                </Typography>

                <Box sx={{ display: 'flex', ml: 1 }}>
                  {[...Array(review.rating)].map((_, index) => (
                    <StarRateIcon key={index} sx={{ fontSize: 16, color: '#FACC15' }} />
                  ))}
                </Box>
              </Box>
              <Typography variant="body2" mb={1}>
                {review.text}
              </Typography>
            </Box>
          </Box>
          <Button size="small" sx={{ color: '#00B6D3', textTransform: 'none' }}>Reply</Button>
        </Box>
      ))}
    </CardContent>
  </Card>
);

export default RecentReviews;
