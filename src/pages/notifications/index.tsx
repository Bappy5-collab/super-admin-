// pages/index.tsx
import React from "react";
import {  Container } from "@mui/material";
import NotificationsPage from "@/Components/Dashboard/Notifications/NotificationPage";



const Notifications: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <NotificationsPage />
    </Container>
  );
};

export default Notifications;
