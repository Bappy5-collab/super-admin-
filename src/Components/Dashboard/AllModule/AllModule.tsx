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
import ModulesTable from "./ModulesTable";

const AllModule: React.FC = () => {
  const modules = [
    {
      id: "MOD-001",
      title: "Introduction to React",
      course: "Web Development Bootcamp",
      lessons: 12,
      duration: "4 hours",
      status: "Published",
      createdAt: "Jan 10, 2024",
    },
    {
      id: "MOD-002",
      title: "State Management",
      course: "Web Development Bootcamp",
      lessons: 8,
      duration: "3 hours",
      status: "Published",
      createdAt: "Jan 15, 2024",
    },
    {
      id: "MOD-003",
      title: "Data Visualization",
      course: "Data Science Masterclass",
      lessons: 15,
      duration: "5 hours",
      status: "Draft",
      createdAt: "Feb 5, 2024",
    },
    {
      id: "MOD-004",
      title: "React Native Basics",
      course: "Mobile App Development",
      lessons: 10,
      duration: "3.5 hours",
      status: "Published",
      createdAt: "Mar 1, 2024",
    },
    {
      id: "MOD-005",
      title: "Design Principles",
      course: "UI/UX Design Fundamentals",
      lessons: 7,
      duration: "2.5 hours",
      status: "Published",
      createdAt: "Apr 12, 2024",
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
              All Modules
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Manage and organize all course modules
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
            Add Module
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
              placeholder="Search modules by title or course..."
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

        {/* Modules Table */}
        <ModulesTable modules={modules} />
      </Box>
    </Box>
  );
};

export default AllModule;
