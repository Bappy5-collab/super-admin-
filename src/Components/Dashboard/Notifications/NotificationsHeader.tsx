import React from "react";
import { Card, Grid, Typography, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import UpdateIcon from "@mui/icons-material/SystemUpdate";


interface StatCardProps {
  label: string;
  value: number;
  color: string;               
  icon: React.ElementType; 
  iconColor?: string;          
  iconSize?: number;           
}

const StatCard = ({
  label,
  value,
  color,
  icon: Icon,
  iconColor = "#fff",
  iconSize = 24,
}: StatCardProps) => (
  <Card
    sx={{
      p: 2,
      borderRadius: 3,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: 2,
      height: "100%",
    }}
  >
    <Box>
      <Typography color="text.secondary">{label}</Typography>
      <Typography variant="h6" fontWeight="bold">
        {value}
      </Typography>
    </Box>

    <Box
      sx={{
        bgcolor: color,
        p: 1.5,
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box component={Icon} sx={{ color: iconColor, fontSize: iconSize }} />
    </Box>
  </Card>
);

interface Notification {
  title: string;
  message: string;
  time: string;
  type: string;
  read: boolean;
}

// Sample notifications
const notifications: Notification[] = [
  { title: "New Sale - $49.99", message: 'User "alex_dev" purchased your AI Writing Assistant tool.', time: "2 hours ago", type: "Sales", read: false },
  { title: "New 5-Star Review", message: 'Sarah Chen: "Amazing tool!"', time: "4 hours ago", type: "Reviews", read: false },
  { title: "New Trial User", message: 'User "mike_startup" started a free trial', time: "6 hours ago", type: "Sales", read: true },
  { title: "Platform Update Available", message: "New analytics features available.", time: "1 day ago", type: "System", read: true },
  { title: "Monthly Payout Processed", message: "Your earnings transferred", time: "2 days ago", type: "System", read: true },
  { title: "Feature Request", message: 'User "team_alpha" requested batch processing', time: "3 days ago", type: "Reviews", read: true },
  { title: "Milestone Achieved!", message: "10,000 downloads reached", time: "5 days ago", type: "System", read: true },
];

export default function NotificationHeader() {
  // Compute dynamic values
  const unreadCount = notifications.filter(n => !n.read).length;
  const reviewCount = notifications.filter(n => n.type === "Reviews").length;
  const salesCount = notifications.filter(n => n.type === "Sales").length;
  const systemCount = notifications.filter(n => n.type === "System").length;

  return (
    <Grid container spacing={2} columns={12} sx={{ mb: 3, }}>
      <Grid size={3} sx={{boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.1)"}}>
        <StatCard
          label="Unread"
          value={unreadCount}
          color="#fde7e7"
          icon={NotificationsIcon}
          iconColor="red"
          iconSize={28}
        />
      </Grid>
      <Grid size={3}>
        <StatCard
          label="New Reviews"
          value={reviewCount}
          color="#fff3e0"
          icon={StarIcon}
          iconColor="orange"
          iconSize={28}
        />
      </Grid>
      <Grid size={3}>
        <StatCard
          label="Sales Alerts"
          value={salesCount}
          color="#e8f5e9"
          icon={ShoppingCartIcon}
          iconColor="green"
          iconSize={28}
        />
      </Grid>
      <Grid size={3}>
        <StatCard
          label="System Updates"
          value={systemCount}
          color="#e3f2fd"
          icon={UpdateIcon}
          iconColor="blue"
          iconSize={28}
        />
      </Grid>
    </Grid>
  );
}
