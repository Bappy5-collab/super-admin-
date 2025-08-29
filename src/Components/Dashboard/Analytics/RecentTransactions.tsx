import React from "react";
import {
    Paper,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
    Chip,
    Box,
    Button,
} from "@mui/material";

const RecentTransactions = () => {
    const rows = [
        { id: "#TXN-2024-001", name: "Sarah Johnson", type: "Premium Plan", amount: "$49.99", date: "Dec 10, 2024", status: "Completed", avater: '/assets/images/customer/sara.jpg' },
        { id: "#TXN-2024-002", name: "Mike Chen", type: "API Credits", amount: "$25.00", date: "Dec 9, 2024", status: "Completed", avater: '/assets/images/customer/mike.jpg' },
        { id: "#TXN-2024-003", name: "Emma Rodríguez", type: "One-time Purchase", amount: "$19.99", date: "Dec 8, 2024", status: "Pending", avater: '/assets/images/customer/emma.jpg' },
        { id: "#TXN-2024-004", name: "David Kumar", type: "Premium Plan", amount: "$49.99", date: "Dec 7, 2024", status: "Completed", avater: '/assets/images/customer/david.jpg' },
    ];

    return (
        <Paper sx={{ p: 2, borderRadius: 3 }}>
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                    Recent Transactions
                </Typography>
                <Button sx={{ textTransform: 'none', fontSize: '14px', fontWeight: '500', color: '#00B6D3', lineHeight: '100%' }} >
                    View all
                </Button>
            </Box>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Transaction ID</TableCell>
                        <TableCell>Customer</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>
                                <Box display="flex" alignItems="center">
                                    <Avatar
                                        sx={{ mr: 1, width: 32, height: 32 }}
                                        src={row.avater} // URL of the image
                                        alt={row.name || "Avatar"} // accessibility
                                    />
                                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                        {row.name}
                                    </Typography>
                                </Box>

                            </TableCell>
                            <TableCell>{row.type}</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>{row.amount}</TableCell>

                            <TableCell>{row.date}</TableCell>
                            <TableCell>
                                <Chip
                                    label={row.status}
                                    size="small"
                                    sx={{
                                        bgcolor:
                                            row.status === "Completed" ? "#DCFCE7" : "#FEF9C3",
                                        color: row.status === "Completed" ? "#166534" : "#854D0E",
                                        fontWeight: 600,
                                    }}
                                />
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default RecentTransactions;
