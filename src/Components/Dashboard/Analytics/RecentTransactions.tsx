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
} from "@mui/material";

const RecentTransactions = () => {
    const rows = [
        { id: "#TXN-2024-001", name: "Sarah Johnson", type: "Premium Plan", amount: "$49.99", date: "Dec 10, 2024", status: "Completed" },
        { id: "#TXN-2024-002", name: "Mike Chen", type: "API Credits", amount: "$25.00", date: "Dec 9, 2024", status: "Completed" },
        { id: "#TXN-2024-003", name: "Emma Rodríguez", type: "One-time Purchase", amount: "$19.99", date: "Dec 8, 2024", status: "Pending" },
        { id: "#TXN-2024-004", name: "David Kumar", type: "Premium Plan", amount: "$49.99", date: "Dec 7, 2024", status: "Completed" },
    ];

    return (
        <Paper sx={{ p: 2, borderRadius: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Recent Transactions
            </Typography>
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
                                <Avatar sx={{ mr: 1, display: "inline-flex" }}>{row.name.charAt(0)}</Avatar>
                                {row.name}
                            </TableCell>
                            <TableCell>{row.type}</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>{row.amount}</TableCell>

                            <TableCell>{row.date}</TableCell>
                            <TableCell>
                                <Chip
                                    label={row.status}
                                    color={row.status === "Completed" ? "success" : "warning"}
                                    size="small"
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
