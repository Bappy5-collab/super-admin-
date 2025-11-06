import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Chip,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import SchoolIcon from "@mui/icons-material/School";

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    instructor: string;
    students: number;
    duration: string;
    rating: number;
    price: string;
    category: string;
    status: string;
    image: string;
    gradient: string;
  };
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
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
          height: 180,
          background: course.gradient,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SchoolIcon sx={{ fontSize: 64, color: "rgba(255, 255, 255, 0.3)" }} />
        <Chip
          label={course.status}
          size="small"
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            bgcolor: course.status === "Active" ? "success.light" : "warning.light",
            color: course.status === "Active" ? "success.dark" : "warning.dark",
            fontWeight: 600,
            fontSize: "10px",
            height: "24px",
          }}
        />
        <Chip
          label={course.category}
          size="small"
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            bgcolor: "rgba(255, 255, 255, 0.2)",
            color: "white",
            fontWeight: 600,
            fontSize: "10px",
            height: "24px",
            backdropFilter: "blur(10px)",
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", p: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: "18px", lineHeight: 1.3 }}>
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontSize: "13px" }}>
          Instructor: {course.instructor}
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: "wrap" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <PeopleIcon sx={{ fontSize: 18, color: "text.secondary" }} />
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: "12px" }}>
              {course.students}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <AccessTimeIcon sx={{ fontSize: 18, color: "text.secondary" }} />
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: "12px" }}>
              {course.duration}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <StarIcon sx={{ fontSize: 18, color: "#FACC15" }} />
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: "12px" }}>
              {course.rating}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: "auto", pt: 2, borderTop: "1px solid", borderColor: "grey.200" }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: "primary.main", fontSize: "20px" }}>
            {course.price}
          </Typography>
          <Button
            size="small"
            variant="contained"
            sx={{
              textTransform: "none",
              borderRadius: "8px",
              px: 2,
              py: 0.5,
              bgcolor: "primary.main",
              fontWeight: 600,
              fontSize: "12px",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            View Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CourseCard;

