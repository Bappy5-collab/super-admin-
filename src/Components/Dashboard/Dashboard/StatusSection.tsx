import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const stats = [
  {
    label: "All Students",
    value: "1,245",
    change: "+12%",
    changeText: "from last month",
    icon: <PeopleIcon sx={{ fontSize: 36 }} />,
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    iconGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    iconBg: "rgba(102, 126, 234, 0.15)",
    iconColor: "#667eea",
    valueColor: "#667eea",
  },
  {
    label: "All Module",
    value: "156",
    change: "+8%",
    changeText: "from last month",
    icon: <MenuBookIcon sx={{ fontSize: 36 }} />,
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    iconGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    iconBg: "rgba(245, 87, 108, 0.15)",
    iconColor: "#f5576c",
    valueColor: "#f5576c",
  },
  {
    label: "Total Views",
    value: "12.4K",
    change: "+24%",
    changeText: "from last month",
    icon: <VisibilityIcon sx={{ fontSize: 36 }} />,
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    iconGradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    iconBg: "rgba(79, 172, 254, 0.15)",
    iconColor: "#4facfe",
    valueColor: "#4facfe",
  },
  {
    label: "All Course",
    value: "45",
    change: "+5",
    changeText: "new courses",
    icon: <SchoolIcon sx={{ fontSize: 36 }} />,
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    iconGradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    iconBg: "rgba(250, 112, 154, 0.15)",
    iconColor: "#fa709a",
    valueColor: "#fa709a",
  },
  {
    label: "Instructor",
    value: "28",
    change: "+3",
    changeText: "new instructors",
    icon: <PersonIcon sx={{ fontSize: 36 }} />,
    gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    iconGradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    iconBg: "rgba(48, 207, 208, 0.15)",
    iconColor: "#30cfd0",
    valueColor: "#30cfd0",
  },
  {
    label: "Growth Rate",
    value: "18.5%",
    change: "+2.3%",
    changeText: "from last month",
    icon: <TrendingUpIcon sx={{ fontSize: 36 }} />,
    gradient: "linear-gradient(135deg, #00B6D3 0%, #0099B3 100%)",
    iconGradient: "linear-gradient(135deg, #00B6D3 0%, #0099B3 100%)",
    iconBg: "rgba(0, 182, 211, 0.15)",
    iconColor: "#00B6D3",
    valueColor: "#00B6D3",
  },
];

const StatsSection: React.FC = () => (
  <Grid
    container
    spacing={3}
    columns={{ xs: 12, sm: 12, md: 12 }}
    sx={{ width: "100%", mb: 4 }}
  >
    {stats.map((stat, i) => (
      <Grid key={i} size={{ xs: 12, sm: 6, md: 2 }}>
        <Card
          sx={{
            borderRadius: '16px',
            height: "100%",
            width: "100%",
            background: "white",
            border: "1px solid",
            borderColor: "grey.200",
            boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.06)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: stat.gradient,
              zIndex: 1,
            },
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.12)",
              borderColor: stat.iconColor,
            },
          }}
        >
          <CardContent sx={{ p: 3, position: "relative", zIndex: 2, "&:last-child": { pb: 3 } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {/* Icon at top */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Box
                  sx={{
                    width: '56px',
                    height: '56px',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "12px",
                    background: stat.iconGradient,
                    color: "white",
                    boxShadow: `0px 4px 12px ${stat.iconColor}40`,
                  }}
                >
                  {stat.icon}
                </Box>
              </Box>

              {/* Label */}
              <Typography
                sx={{
                  fontSize: '13px',
                  fontWeight: '500',
                  lineHeight: '18px',
                  color: 'text.secondary',
                  mb: 1,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                {stat.label}
              </Typography>

              {/* Value - Large and Bold */}
              <Typography
                sx={{
                  fontSize: '36px',
                  fontWeight: '800',
                  lineHeight: '44px',
                  color: stat.valueColor,
                  mb: 1.5,
                  letterSpacing: '-1.5px',
                }}
              >
                {stat.value}
              </Typography>

              {/* Change indicator */}
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 0.5,
                }}
              >
                <ArrowUpwardIcon sx={{ fontSize: 16, color: '#10B981' }} />
                <Typography
                  component="span"
                  sx={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#10B981',
                  }}
                >
                  {stat.change}
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: 'text.secondary',
                    ml: 0.5
                  }}
                >
                  {stat.changeText}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default StatsSection;
