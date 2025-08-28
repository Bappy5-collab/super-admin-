import React from "react";
import { Card, CardContent, Typography, Divider, List, ListItemButton, ListItemText, Box } from "@mui/material";
import { Settings, Edit, Upload } from "@mui/icons-material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const buttons = [
  { icon: <Edit sx={{ color: '#00B6D3' }} />, text: "Edit Product Details" },
  { icon: <Settings sx={{ color: '#00B6D3' }} />, text: "Pricing Settings" },
  { icon: <Upload sx={{ color: '#00B6D3' }} />, text: "Upload New Version" },
];

const ProductManagement: React.FC = () => (
  <Card sx={{ borderRadius: 3, height: 290 }}>
    <CardContent>
      <Typography sx={{ fontSize: '16px', lineHeight: '100%', fontWeight: '600', mb: 2 }}>Product Management</Typography>

      <List>
        {buttons.map((btn, index) => (
          <ListItemButton
            key={index}
            sx={{
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              mb: 1,
              px: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {btn.icon}
              <ListItemText primary={btn.text} />
            </Box>
            <ChevronRightIcon />
          </ListItemButton>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default ProductManagement;
