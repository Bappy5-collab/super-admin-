import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import CodeIcon from "@mui/icons-material/Code";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export default function ResourcesSection() {
  const resources = [
    { 
      title: "Getting Started Guide", 
      desc: "Learn how to set up and optimize your AI tool listing", 
      link: "Read Guide", 
      icon: <BookIcon sx={{ fontSize: 32, color: "#4F46E5" }} />,
      bg: "#E0E7FF" // background color for icon
    },
    { 
      title: "API Documentation", 
      desc: "Integrate with our platform using our comprehensive API", 
      link: "View Docs", 
      icon: <CodeIcon sx={{ fontSize: 32, color: "#16A34A" }} />,
      bg: "#DCFCE7"
    },
    { 
      title: "Video Tutorials", 
      desc: "Watch step-by-step tutorials for common tasks", 
      link: "Watch Videos", 
      icon: <PlayCircleIcon sx={{ fontSize: 32, color: "#D97706" }} />,
      bg: "#FEF3C7"
    },
  ];

  return (
    <Grid container spacing={2} mt={2}>
      {resources.map((item, i) => (
        <Grid size={{ xs: 12, md: 4 }} key={i}>
          <Card sx={{ borderRadius: 2, height: "100%", textAlign: "center" }}>
            <CardContent>
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  bgcolor: item.bg,
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto", // center horizontally
                }}
              >
                {item.icon}
              </Box>
              <Typography fontWeight={600} mt={1}>{item.title}</Typography>
              <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
              <Typography color="primary" sx={{ cursor: "pointer", fontSize: 14, mt: 1 }}>{item.link}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
