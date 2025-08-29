import { Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";
import NotificationList from "./NotificationList";

interface Notification {
  title: string;
  message: string;
  time: string;
  chipLabel?: string;
  chipColor?: "default" | "primary" | "success" | "warning" | "error";
  type: string;
  read: boolean;
}

export default function NotificationTabs() {
  const [tab, setTab] = useState(0);

  // Sample notifications
  const notifications: Notification[] = [
    {
      title: "New Sale - $49.99",
      message: 'User "alex_dev" purchased your AI Writing Assistant tool.',
      time: "2 hours ago",
      chipLabel: "New",
      chipColor: "error",
      type: "Sales",
      read: false,
    },
    {
      title: "New 5-Star Review",
      message: 'Sarah Chen: "Amazing tool! Really helped streamline our workflow."',
      time: "4 hours ago",
      chipLabel: "New",
      chipColor: "error",
      type: "Reviews",
      read: false,
    },
    {
      title: "New Trial User",
      message: 'User "mike_startup" started a free trial of your AI tool.',
      time: "6 hours ago",
      type: "Sales",
      read: true,
    },
    {
      title: "Platform Update Available",
      message: "New analytics features and API improvements are now available.",
      time: "1 day ago",
      chipLabel: "Important",
      chipColor: "primary",
      type: "System",
      read: true,
    },
    {
      title: "Monthly Payout Processed",
      message: "Your earnings of $2,654.80 have been transferred to your account.",
      time: "2 days ago",
      type: "System",
      read: true,
    },
    {
      title: "Feature Request from User",
      message: 'User "team_alpha" requested batch processing capability for your tool.',
      time: "3 days ago",
      type: "Reviews",
      read: true,
    },
    {
      title: "Milestone Achieved!",
      message: "Congratulations! Your AI tool has reached 10,000 total downloads.",
      time: "5 days ago",
      chipLabel: "Milestone",
      chipColor: "success",
      type: "System",
      read: true,
    },
  ];

  // Tabs with dynamic counts
  const tabs = [
    { label: "All", count: notifications.length },
    { label: "Unread", count: notifications.filter(n => !n.read).length },
    { label: "Sales", count: notifications.filter(n => n.type === "Sales").length },
    { label: "Reviews", count: notifications.filter(n => n.type === "Reviews").length },
    { label: "System", count: notifications.filter(n => n.type === "System").length },
  ];

  // Filter notifications for selected tab
  const filteredNotifications = () => {
    const currentTab = tabs[tab].label;
    if (currentTab === "All") return notifications;
    if (currentTab === "Unread") return notifications.filter(n => !n.read);
    return notifications.filter(n => n.type === currentTab);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
        <Tabs value={tab} onChange={(_, v) => setTab(v)} textColor="primary">
          {tabs.map((t, idx) => (
            <Tab key={idx} label={`${t.label} (${t.count})`} />
          ))}
        </Tabs>
      </Box>

      <NotificationList notifications={filteredNotifications()} />
    </Box>
  );
}
