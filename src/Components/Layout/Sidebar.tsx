import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  ListItemButton,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RateReviewIcon from "@mui/icons-material/RateReview";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PaymentIcon from "@mui/icons-material/Payment";
import SupportIcon from "@mui/icons-material/Support";
import AssessmentIcon from "@mui/icons-material/Assessment";
import Link from "next/link";
import { useRouter } from "next/router";

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { text: "Promote Your Tool", path: "/promote" },
  { text: "Reviews", icon: <RateReviewIcon />, path: "/reviews" },
  { text: "Analytics", icon: <AssessmentIcon />, path: "/analytics" },
  { text: "Notifications", icon: <NotificationsIcon />, path: "/notifications" },
  { text: "Billing", icon: <PaymentIcon />, path: "/billing" },
  { text: "Support", icon: <SupportIcon />, path: "/support" },
];

export default function Sidebar() {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: 220,
        bgcolor: "#fff",
        p: 2,
        borderRight: "1px solid #e0e0e0",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
          Perfect AI
        </Typography>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <Link href={item.path} passHref legacyBehavior>
                <ListItemButton
                  component="a"
                  selected={router.pathname === item.path} // highlight active tab
                >
                  {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ textAlign: "center" }}>
        <Avatar
          src="/avatar.png"
          sx={{ width: 50, height: 50, mx: "auto" }}
        />
        <Typography>John Doe</Typography>
        <Typography variant="body2" color="textSecondary">
          Developer
        </Typography>
      </Box>
    </Box>
  );
}
