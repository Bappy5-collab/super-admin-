import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StarIcon from "@mui/icons-material/Star";
import ScienceIcon from "@mui/icons-material/Science";
import SystemUpdateIcon from "@mui/icons-material/SystemUpdate";

interface NotificationItemProps {
  title: string;
  message: string;
  time: string;
  type?: string;
  chipLabel?: string;
  chipColor?: "default" | "primary" | "success" | "warning" | "error";
}

export default function NotificationItem({
  title,
  message,
  time,
  type,
  chipLabel,
  chipColor = "default",
}: NotificationItemProps) {
  // Determine icon, icon bg, icon color, and card left border color
  let IconComponent: React.ElementType | null = null;
  let bgColor = "#eee";
  let iconColor = "#000";
  let borderColor = "#ddd"; // default border

  switch (type) {
    case "Sales":
      IconComponent = AttachMoneyIcon;
      bgColor = "#DCFCE7";
      iconColor = "#16A34A";
      borderColor = "#00B6D3"; // left border
      break;
    case "Reviews":
    case "Rating":
      IconComponent = StarIcon;
      bgColor = "#FEF9C3";
      iconColor = "#CA8A04";
      borderColor = "#FACC15"; // left border
      break;
    case "Users":
      IconComponent = ScienceIcon;
      bgColor = "#f3e5f5";
      iconColor = "#8e24aa";
      borderColor = "#9C27B0"; // left border
      break;
    case "System":
      IconComponent = SystemUpdateIcon;
      bgColor = "#e3f2fd";
      iconColor = "#2196f3";
      borderColor = "#2196f3"; // left border
      break;
    default:
      IconComponent = null;
  }

  return (
    <Card
      sx={{
        mb: 2,
        borderRadius: 3,
        boxShadow: "0px 4px 6px 0px rgba(0,0,0,0.1), 0px 2px 4px 0px rgba(0,0,0,0.06)",
        borderLeft: `4px solid ${borderColor}`, 
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Box sx={{ display: "flex", alignItems: "start", gap: 1 }}>
            {IconComponent && (
              <Box
                sx={{
                  bgcolor: bgColor,
                  color: iconColor,
                  width: 40,
                  height: 40,
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 1,
                }}
              >
                <IconComponent fontSize="small" />
              </Box>
            )}
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">
                {title}{" "}
                {chipLabel && (
                  <Chip
                    label={chipLabel}
                    color={chipColor}
                    size="small"
                    sx={{ ml: 1 }}
                  />
                )}
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={0.5}>
                {message}
              </Typography>
              <Typography variant="caption" color="text.disabled">
                {time}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <IconButton>
            <VisibilityIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
