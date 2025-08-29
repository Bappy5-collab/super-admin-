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
        : pageName.charAt(0).toUpperCase() + pageName.slice(1);

  return (
    <Box sx={{ mb: 3, mt: 3, px: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            mb: "10px",
            fontSize: "30px",
            fontWeight: "700",
            lineHeight: "36px",
            textTransform: "capitalize",
            color: "#00B6D3",
          }}
        >
          {pageTitle}
        </Typography>

        {pageName === "reviews" && (
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            sx={{
              bgcolor: "#F3F4F6",
              color: "#374151",
              textTransform: "none",
              borderRadius: "8px",
              boxShadow: "none",
              px: 3,
              "&:hover": { bgcolor: "#E5E7EB" },
            }}
          >
            Export
          </Button>
        )}

        {pageName === "notifications" && (
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              startIcon={<SettingsIcon />}
              sx={{
                bgcolor: "#F3F4F6",
                color: "#374151",
                textTransform: "none",
                borderRadius: "8px",
                boxShadow: "none",
                "&:hover": { bgcolor: "#E5E7EB" },
              }}
            >
              Settings
            </Button>
            <Button
              variant="contained"
              startIcon={<DoneAllIcon />}
              sx={{
                bgcolor: "#00B6D3",
                color: "#FFFFFF",
                textTransform: "none",
                borderRadius: "8px",
                boxShadow: "none",
                "&:hover": { bgcolor: "#00B6D3" },
              }}
            >
              Mark All
            </Button>
          </Box>
        )}
      </Box>

      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "24px",
          color: "#4B5563",
        }}
      >
        {pageName === "notifications"
          ? "Stay updated with your AI tool's activity and important updates."
          : "Welcome back! Here&apos;s what&apos;s happening with your AI tool."}
      </Typography>
    </Box>
  );
}
