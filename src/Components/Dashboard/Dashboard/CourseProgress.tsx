import React from "react";
import { Card, CardContent, Typography, Box, LinearProgress } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CourseProgress: React.FC = () => {
  const courses = [
    { name: "Web Development", progress: 85, students: 245, color: "#667eea" },
    { name: "Data Science", progress: 72, students: 189, color: "#f5576c" },
    { name: "Mobile Development", progress: 90, students: 312, color: "#4facfe" },
    { name: "UI/UX Design", progress: 65, students: 156, color: "#fa709a" },
  ];

  return (
    <Card 
      sx={{ 
        borderRadius: 3, 
        height: "100%",
        background: "linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%)",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.12)",
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Typography 
          sx={{ 
            fontWeight: 700, 
            fontSize: "20px", 
            mb: 3,
            color: "text.primary",
            letterSpacing: "-0.5px"
          }}
        >
          Course Progress
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {courses.map((course, index) => (
            <Box 
              key={index}
              sx={{
                p: 2,
                borderRadius: "12px",
                background: "rgba(255, 255, 255, 0.6)",
                border: "1px solid",
                borderColor: "grey.200",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "rgba(255, 255, 255, 1)",
                  borderColor: course.color,
                  transform: "translateX(4px)",
                  boxShadow: `0px 4px 12px ${course.color}20`,
                },
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.5 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: course.color,
                      boxShadow: `0 0 8px ${course.color}60`,
                    }}
                  />
                  <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "14px" }}>
                    {course.name}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  {course.progress >= 80 && (
                    <CheckCircleIcon sx={{ fontSize: 16, color: "#10B981" }} />
                  )}
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: course.color, 
                      fontWeight: 700,
                      fontSize: "14px"
                    }}
                  >
                    {course.progress}%
                  </Typography>
                </Box>
              </Box>
              <LinearProgress
                variant="determinate"
                value={course.progress}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  bgcolor: "grey.200",
                  "& .MuiLinearProgress-bar": {
                    borderRadius: 5,
                    background: `linear-gradient(90deg, ${course.color} 0%, ${course.color}dd 100%)`,
                    boxShadow: `0 0 8px ${course.color}40`,
                  },
                }}
              />
              <Typography 
                variant="caption" 
                sx={{ 
                  color: "text.secondary", 
                  mt: 1, 
                  display: "block",
                  fontSize: "11px"
                }}
              >
                {course.students.toLocaleString()} students enrolled
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CourseProgress;
