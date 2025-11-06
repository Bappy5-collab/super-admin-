import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import DownloadIcon from "@mui/icons-material/Download";
import SettingsIcon from "@mui/icons-material/Settings";
import DoneAllIcon from "@mui/icons-material/DoneAll";

export default function Navbar() {
  const router = useRouter();
  const pageName = router.pathname.replace("/", "") || "dashboard";

  const pageTitle =
    pageName === "reviews"
      ? "Reviews & Feedback"
      : pageName === "analytics"
        ? "Financial Analytics"
        : pageName === "all-student"
          ? "All Students"
          : pageName === "all-course"
            ? "All Courses"
            : pageName === "all-module"
              ? "All Modules"
              : pageName.charAt(0).toUpperCase() + pageName.slice(1);

  return (
    <Box sx={{ mb: 3, mt: 2, px: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 1,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: "700",
              lineHeight: "36px",
              color: "text.primary",
              letterSpacing: "-0.5px",
              mb: 0.5,
            }}
          >
            {pageTitle}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "20px",
              color: "text.secondary",
            }}
          >
            {pageName === "notifications"
              ? "Stay updated with your AI tool's activity and important updates."
              : "Welcome back! Here's what's happening with your platform."}
          </Typography>
        </Box>

        {pageName === "reviews" && (
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            sx={{
              borderColor: "grey.300",
              color: "text.primary",
              textTransform: "none",
              borderRadius: "10px",
              px: 3,
              py: 1,
              fontWeight: 600,
              "&:hover": {
                borderColor: "primary.main",
                bgcolor: "rgba(0, 182, 211, 0.05)",
              },
            }}
          >
            Export
          </Button>
        )}

        {pageName === "notifications" && (
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="outlined"
              startIcon={<SettingsIcon />}
              sx={{
                borderColor: "grey.300",
                color: "text.primary",
                textTransform: "none",
                borderRadius: "10px",
                px: 2.5,
                py: 1,
                fontWeight: 600,
                "&:hover": {
                  borderColor: "primary.main",
                  bgcolor: "rgba(0, 182, 211, 0.05)",
                },
              }}
            >
              Settings
            </Button>
            <Button
              variant="contained"
              startIcon={<DoneAllIcon />}
              sx={{
                bgcolor: "primary.main",
                color: "white",
                textTransform: "none",
                borderRadius: "10px",
                px: 2.5,
                py: 1,
                fontWeight: 600,
                boxShadow: "0px 4px 12px rgba(0, 182, 211, 0.3)",
                "&:hover": {
                  bgcolor: "primary.dark",
                  transform: "translateY(-2px)",
                  boxShadow: "0px 6px 16px rgba(0, 182, 211, 0.4)",
                },
              }}
            >
              Mark All
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
