import { Container } from "@mui/material";

import NotificationHeader from "./NotificationsHeader";
import NotificationTabs from "./NotificationTabs";

export default function NotificationsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <NotificationHeader />
      <NotificationTabs />  
    </Container>
  );
}
