import React from "react";
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar,
    Typography,
    ListItemButton,
    Divider,
    IconButton,
    Menu,
    MenuItem,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import UploadIcon from "@mui/icons-material/Upload";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "next/link";
import { useRouter } from "next/router";

const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "All module", icon: <MenuBookIcon />, path: "/all-module" },
    { text: "Upload", icon: <UploadIcon />, path: "/upload" },
    { text: "All course", icon: <SchoolIcon />, path: "/all-course" },
    { text: "All student", icon: <PeopleIcon />, path: "/all-student" },
    { text: "Instructor", icon: <PersonIcon />, path: "/instructor" },
];

export default function Sidebar() {
    const router = useRouter();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        handleClose();
        // Handle logout logic here
        router.push('/login');
    };

    return (
        <Box
            sx={{
                width: 255,
                bgcolor: "white",
                p: 3,
                borderRight: "1px solid",
                borderColor: "grey.200",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "sticky",   
                top: 0,
                boxShadow: "2px 0 8px rgba(0, 0, 0, 0.04)",
            }}
        >
            <Box>
                <Box sx={{ mb: 4 }}>
                    <Typography
                        sx={{
                            fontSize: "28px",
                            fontWeight: 800,
                            color: "primary.main",
                            letterSpacing: "-0.5px",
                            lineHeight: 1.2,
                        }}
                    >
                        Safi Care
                    </Typography>
                </Box>
                <List sx={{ mt: 2 }}>
                    {menuItems.map((item) => {
                        const isActive = router.pathname === item.path;
                        return (
                            <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
                                <Link href={item.path} passHref legacyBehavior>
                                    <ListItemButton
                                        component="a"
                                        sx={{
                                            color: isActive ? "primary.main" : "text.primary",
                                            bgcolor: isActive ? "primary.main" + "1A" : "transparent",
                                            borderRadius: '12px',
                                            py: 1.5,
                                            px: 2.5,
                                            transition: "all 0.2s ease",
                                            position: "relative",
                                            "&::before": isActive ? {
                                                content: '""',
                                                position: "absolute",
                                                left: 0,
                                                top: "50%",
                                                transform: "translateY(-50%)",
                                                width: "4px",
                                                height: "60%",
                                                bgcolor: "primary.main",
                                                borderRadius: "0 4px 4px 0",
                                            } : {},
                                            "&:hover": {
                                                bgcolor: isActive ? "primary.main" + "1A" : "grey.50",
                                                transform: "translateX(4px)",
                                            },
                                        }}
                                    >
                                        {item.icon && (
                                            <ListItemIcon 
                                                sx={{ 
                                                    color: isActive ? "primary.main" : "text.secondary",
                                                    minWidth: 44,
                                                    "& svg": {
                                                        fontSize: 22
                                                    }
                                                }}
                                            >
                                                {item.icon}
                                            </ListItemIcon>
                                        )}
                                        <ListItemText 
                                            primary={item.text}
                                            primaryTypographyProps={{
                                                fontSize: '0.95rem',
                                                fontWeight: isActive ? 600 : 500,
                                                letterSpacing: "0.2px"
                                            }}
                                        />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        );
                    })}
                </List>
            </Box>

            <Box sx={{ mt: 'auto' }}>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 2,
                    p: 2.5,
                    borderRadius: "12px",
                    bgcolor: "grey.50",
                    transition: "all 0.2s ease",
                    "&:hover": {
                        bgcolor: "grey.100",
                    },
                    position: "relative",
                    border: "1px solid",
                    borderColor: "grey.200"
                }}>
                    <Avatar 
                        src="/assets/images/avater.jpg" 
                        sx={{ 
                            width: 56, 
                            height: 56,
                            border: "3px solid",
                            borderColor: "primary.main",
                            boxShadow: "0 2px 12px rgba(0, 182, 211, 0.25)",
                            flexShrink: 0
                        }} 
                    />
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography 
                            sx={{ 
                                fontWeight: 700, 
                                fontSize: "15px", 
                                color: "text.primary",
                                mb: 0.5,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap"
                            }}
                        >
                            John Doe
                        </Typography>
                        <Typography 
                            variant="body2" 
                            sx={{ 
                                color: "text.secondary", 
                                fontSize: "13px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap"
                            }}
                        >
                            Developer
                        </Typography>
                    </Box>
                    <IconButton
                        size="small"
                        onClick={handleClick}
                        sx={{
                            color: "text.secondary",
                            flexShrink: 0,
                            "&:hover": {
                                bgcolor: "grey.200",
                            }
                        }}
                    >
                        <MoreVertIcon fontSize="small" />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        PaperProps={{
                            sx: {
                                borderRadius: '12px',
                                mt: 1,
                                minWidth: 180,
                                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                            }
                        }}
                    >
                        <MenuItem 
                            onClick={handleLogout}
                            sx={{
                                color: "error.main",
                                fontWeight: 600,
                                gap: 1.5,
                                py: 1.5,
                                "&:hover": {
                                    bgcolor: "rgba(239, 68, 68, 0.1)",
                                }
                            }}
                        >
                            <LogoutIcon fontSize="small" />
                            Logout
                        </MenuItem>
                    </Menu>
                </Box>
            </Box>
        </Box>
    );
}
