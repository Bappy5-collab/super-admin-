import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, bgcolor: "#f9fafb", minHeight: "100vh", p: 2 }}>
        <Navbar />
        {children}
      </Box>
    </Box>
  );
}
