import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const EnrollmentChart: React.FC = () => {
  const enrollmentData = [
    { month: "Jan", students: 120 },
    { month: "Feb", students: 190 },
    { month: "Mar", students: 300 },
    { month: "Apr", students: 280 },
    { month: "May", students: 450 },
    { month: "Jun", students: 520 },
  ];

  const maxStudents = Math.max(...enrollmentData.map((d) => d.students));

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
            mb: 4,
            color: "text.primary",
            letterSpacing: "-0.5px"
          }}
        >
          Enrollment Overview
        </Typography>
        <Box 
          sx={{ 
            display: "flex", 
            alignItems: "flex-end", 
            justifyContent: "space-between",
            gap: 2, 
            height: "280px",
            px: 1
          }}
        >
          {enrollmentData.map((data, index) => {
            const barHeight = (data.students / maxStudents) * 100;
            return (
              <Box 
                key={index} 
                sx={{ 
                  flex: 1, 
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "flex-end",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: `${barHeight}%`,
                    background: "linear-gradient(180deg, #00B6D3 0%, #0099B3 100%)",
                    borderRadius: "8px 8px 0 0",
                    mb: 1.5,
                    minHeight: "20px",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    cursor: "pointer",
                    "&:hover": {
                      background: "linear-gradient(180deg, #0099B3 0%, #007A8F 100%)",
                      transform: "scaleY(1.05)",
                      boxShadow: "0px 4px 12px rgba(0, 182, 211, 0.3)",
                      "& .bar-label": {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <Typography
                    variant="caption"
                    className="bar-label"
                    sx={{
                      color: "white",
                      fontWeight: 700,
                      fontSize: "11px",
                      position: "absolute",
                      top: -22,
                      left: "50%",
                      transform: "translateX(-50%)",
                      whiteSpace: "nowrap",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                    }}
                  >
                    {data.students}
                  </Typography>
                </Box>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: "text.primary", 
                    fontWeight: 600, 
                    fontSize: "13px",
                    letterSpacing: "0.3px"
                  }}
                >
                  {data.month}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Box sx={{ mt: 3, pt: 2, borderTop: "1px solid", borderColor: "grey.200" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "12px" }}>
              Total Enrollment
            </Typography>
            <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 700 }}>
              {enrollmentData.reduce((sum, d) => sum + d.students, 0).toLocaleString()}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EnrollmentChart;
