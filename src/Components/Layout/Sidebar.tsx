import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar,
    Typography,
    ListItemButton,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RateReviewIcon from "@mui/icons-material/RateReview";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PaymentIcon from "@mui/icons-material/Payment";
import SupportIcon from "@mui/icons-material/Support";
import AssessmentIcon from "@mui/icons-material/Assessment";
import Link from "next/link";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import CampaignIcon from "@mui/icons-material/Campaign";

const menuItems = [
    { text: "Dashboard", icon: <Icon icon="material-symbols:monitoring" width="24" height="24" />, path: "/dashboard" },
    { text: "Promote Your Tool", icon: <CampaignIcon />, path: "/promote" },
    { text: "Reviews", icon: <RateReviewIcon />, path: "/reviews" },
    { text: "Analytics", icon: <AssessmentIcon />, path: "/analytics" },
    { text: "Notifications", icon: <NotificationsIcon />, path: "/notifications" },
    { text: "Billing", icon: <PaymentIcon />, path: "/billing" },
    { text: "Support", icon: <SupportIcon />, path: "/support" },
];

export default function Sidebar() {
    const router = useRouter();

    return (
        <Box
            sx={{
                width: 255,
                bgcolor: "#fff",
                p: 2,
                borderRight: "1px solid #e0e0e0",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "sticky",   
                top: 0,              
            }}
        >
            <Box>
                <Typography >
                    <svg width="240" height="80" viewBox="0 0 255 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M255 80H0V0H255V80Z" />
                        <path d="M31.9221 32.6367H24.0083V35.874L24 35.9222L28.7224 35.9106H31.6688C33.6012 35.9106 34.315 36.9187 34.315 38.033C34.315 39.2738 33.6012 40.2096 31.6688 40.2096H28.7224L24.0141 40.1891L24.0077 40.2177V46.6682H28.6082V43.4835H31.9208C36.6836 43.4835 38.9604 40.983 38.9604 38.0155C38.9604 35.1915 36.6836 32.6367 31.9208 32.6367H31.9221Z" fill="#080134" />
                        <path d="M46.0391 46.6682H59.8194V43.1967H50.6396V41.3977H58.1858V38.1414H50.6396V36.1263H59.8194V32.6367H46.0391V46.6682Z" fill="#080134" />
                        <path d="M82.8331 37.7637C82.8331 34.9748 80.7172 32.6367 76.1155 32.6367H67.3506V46.6682H71.9286V42.9078H74.2747L77.6791 46.6682H83.1781L79.2902 42.4233C81.7056 41.5592 82.8324 39.7237 82.8324 37.7637H82.8331ZM75.8628 39.6519H71.9293V35.9106H75.8628C77.7035 35.9106 78.3936 36.7191 78.3936 37.7988C78.3936 38.7713 77.7035 39.6519 75.8628 39.6519Z" fill="#080134" />
                        <path d="M90.2803 46.6682H94.8583V41.8651H102.197V38.6088H94.8583V36.1263H103.6V32.6367H90.2803V46.6682Z" fill="#080134" />
                        <path d="M110.88 46.6682H124.661V43.1967H115.48V41.3977H123.027V38.1414H115.48V36.1263H124.661V32.6367H110.88V46.6682Z" fill="#080134" />
                        <path d="M140.549 43.4639C137.857 43.4639 135.672 41.7733 135.672 39.6493C135.672 37.5254 137.857 35.8363 140.549 35.8363C142.435 35.8363 144.045 36.6447 144.85 37.8328L149.037 36.3579C147.45 34.0012 144.252 32.3633 140.549 32.3633C135.372 32.3633 131.024 35.6387 131.024 39.6493C131.024 43.66 135.372 46.9354 140.549 46.9354C144.252 46.9354 147.497 45.2994 149.061 42.9057L144.851 41.4673C144.045 42.6539 142.458 43.4639 140.549 43.4639Z" fill="#080134" />
                        <path d="M154.868 36.1263H160.458V46.6682H165.059V36.1263H170.65V32.6367H154.868V36.1263Z" fill="#080134" />
                        <path d="M237 25.9688H229.244V50.527H237V25.9688Z" fill="#00B6D3" />
                        <path d="M217.181 50.527L204.738 25.9688H196.918L184.436 50.527H193.047L194.28 47.9201L194.277 47.9192L197.455 41.2385H197.431L200.827 34.0293L203.616 40.0175L203.633 40.0157L207.395 47.9999L207.381 48.014L208.57 50.527H217.181Z" fill="#00B6D3" />
                    </svg>

                </Typography>
                <List>
                    {menuItems.map((item) => {
                        const isActive = router.pathname === item.path;
                        return (
                            <ListItem key={item.text} disablePadding>
                                <Link href={item.path} passHref legacyBehavior>
                                    <ListItemButton
                                        component="a"
                                        sx={{
                                            color: isActive ? "#00B6D3" : "inherit",
                                            bgcolor: isActive ? "#00B6D31A" : "transparent",
                                            borderRadius: '8px',
                                            "&:hover": {
                                                bgcolor: isActive ? "#00B6D31A" : "#f5f5f5",
                                            },
                                        }}
                                    >
                                        {item.icon && <ListItemIcon sx={{ color: isActive ? "#00B6D3" : "inherit" }}>{item.icon}</ListItemIcon>}
                                        <ListItemText primary={item.text} />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        );
                    })}
                </List>
            </Box>

            <Box sx={{}}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', gap: 2 }}>
                    <Avatar src="/assets/images/avater.jpg" sx={{ width: 50, height: 50 }} />
                    <Box>
                        <Typography>John Doe</Typography>

                        <Typography variant="body2" color="textSecondary">
                            Developer
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
