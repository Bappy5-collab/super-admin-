import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Box,
  Chip,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";

const RecentStudents: React.FC = () => {
  const router = useRouter();
  const students = [
    {
      id: "STU-001",
      name: "John Doe",
      course: "Web Development",
      enrollmentDate: "Jan 15, 2024",
      status: "Active",
      avatar: "/assets/images/customer/mike.jpg",
    },
    {
      id: "STU-002",
      name: "Jane Smith",
      course: "Data Science",
      enrollmentDate: "Feb 20, 2024",
      status: "Active",
      avatar: "/assets/images/customer/sara.jpg",
    },
    {
      id: "STU-003",
      name: "Mike Chen",
      course: "Mobile Development",
      enrollmentDate: "Mar 10, 2024",
      status: "Pending",
      avatar: "/assets/images/customer/mike.jpg",
    },
    {
      id: "STU-004",
      name: "Emma Rodríguez",
      course: "UI/UX Design",
      enrollmentDate: "Apr 5, 2024",
      status: "Active",
      avatar: "/assets/images/customer/emma.jpg",
    },
  ];

  return (
    <Card 
      sx={{ 
        borderRadius: 3, 
        height: "100%",
        background: "linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%)",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.12)",
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <Typography sx={{ fontWeight: 700, fontSize: "20px", color: "text.primary", letterSpacing: "-0.5px" }}>
            Recent Students
          </Typography>
          <Button
            size="small"
            endIcon={<ArrowForwardIcon />}
            onClick={() => router.push("/all-student")}
            sx={{
              textTransform: "none",
              color: "primary.main",
              fontWeight: 600,
              borderRadius: "8px",
              px: 2,
              py: 0.5,
              "&:hover": {
                background: "rgba(0, 182, 211, 0.1)",
              },
            }}
          >
            View All
          </Button>
        </Box>
        <Box sx={{ overflowX: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600, color: "text.secondary", fontSize: "13px", py: 1.5, borderBottom: "2px solid", borderColor: "grey.200" }}>
                  Student
                </TableCell>
                <TableCell sx={{ fontWeight: 600, color: "text.secondary", fontSize: "13px", py: 1.5, borderBottom: "2px solid", borderColor: "grey.200" }}>
                  Course
                </TableCell>
                <TableCell sx={{ fontWeight: 600, color: "text.secondary", fontSize: "13px", py: 1.5, borderBottom: "2px solid", borderColor: "grey.200" }}>
                  Date
                </TableCell>
                <TableCell sx={{ fontWeight: 600, color: "text.secondary", fontSize: "13px", py: 1.5, borderBottom: "2px solid", borderColor: "grey.200" }}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student, index) => (
                <TableRow 
                  key={index}
                  sx={{
                    "&:hover": {
                      background: "rgba(0, 182, 211, 0.03)",
                    },
                    transition: "background 0.2s ease",
                  }}
                >
                  <TableCell sx={{ py: 2 }}>
                    <Box display="flex" alignItems="center" gap={1.5}>
                      <Avatar 
                        sx={{ 
                          width: 40, 
                          height: 40,
                          border: "2px solid",
                          borderColor: "grey.200",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                        }} 
                        src={student.avatar} 
                        alt={student.name} 
                      />
                      <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "14px" }}>
                        {student.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ py: 2 }}>
                    <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "13px" }}>
                      {student.course}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ py: 2 }}>
                    <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "13px" }}>
                      {student.enrollmentDate}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ py: 2 }}>
                    <Chip
                      label={student.status}
                      size="small"
                      sx={{
                        bgcolor: student.status === "Active" ? "success.light" : "warning.light",
                        color: student.status === "Active" ? "success.dark" : "warning.dark",
                        fontWeight: 600,
                        fontSize: "11px",
                        height: "24px",
                        borderRadius: "6px",
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RecentStudents;
