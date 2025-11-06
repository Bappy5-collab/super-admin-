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
import InstructorCard from "./InstructorCard";

const Instructor: React.FC = () => {
  const instructors = [
    {
      id: "INS-001",
      name: "John Smith",
      email: "john.smith@example.com",
      specialization: "Web Development",
      courses: 12,
      students: 1245,
      rating: 4.9,
      status: "Active",
      avatar: "/assets/images/customer/mike.jpg",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      id: "INS-002",
      name: "Jane Doe",
      email: "jane.doe@example.com",
      specialization: "Data Science",
      courses: 8,
      students: 856,
      rating: 4.8,
      status: "Active",
      avatar: "/assets/images/customer/sara.jpg",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      id: "INS-003",
      name: "Mike Chen",
      email: "mike.chen@example.com",
      specialization: "Mobile Development",
      courses: 15,
      students: 1890,
      rating: 4.9,
      status: "Active",
      avatar: "/assets/images/customer/mike.jpg",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      id: "INS-004",
      name: "Emma Rodríguez",
      email: "emma.rodriguez@example.com",
      specialization: "UI/UX Design",
      courses: 10,
      students: 678,
      rating: 4.7,
      status: "Active",
      avatar: "/assets/images/customer/emma.jpg",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
    {
      id: "INS-005",
      name: "David Wilson",
      email: "david.wilson@example.com",
      specialization: "Full Stack Development",
      courses: 14,
      students: 1567,
      rating: 4.9,
      status: "On Leave",
      avatar: "/assets/images/customer/david.jpg",
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
              Instructors
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Manage and view all instructor profiles
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
            Add Instructor
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
              placeholder="Search instructors by name or specialization..."
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

        {/* Instructors Grid */}
        <Grid container spacing={3}>
          {instructors.map((instructor, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <InstructorCard instructor={instructor} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Instructor;
