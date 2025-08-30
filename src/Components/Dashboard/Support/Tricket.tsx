import { useState } from "react";
import { Box, Card, CardContent, Typography, Chip, Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
export default function SupportTicketsSection() {
    // State for tickets with descriptions
    const [tickets] = useState([
        {
            id: "#2847",
            title: "API Integration Issues",
            desc: "Having trouble with webhook responses from payment system",
            status: "In Progress",
            color: "warning",
            created: "Dec 8, 2024",
            updated: "2 hours ago",
        },
        {
            id: "#2834",
            title: "Revenue Discrepancy",
            desc: "Dashboard showing different revenue numbers than email reports",
            status: "Resolved",
            color: "success",
            created: "Dec 5, 2024",
            updated: "Dec 6, 2024",
        },
        {
            id: "#2821",
            title: "Product Upload Error",
            desc: "Getting timeout errors when uploading large model files",
            status: "Closed",
            color: "default",
            created: "Dec 3, 2024",
            updated: "1 day ago",
        },
    ]);

    // State for contact info
    const contactInfo = [
        { label: "Email Support", value: "support@perfectai.com", icon: <EmailIcon />, bg: "#E0F2FE", color: "#0284C7" },
        { label: "Phone Support", value: "+1 (555) 123-4567", icon: <PhoneIcon />, bg: "#DCFCE7", color: "#16A34A" },
        { label: "Business Hours", value: "Mon-Fri, 9AM-6PM EST", icon: <AccessTimeIcon />, bg: "#F3E8FF", color: "#9333EA" },
    ];

    // State for system status
    const [systemStatus] = useState([
        { label: "API Services", status: "Operational", color: "success.main" },
        { label: "Payment System", status: "Operational", color: "success.main" },
        { label: "File Uploads", status: "Degraded", color: "warning.main" },
        { label: "Analytics", status: "Operational", color: "success.main" },
    ]);

    return (
        <Grid container spacing={2} mt={2}>
            {/* Left side: Tickets */}
            <Grid size={{ xs: 12, md: 8 }}>
                <Card sx={{ borderRadius: 2, minHeight: 450 }}>
                    <CardContent>
                        <Typography fontWeight={600} mb={2}>
                            My Support Tickets
                        </Typography>
                        {tickets.map((ticket, i) => (
                            <Box
                                key={i}
                                mb={2}
                                p={2}
                                sx={{
                                    border: "1px solid #E5E7EB",
                                    borderRadius: "8px",
                                }}
                            >
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Typography fontWeight={500}>
                                        {ticket.id} - {ticket.title}
                                    </Typography>
                                    <Chip
                                        label={ticket.status}
                                        size="small"
                                        sx={{
                                            bgcolor:
                                                ticket.color === "success"
                                                    ? "#16A34A"
                                                    : ticket.color === "warning"
                                                        ? "#F59E0B"
                                                        : "#6B7280",
                                            color: "#fff",
                                        }}
                                    />

                                </Box>

                                <Typography variant="body2" color="text.secondary" sx={{ my: 0.5 }}>
                                    {ticket.desc}
                                </Typography>

                                <Box display="flex" justifyContent="space-between">
                                    <Typography variant="caption" color="text.secondary">
                                        Created: {ticket.created}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        Last updated: {ticket.updated}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}

                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography sx={{ cursor: "pointer", color: "#00B6D3" }}>
                                View Status Page
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>

            {/* Right side: Contact Info + System Status */}
            <Grid size={{ xs: 12, md: 4 }}>
                {/* Contact Info */}
                <Card sx={{ borderRadius: 2, mb: 2, minHeight: 220 }}>
                    <CardContent>
                        <Typography fontWeight={600} mb={1}>
                            Contact Information
                        </Typography>
                        {contactInfo.map((item, i) => (
                            <Box
                                key={i}
                                display="flex"
                                alignItems="center"
                                gap={1.5}
                                mb={1.5}
                            >
                                <Box
                                    sx={{
                                        color: item.color,
                                        borderRadius: "50%",
                                        p: 1,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: 32,
                                        height: 32,
                                    }}
                                >
                                    {item.icon}
                                </Box>

                                <Box>
                                    <Typography variant="body2">{item.label}</Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {item.value}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </CardContent>
                </Card>

                {/* System Status */}
                <Card sx={{ borderRadius: 2, minHeight: 213 }}>
                    <CardContent>
                        <Typography fontWeight={600} mb={1}>
                            System Status
                        </Typography>
                        {systemStatus.map((sys, i) => (
                            <Box
                                key={i}
                                sx={{ display: "flex", justifyContent: "space-between", mb: 1.1 }}
                            >
                                <Typography variant="body2">{sys.label}</Typography>
                                <Typography variant="body2" color={sys.color}>
                                    {sys.status}
                                </Typography>
                            </Box>
                        ))}
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography sx={{ cursor: "pointer", color: "#00B6D3" }}>
                                View Status Page
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>

    );
}
