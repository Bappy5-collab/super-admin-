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

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Box>
             <Typography sx={{fontSize:"16px",fontWeight:"500",lineHeight:'24px',color:"#111827"}}>Auto-renew subscription</Typography>
          <Typography sx={{fontSize:"14px",fontWeight:"400",lineHeight:'24px',color:"#4B5563"}}>Automatically renew your plan each month</Typography>
          </Box>
          <Switch
            defaultChecked
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "#fff",
                "& + .MuiSwitch-track": {
                  backgroundColor: "#00B6D3",
                },
              },
              "& .MuiSwitch-track": {
                borderRadius: "20px",
              },
            }}
          />
         
        </Stack>

        <Box>
          <Button sx={{ bgcolor: '#00B6D3', color: '#FFFFFF', borderRadius: '8px', width: '100%' }}>Save Settings</Button>
        </Box>
      </Stack>
    </Card>
  );
}
