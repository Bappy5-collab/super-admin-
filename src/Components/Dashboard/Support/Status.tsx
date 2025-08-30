import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DescriptionIcon from "@mui/icons-material/Description";
import ChatIcon from "@mui/icons-material/Chat";
import GroupsIcon from "@mui/icons-material/Groups";

export default function TopActions() {
    const actions = [
        {
            title: "Submit Ticket",
            desc: "Get personalized help from our support team",
            icon: <SupportAgentIcon sx={{ fontSize: 32, color: "#4F46E5" }} />,
            bg: "#EEF2FF"   // Indigo
        },
        {
            title: "Documentation",
            desc: "Browse comprehensive guides and tutorials",
            icon: <DescriptionIcon sx={{ fontSize: 32, color: "#059669" }} />,
            bg: "#D1FAE5"   // Green
        },
        {
            title: "Live Chat",
            desc: "Chat with support agents in real-time",
            icon: <ChatIcon sx={{ fontSize: 32, color: "#D97706" }} />,
            bg: "#FEF3C7"   // Amber
        },
        {
            title: "Community",
            desc: "Connect with other AI tool creators",
            icon: <GroupsIcon sx={{ fontSize: 32, color: "#DC2626" }} />,
            bg: "#FEE2E2"   // Red
        },
    ];

    return (
        <Grid container spacing={2}>
            {actions.map((item, i) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
                    <Card sx={{ borderRadius: 2, height: "100%", boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.1)", }}>
                        <CardContent sx={{ textAlign: "center" }}>
                            <Box
                                sx={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    bgcolor: item.bg,
                                    borderRadius: "8px",
                                    width: 56,
                                    height: 56,
                                   
                                    mb: 1
                                }}
                            >
                                {item.icon}
                            </Box>
                            <Typography fontWeight={600} mt={1}>{item.title}</Typography>
                            <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
