import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import ScienceIcon from '@mui/icons-material/Science';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StarRateIcon from '@mui/icons-material/StarRate';
const stats = [
  {
    label: "Total Views",
    value: "12.4K",
    change: "+12% from last month",
    icon: <VisibilityIcon sx={{ fontSize: 32, color: "#1976d2" }} />,
    color: '#10B981',
    bg: "#E5E7EB"
  },
  {
    label: "Downloads",
    value: "3.2K",
    change: "+8% from last month",
    icon: <CloudDownloadIcon sx={{ fontSize: 32, color: "#2e7d32" }} />,
    color: '#10B981',
    bg: "#DCFCE7"
  },
  {
    label: "Trial Uses",
    value: "1.8K",
    change: "-3% from last month",
    icon: <ScienceIcon sx={{ fontSize: 32, color: "#9333EA" }} />,
    color: '#EF4444',
    bg: "#F3E8FF"
  },
  {
    label: "Revenue",
    value: "$2,840",
    change: "+24% from last month",
    icon: <AttachMoneyIcon sx={{ fontSize: 32, color: "#CA8A04" }} />,
    color: '#10B981',
    bg: "#FEF9C3"
  },
  {
    label: "Rating",
    value: "4.8",
    change: "",
    icon: <StarRateIcon sx={{ fontSize: 32, color: "#EA580C" }} />,
    color: '#10B981',
    bg: "#FFEDD5"
  },
];
const StatsSection: React.FC = () => (
  <Grid
    container
    spacing={{ xs: 2, md: 30 }}
    columns={{ xs: 4, sm: 8, md: 12 }}
    sx={{ width: "100%", mb: 3 }}
  >
    {stats.map((stat, i) => (
      <Grid key={i} size={{ xs: 4, sm: 4, md: 2 }}>
        <Card
          sx={{
            borderRadius: '12px',
            height: "100%",
            width: '204px',
            boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.1)",
          }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    color: '#4B5563'
                  }}>
                  {stat.label}
                </Typography >
                <Typography
                  sx={{
                    fontSize: '24px',
                    fontWeight: '700',
                    lineHeight: '32px',
                    color: '#111827'
                  }}>
                  {stat.value}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    color: stat.color,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {stat.change ? (
                    stat.change
                  ) : (
                    <Box sx={{ display: 'flex' }}>
                      {[...Array(5)].map((_, index) => (
                        <StarRateIcon key={index} sx={{ fontSize: 20, color: '#FACC15' }} />
                      ))}
                    </Box>
                  )}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '80px',
                  height: '50px',
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  backgroundColor: stat.bg,

                }}
              >
                {stat.icon}
              </Box>

            </Box>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default StatsSection;
