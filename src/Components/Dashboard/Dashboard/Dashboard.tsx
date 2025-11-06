import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import StatsSection from "./StatusSection";
import RecentStudents from "./RecentStudents";
import RecentCourses from "./RecentCourses";
import EnrollmentChart from "./EnrollmentChart";
import CourseProgress from "./CourseProgress";

const DashboardPage: React.FC = () => {
  return (
    <Box sx={{ pb: 4 }}>
      {/* Stats Cards */}
      <StatsSection />

      {/* Main Dashboard Content */}
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <EnrollmentChart />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <CourseProgress />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <RecentStudents />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <RecentCourses />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
