import { Box, Button } from "@mui/material";
import NotificationItem from "./NotificationItems";
import AddIcon from '@mui/icons-material/Add';

interface Notification {
  title: string;
  message: string;
  time: string;
  chipLabel?: string;
  chipColor?: "default" | "primary" | "success" | "warning" | "error";
  type: string;
  read: boolean;
}

export default function NotificationList({ notifications }: { notifications: Notification[] }) {
  return (
    <Box>
      {notifications.map((n, i) => (
        <NotificationItem
          key={i}
          title={n.title}
          message={n.message}
          time={n.time}
          type={n.type}  
          chipLabel={n.chipLabel}
          chipColor={n.chipColor}
        />
      ))}

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mx: 'auto', width: '255px' }}>
        <Button
          sx={{ mt: 2, textTransform: "none", bgcolor: '#F3F4F6', color: "#374151" }}
          startIcon={<AddIcon />}
        >
          Load More Notifications
        </Button>
      </Box>
    </Box>
  );
}
