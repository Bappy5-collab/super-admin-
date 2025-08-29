import React from "react";
import { Card, Typography, TextField, Button, Box, Stack, Switch } from "@mui/material";

export default function BillingSettings() {
  return (
    <Card sx={{ p: 3, flex: 1 }}>
      <Typography variant="subtitle1" fontWeight={600} mb={2}>
        Billing Settings
      </Typography>

      <Stack spacing={2}>
        <TextField fullWidth label="Billing Email" defaultValue="john.doe@example.com" />
        <TextField fullWidth label="Company Name" defaultValue="Perfect AI Solutions" />
        <TextField
          fullWidth
          label="Billing Address"
          multiline
          defaultValue="123 Tech Street\nSan Francisco, CA 94105\nUnited States"
        />

        <Stack direction="row" alignItems="center" spacing={1}>
          <Switch defaultChecked />
          <Typography variant="body2">Auto-renew subscription</Typography>
        </Stack>

        <Box>
          <Button variant="contained">Save Settings</Button>
        </Box>
      </Stack>
    </Card>
  );
}
