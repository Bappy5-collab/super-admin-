import {  Container } from "@mui/material";
import TopActions from "./Status";
import SupportTicketsSection from "./Tricket";
import FAQSection from "./FAQ";
import ResourcesSection from "./Resources";


export default function SupportPage() {
  return (
    <Container sx={{ py: 3 }}>
      <TopActions />
      <SupportTicketsSection />
      <FAQSection />
      <ResourcesSection />
    </Container>
  );
}
