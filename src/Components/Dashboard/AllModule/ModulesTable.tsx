import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Box,
  IconButton,
  Card,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface Module {
  id: string;
  title: string;
  course: string;
  lessons: number;
  duration: string;
  status: string;
  createdAt: string;
}

interface ModulesTableProps {
  modules: Module[];
}

const ModulesTable: React.FC<ModulesTableProps> = ({ modules }) => {
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
                Module ID
              </TableCell>
              <TableCell sx={{ fontWeight: 700, color: "text.primary", fontSize: "13px", py: 2, borderBottom: "2px solid", borderColor: "grey.200" }}>
                Title
              </TableCell>
              <TableCell sx={{ fontWeight: 700, color: "text.primary", fontSize: "13px", py: 2, borderBottom: "2px solid", borderColor: "grey.200" }}>
                Course
              </TableCell>
              <TableCell sx={{ fontWeight: 700, color: "text.primary", fontSize: "13px", py: 2, borderBottom: "2px solid", borderColor: "grey.200" }}>
                Lessons
              </TableCell>
              <TableCell sx={{ fontWeight: 700, color: "text.primary", fontSize: "13px", py: 2, borderBottom: "2px solid", borderColor: "grey.200" }}>
                Duration
              </TableCell>
              <TableCell sx={{ fontWeight: 700, color: "text.primary", fontSize: "13px", py: 2, borderBottom: "2px solid", borderColor: "grey.200" }}>
                Status
              </TableCell>
              <TableCell sx={{ fontWeight: 700, color: "text.primary", fontSize: "13px", py: 2, borderBottom: "2px solid", borderColor: "grey.200" }}>
                Created
              </TableCell>
              <TableCell sx={{ fontWeight: 700, color: "text.primary", fontSize: "13px", py: 2, borderBottom: "2px solid", borderColor: "grey.200" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {modules.map((module, index) => (
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
                    {module.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1" sx={{ fontWeight: 600, fontSize: "14px" }}>
                    {module.title}
                  </Typography>
                </TableCell>
                <TableCell sx={{ py: 2.5 }}>
                  <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "13px" }}>
                    {module.course}
                  </Typography>
                </TableCell>
                <TableCell sx={{ py: 2.5 }}>
                  <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 500, fontSize: "13px" }}>
                    {module.lessons}
                  </Typography>
                </TableCell>
                <TableCell sx={{ py: 2.5 }}>
                  <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "13px" }}>
                    {module.duration}
                  </Typography>
                </TableCell>
                <TableCell sx={{ py: 2.5 }}>
                  <Chip
                    label={module.status}
                    size="small"
                    sx={{
                      bgcolor: module.status === "Published" ? "success.light" : "warning.light",
                      color: module.status === "Published" ? "success.dark" : "warning.dark",
                      fontWeight: 600,
                      fontSize: "11px",
                      height: "26px",
                      borderRadius: "8px",
                    }}
                  />
                </TableCell>
                <TableCell sx={{ py: 2.5 }}>
                  <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "13px" }}>
                    {module.createdAt}
                  </Typography>
                </TableCell>
                <TableCell sx={{ py: 2.5 }}>
                  <Box sx={{ display: "flex", gap: 0.5 }}>
                    <IconButton 
                      size="small" 
                      sx={{ 
                        color: "primary.main",
                        "&:hover": {
                          bgcolor: "rgba(0, 182, 211, 0.1)",
                        },
                      }}
                    >
                      <VisibilityIcon fontSize="small" />
                    </IconButton>
                    <IconButton 
                      size="small" 
                      sx={{ 
                        color: "text.secondary",
                        "&:hover": {
                          bgcolor: "rgba(0, 0, 0, 0.05)",
                        },
                      }}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton 
                      size="small" 
                      sx={{ 
                        color: "error.main",
                        "&:hover": {
                          bgcolor: "rgba(239, 68, 68, 0.1)",
                        },
                      }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};

export default ModulesTable;

