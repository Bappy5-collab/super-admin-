import React from "react";
import {
  Typography,
  Box,
  Button,
  TextField,
  InputAdornment,
  Card,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import CourseCard from "./CourseCard";

const AllCourse: React.FC = () => {
  const courses = [
    {
      id: "CRS-001",
      title: "Web Development Bootcamp",
      instructor: "John Smith",
      students: 245,
      duration: "12 weeks",
      rating: 4.8,
      price: "$299",
      category: "Development",
      status: "Active",
      image: "/assets/images/customer/mike.jpg",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      id: "CRS-002",
      title: "Data Science Masterclass",
      instructor: "Jane Doe",
      students: 189,
      duration: "16 weeks",
      rating: 4.9,
      price: "$399",
      category: "Data Science",
      status: "Active",
      image: "/assets/images/customer/sara.jpg",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      id: "CRS-003",
      title: "Mobile App Development",
      instructor: "Mike Chen",
      students: 312,
      duration: "10 weeks",
      rating: 4.7,
      price: "$349",
      category: "Mobile",
      status: "Active",
      image: "/assets/images/customer/emma.jpg",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      id: "CRS-004",
      title: "UI/UX Design Fundamentals",
      instructor: "Emma Rodríguez",
      students: 156,
      duration: "8 weeks",
      rating: 4.6,
      price: "$249",
      category: "Design",
      status: "Draft",
      image: "/assets/images/customer/david.jpg",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
    {
      id: "CRS-005",
      title: "Full Stack Development",
      instructor: "David Wilson",
      students: 278,
      duration: "14 weeks",
      rating: 4.9,
      price: "$449",
      category: "Development",
      status: "Active",
      image: "/assets/images/customer/mike.jpg",
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    },
  ];

  return (
    <Box sx={{ pb: 4 }}>
      <Box sx={{ maxWidth: "1600px", mx: "auto" }}>
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
          <Box>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 700, 
                color: "text.primary",
                mb: 0.5,
                letterSpacing: "-0.5px"
              }}
            >
              All Courses
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Manage and view all course information
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              bgcolor: "primary.main",
              textTransform: "none",
              fontWeight: 600,
              px: 3,
              py: 1.5,
              borderRadius: "12px",
              boxShadow: "0px 4px 12px rgba(0, 182, 211, 0.3)",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "primary.dark",
                transform: "translateY(-2px)",
                boxShadow: "0px 6px 16px rgba(0, 182, 211, 0.4)",
              },
            }}
          >
            Add Course
          </Button>
        </Box>

        {/* Search */}
        <Card 
          sx={{ 
            p: 3, 
            mb: 3, 
            borderRadius: "16px",
            background: "linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%)",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
          }}
        >
          <Box sx={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap" }}>
            <TextField
              placeholder="Search courses by title, instructor, or category..."
              size="medium"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "text.secondary" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                maxWidth: "500px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  background: "white",
                  "&:hover": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "primary.main",
                    },
                  },
                },
              }}
            />
            <Button
              variant="outlined"
              startIcon={<FilterListIcon />}
              sx={{
                textTransform: "none",
                borderRadius: "12px",
                px: 3,
                py: 1.5,
                borderColor: "grey.300",
                color: "text.primary",
                fontWeight: 500,
                "&:hover": {
                  borderColor: "primary.main",
                  bgcolor: "rgba(0, 182, 211, 0.05)",
                },
              }}
            >
              Filters
            </Button>
          </Box>
        </Card>

        {/* Courses Grid */}
        <Grid container spacing={3}>
          {courses.map((course, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <CourseCard course={course} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AllCourse;
