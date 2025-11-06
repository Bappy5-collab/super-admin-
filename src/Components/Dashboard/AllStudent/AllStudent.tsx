import React from "react";
import {
  Typography,
  Box,
  Button,
  TextField,
  InputAdornment,
  Card,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import StudentsTable from "./StudentsTable";

const AllStudent: React.FC = () => {
  const students = [
    {
      id: "STU-001",
      name: "John Doe",
      email: "john.doe@example.com",
      course: "Web Development",
      enrollmentDate: "Jan 15, 2024",
      status: "Active",
      avatar: "/assets/images/customer/mike.jpg",
    },
    {
      id: "STU-002",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      course: "Data Science",
      enrollmentDate: "Feb 20, 2024",
      status: "Active",
      avatar: "/assets/images/customer/sara.jpg",
    },
    {
      id: "STU-003",
      name: "Mike Chen",
      email: "mike.chen@example.com",
      course: "Mobile Development",
      enrollmentDate: "Mar 10, 2024",
      status: "Pending",
      avatar: "/assets/images/customer/mike.jpg",
    },
    {
      id: "STU-004",
      name: "Emma Rodríguez",
      email: "emma.rodriguez@example.com",
      course: "UI/UX Design",
      enrollmentDate: "Apr 5, 2024",
      status: "Active",
      avatar: "/assets/images/customer/emma.jpg",
    },
    {
      id: "STU-005",
      name: "David Wilson",
      email: "david.wilson@example.com",
      course: "Full Stack Development",
      enrollmentDate: "May 12, 2024",
      status: "Completed",
      avatar: "/assets/images/customer/david.jpg",
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
              All Students
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Manage and view all student information
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
            Add Student
          </Button>
        </Box>

        {/* Search and Filters */}
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
              placeholder="Search students by name, email, or course..."
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

        {/* Students Table */}
        <StudentsTable students={students} />
      </Box>
    </Box>
  );
};

export default AllStudent;
