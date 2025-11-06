import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex", bgcolor: "background.default", minHeight: "100vh" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, bgcolor: "background.default", minHeight: "100vh", width: 0 }}>
        <Navbar />
        <Box sx={{ px: 2 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
