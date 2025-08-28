import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const pageTitle = router.pathname.replace("/", "") || "Dashboard";

  return (
    <Box sx={{ mb: 3, mt: 3, px: 2 }}>
      <Typography
        sx={{
          mb: '10px',
          fontSize: "30px",
          fontWeight: "700",
          lineHeight: '36px',
          textTransform: "capitalize",
          color: '#00B6D3'
        }}
      >
        {pageTitle}
      </Typography>
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '24px',
          color: '#4B5563'
        }}>
        Welcome back! Here&apos;s what&apos;s happening with your AI tool.
      </Typography>
    </Box>
  );
}
