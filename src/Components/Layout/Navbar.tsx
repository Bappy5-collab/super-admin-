import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const pageTitle = router.pathname.replace("/", "") || "Dashboard";

  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", textTransform: "capitalize" }}
      >
        {pageTitle}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Welcome back! Here&apos;s what&apos;s happening with your AI tool.
      </Typography>
    </Box>
  );
}
