import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Chip,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SchoolIcon from "@mui/icons-material/School";
import { useRouter } from "next/router";

const RecentCourses: React.FC = () => {
  const router = useRouter();
  const courses = [
    {
      id: "CRS-001",
      title: "Web Development Bootcamp",
      instructor: "John Smith",
      students: 245,
      status: "Active",
      color: "#667eea",
    },
    {
      id: "CRS-002",
      title: "Data Science Masterclass",
      instructor: "Jane Doe",
      students: 189,
      status: "Active",
      color: "#f5576c",
    },
    {
      id: "CRS-003",
      title: "Mobile App Development",
      instructor: "Mike Chen",
      students: 312,
      status: "Active",
      color: "#4facfe",
    },
    {
      id: "CRS-004",
      title: "UI/UX Design Fundamentals",
      instructor: "Emma Rodríguez",
      students: 156,
      status: "Draft",
      color: "#fa709a",
    },
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
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <Typography sx={{ fontWeight: 700, fontSize: "20px", color: "text.primary", letterSpacing: "-0.5px" }}>
            Recent Courses
          </Typography>
          <Button
            size="small"
            endIcon={<ArrowForwardIcon />}
            onClick={() => router.push("/all-course")}
            sx={{
              textTransform: "none",
              color: "primary.main",
              fontWeight: 600,
              borderRadius: "8px",
              px: 2,
              py: 0.5,
              "&:hover": {
                background: "rgba(0, 182, 211, 0.1)",
              },
            }}
          >
            View All
          </Button>
        </Box>
        <List sx={{ p: 0 }}>
          {courses.map((course, index) => (
            <ListItem
              key={index}
              sx={{
                background: "rgba(255, 255, 255, 0.6)",
                border: "1px solid",
                borderColor: "grey.200",
                borderRadius: "12px",
                mb: 1.5,
                px: 2.5,
                py: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "rgba(255, 255, 255, 1)",
                  borderColor: course.color,
                  transform: "translateX(4px)",
                  boxShadow: `0px 4px 12px ${course.color}20`,
                },
              }}
            >
              <ListItemAvatar>
                <Avatar 
                  sx={{ 
                    bgcolor: course.color,
                    width: 48,
                    height: 48,
                    boxShadow: `0 4px 12px ${course.color}40`,
                  }}
                >
                  <SchoolIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box component="div" sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
                    <Typography component="span" variant="body1" sx={{ fontWeight: 600, fontSize: "15px" }}>
                      {course.title}
                    </Typography>
                    <Chip
                      label={course.status}
                      size="small"
                      sx={{
                        bgcolor: course.status === "Active" ? "success.light" : "warning.light",
                        color: course.status === "Active" ? "success.dark" : "warning.dark",
                        fontWeight: 600,
                        fontSize: "10px",
                        height: "20px",
                        borderRadius: "6px",
                      }}
                    />
                  </Box>
                }
                secondaryTypographyProps={{
                  component: "div",
                }}
                secondary={
                  <>
                    <Typography component="span" variant="body2" sx={{ color: "text.secondary", fontSize: "13px", display: "block", mb: 0.5 }}>
                      Instructor: {course.instructor}
                    </Typography>
                    <Typography component="span" variant="body2" sx={{ color: "text.secondary", fontSize: "13px", display: "block" }}>
                      {course.students.toLocaleString()} students enrolled
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default RecentCourses;
