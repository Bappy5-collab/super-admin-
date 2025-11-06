import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Avatar,
  Chip,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";

interface InstructorCardProps {
  instructor: {
    id: string;
    name: string;
    email: string;
    specialization: string;
    courses: number;
    students: number;
    rating: number;
    status: string;
    avatar: string;
    gradient: string;
  };
}

const InstructorCard: React.FC<InstructorCardProps> = ({ instructor }) => {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
        height: "100%",
        background: "linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%)",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0px 12px 32px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <Box
        sx={{
          height: 120,
          background: instructor.gradient,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar
          sx={{
            width: 100,
            height: 100,
            border: "4px solid white",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            position: "absolute",
            bottom: -50,
          }}
          src={instructor.avatar}
          alt={instructor.name}
        />
      </Box>
      <CardContent sx={{ pt: 6, pb: 3, px: 3 }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, fontSize: "18px" }}>
            {instructor.name}
          </Typography>
          <Chip
            label={instructor.status}
            size="small"
            sx={{
              bgcolor: instructor.status === "Active" ? "success.light" : "warning.light",
              color: instructor.status === "Active" ? "success.dark" : "warning.dark",
              fontWeight: 600,
              fontSize: "10px",
              height: "24px",
              mb: 2,
            }}
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <EmailIcon sx={{ fontSize: 16, color: "text.secondary" }} />
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: "12px" }}>
              {instructor.email}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SchoolIcon sx={{ fontSize: 16, color: "text.secondary" }} />
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: "12px" }}>
              {instructor.specialization}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            p: 2,
            bgcolor: "rgba(0, 182, 211, 0.05)",
            borderRadius: "12px",
            mb: 2,
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: "text.primary", fontSize: "18px" }}>
              {instructor.courses}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: "11px" }}>
              Courses
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: "text.primary", fontSize: "18px" }}>
              {instructor.students.toLocaleString()}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: "11px" }}>
              Students
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0.5 }}>
              <StarIcon sx={{ fontSize: 16, color: "#FACC15" }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: "text.primary", fontSize: "18px" }}>
                {instructor.rating}
              </Typography>
            </Box>
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: "11px" }}>
              Rating
            </Typography>
          </Box>
        </Box>

        <Button
          fullWidth
          variant="contained"
          sx={{
            textTransform: "none",
            borderRadius: "10px",
            py: 1.2,
            bgcolor: "primary.main",
            fontWeight: 600,
            fontSize: "13px",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          View Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default InstructorCard;

