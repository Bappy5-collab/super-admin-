import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Chip,
  Box,
  Button,
  Card,
  Typography,
} from "@mui/material";

interface Student {
  id: string;
  name: string;
  email: string;
  course: string;
  enrollmentDate: string;
  status: string;
  avatar: string;
}

interface StudentsTableProps {
  students: Student[];
}

const StudentsTable: React.FC<StudentsTableProps> = ({ students }) => {
  return (
    <Card 
      sx={{ 
        borderRadius: "16px",
        background: "linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%)",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
        overflow: "hidden",
      }}
    >
      <Box sx={{ overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ background: "rgba(0, 182, 211, 0.03)" }}>
              <TableCell sx={{ fontWeight: 700, color: "text.primary", fontSize: "13px", py: 2, borderBottom: "2px solid", borderColor: "grey.200" }}>
                Student ID
              </TableCell>
              <TableCell sx={{ fontWeight: 700, color: "text.primary", fontSize: "13px", py: 2, borderBottom: "2px solid", borderColor: "grey.200" }}>
                Student
              </TableCell>
              <TableCell sx={{ fontWeight: 700, color: "text.primary", fontSize: "13px", py: 2, borderBottom: "2px solid", borderColor: "grey.200" }}>
                Email
              </TableCell>
              <TableCell sx={{ fontWeight: 700, color: "text.primary", fontSize: "13px", py: 2, borderBottom: "2px solid", borderColor: "grey.200" }}>
                Course
              </TableCell>
              <TableCell sx={{ fontWeight: 700, color: "text.primary", fontSize: "13px", py: 2, borderBottom: "2px solid", borderColor: "grey.200" }}>
                Enrollment Date
              </TableCell>
              <TableCell sx={{ fontWeight: 700, color: "text.primary", fontSize: "13px", py: 2, borderBottom: "2px solid", borderColor: "grey.200" }}>
                Status
              </TableCell>
              <TableCell sx={{ fontWeight: 700, color: "text.primary", fontSize: "13px", py: 2, borderBottom: "2px solid", borderColor: "grey.200" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow 
                key={index}
                sx={{
                  transition: "all 0.2s ease",
                  "&:hover": {
                    background: "rgba(0, 182, 211, 0.03)",
                    transform: "scale(1.001)",
                  },
                }}
              >
                <TableCell sx={{ py: 2.5 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: "text.secondary", fontSize: "13px" }}>
                    {student.id}
                  </Typography>
                </TableCell>
                <TableCell sx={{ py: 2.5 }}>
                  <Box display="flex" alignItems="center" gap={1.5}>
                    <Avatar
                      sx={{ 
                        width: 44, 
                        height: 44,
                        border: "2px solid",
                        borderColor: "grey.200",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                      }}
                      src={student.avatar}
                      alt={student.name}
                    />
                    <Typography variant="body1" sx={{ fontWeight: 600, fontSize: "14px" }}>
                      {student.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ py: 2.5 }}>
                  <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "13px" }}>
                    {student.email}
                  </Typography>
                </TableCell>
                <TableCell sx={{ py: 2.5 }}>
                  <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 500, fontSize: "13px" }}>
                    {student.course}
                  </Typography>
                </TableCell>
                <TableCell sx={{ py: 2.5 }}>
                  <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "13px" }}>
                    {student.enrollmentDate}
                  </Typography>
                </TableCell>
                <TableCell sx={{ py: 2.5 }}>
                  <Chip
                    label={student.status}
                    size="small"
                    sx={{
                      bgcolor:
                        student.status === "Active"
                          ? "success.light"
                          : student.status === "Pending"
                          ? "warning.light"
                          : "info.light",
                      color:
                        student.status === "Active"
                          ? "success.dark"
                          : student.status === "Pending"
                          ? "warning.dark"
                          : "info.dark",
                      fontWeight: 600,
                      fontSize: "11px",
                      height: "26px",
                      borderRadius: "8px",
                    }}
                  />
                </TableCell>
                <TableCell sx={{ py: 2.5 }}>
                  <Button
                    size="small"
                    sx={{
                      textTransform: "none",
                      color: "primary.main",
                      fontWeight: 600,
                      fontSize: "13px",
                      borderRadius: "8px",
                      px: 2,
                      "&:hover": {
                        bgcolor: "rgba(0, 182, 211, 0.1)",
                      },
                    }}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};

export default StudentsTable;

