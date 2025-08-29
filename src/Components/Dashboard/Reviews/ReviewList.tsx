import React from "react";
import {
  Avatar,
  Box,
  Typography,
  Paper,
  Stack,
  Chip,
  IconButton,
  Divider,
} from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";

interface ReviewCardProps {
  name: string;
  avatar: string;
  rating: number;
  time: string;
  comment: string;
  helpful: number;
  reply?: {
    name: string;
    role?: string;
    text: string;
    time: string;
  };
  status?: "Replied" | "Needs Reply";
}

function ReviewCard({
  name,
  avatar,
  rating,
  time,
  comment,
  helpful,
  reply,
  status,
}: ReviewCardProps) {
  return (
    <Box sx={{ mb: 3 }}>
      <Stack direction="row" spacing={2}>
        <Avatar src={avatar} alt={name} />
        <Box flex={1}>
          <Box display="flex" alignItems="center" gap={1} mb={0.5}>
            <Typography fontWeight={600}>{name}</Typography>


          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

            <Box display="flex" alignItems="center" >
              {/* Stars */}
              <Typography>{"⭐".repeat(rating)}</Typography>
              <Typography variant="body2" color="text.secondary">
                {time}
              </Typography>
            </Box>
            <Box>
              {status && (
                <Chip
                  label={status}
                  size="small"
                  color={status === "Replied" ? "success" : "error"}
                />
              )}
              <IconButton size="small">
                <FlagOutlinedIcon fontSize="small" />
              </IconButton>

            </Box>
          </Box>

          {/* Comment */}
          <Typography sx={{ my: 1 }}>{comment}</Typography>

          {/* Actions */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography
              variant="body2"
              sx={{ cursor: "pointer", color: "primary.main" }}
            >
              Reply

            </Typography>
            <Box display="flex" alignItems="center" gap={0.5}>
              <ThumbUpAltOutlinedIcon fontSize="small" />
              <Typography variant="body2">Helpful ({helpful})</Typography>
            </Box>

          </Stack>

          {/* Reply Section */}
          {reply && (
            <Paper
              sx={{
                p: 2,
                mt: 1,
                bgcolor: "#F9FAFB",
                borderRadius: 2,
              }}
            >
              <Typography variant="body2">
                <strong>{reply.name}</strong>{" "}
                {reply.role && (
                  <Chip
                    label={reply.role}
                    size="small"
                    color="primary"
                    sx={{ ml: 1 }}
                  />
                )}
                <span style={{ color: "#6B7280" }}> {reply.time}</span>
              </Typography>
              <Typography variant="body2" mt={1}>
                {reply.text}
              </Typography>
            </Paper>
          )}
        </Box>
      </Stack>
      <Divider sx={{ border: '1px solid #E5E7EB', mt: 3 }} />
    </Box>
  );
}

const reviews = [
  {
    name: "Sarah Johnson",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    time: "2 days ago",
    comment:
      "Absolutely amazing tool! Perfect AI Writer has transformed how I create content for my marketing campaigns. The quality is outstanding and it saves me hours of work every week.",
    helpful: 23,
  },
  {
    name: "Mike Chen",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 4,
    time: "5 days ago",
    comment:
      "Great tool overall! The AI generates high-quality content, though I sometimes need to make minor adjustments. The interface is intuitive and the pricing is fair.",
    helpful: 12,
    status: "Replied" as const,
    reply: {
      name: "John Doe",
      role: "Developer",
      text: "Thanks for the feedback, Mike! We’re constantly improving our AI models. Feel free to reach out if you need any specific adjustments or have suggestions!",
      time: "3 days ago",
    },
  },
  {
    name: "Emma Rodriguez",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    time: "1 week ago",
    comment:
      "This tool has been a game-changer for my content marketing agency. The quality is consistently high and my clients love the results. Highly recommend to anyone in content creation!",
    helpful: 34,
    status: "Needs Reply" as const,
  },
  {
    name: "David Kumar",
    avatar: "https://i.pravatar.cc/150?img=4",
    rating: 4,
    time: "1 week ago",
    comment:
      "Good tool but could use some improvements in technical content generation. Works great for marketing copy but struggles with more technical documentation.",
    helpful: 9,
  },
];

export default function ReviewList() {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 2,
        bgcolor: "#fff",
        boxShadow: `
          0px 4px 6px 0px rgba(0, 0, 0, 0.1),
          0px 2px 4px 0px rgba(0, 0, 0, 0.05)
        `,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Recent Reviews
      </Typography>

      <Box>
        {reviews.map((r, i) => (
          <ReviewCard key={i} {...r} />
        ))}
      </Box>
    </Paper>
  );
}
